// app/[lang]/departments/page.js
import Link from "next/link";
import { getDepartments } from "@/lib/queries/departments";

function pickLang(lang, obj, keyBase) {
  if (lang === "hi") return obj[`${keyBase}_hi`] || obj[`${keyBase}_en`] || "";
  if (lang === "mr") return obj[`${keyBase}_mr`] || obj[`${keyBase}_en`] || "";
  return obj[`${keyBase}_en`] || "";
}

export default async function DepartmentsPage({ params }) {
const { lang } = await params; // ✅ unwrap first
const safeLang = (lang || "en").toLowerCase();
const departments = await getDepartments();
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10">
      <h1 className="text-3xl font-bold text-[#265957]">Departments</h1>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {departments.map((d) => {
          const name = pickLang(lang, d, "name");
          return (
            <Link
              key={d.slug}
              href={`/${safeLang}/departments/${d.slug}`}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
            >
              <div className="text-2xl">{d.icon}</div>
              <div className="mt-2 font-semibold">{name}</div>
              <div className="text-xs text-gray-500 mt-1">{d.short_desc}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
