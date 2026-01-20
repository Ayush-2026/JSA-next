import Link from "next/link";
import { getDepartments } from "@/lib/queries/departments";

export default async function DepartmentsPage({ params }) {
  const departments = await getDepartments();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10">
      <h1 className="text-3xl font-bold text-[#265957]">Departments</h1>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {departments.map((d) => (
          <Link
            key={d.slug}
            href={`/${params.lang}/departments/${d.slug}`}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <div className="text-2xl">{d.icon}</div>
            <div className="mt-2 font-semibold">{d.name}</div>
            <div className="text-xs text-gray-500 mt-1">{d.short_desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
