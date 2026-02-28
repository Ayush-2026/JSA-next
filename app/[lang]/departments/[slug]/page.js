// app/[lang]/departments/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDepartmentBySlug } from "@/lib/queries/departments";
import { getDoctorsByDepartmentUuid } from "@/lib/queries/doctors";

function pickLang(lang, obj, keyBase) {
  if (lang === "hi") return obj[`${keyBase}_hi`] || obj[`${keyBase}_en`] || "";
  if (lang === "mr") return obj[`${keyBase}_mr`] || obj[`${keyBase}_en`] || "";
  return obj[`${keyBase}_en`] || "";
}

export default async function DepartmentDetail({ params }) {
  const { lang, slug } = await params;

  const dept = await getDepartmentBySlug(slug);
  if (!dept) return notFound();

  const deptName = pickLang(lang, dept, "name");
  const deptDesc = pickLang(lang, dept, "description");

  const doctors = await getDoctorsByDepartmentUuid(dept.uuid_id);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10">
      <Link
        href={`/${lang}/departments`}
        className="text-sm text-blue-700 hover:underline"
      >
        ← Back to Departments
      </Link>

      {/* Horizontal image */}
      <div className="mt-4 overflow-hidden rounded-2xl border bg-gray-50">
        {dept.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={dept.image_url}
            alt={deptName}
            className="w-full h-44 sm:h-56 md:h-64 object-cover"
          />
        ) : (
          <div className="w-full h-44 sm:h-56 md:h-64 grid place-items-center text-gray-500">
            No image
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="text-3xl">{dept.icon}</div>
        <h1 className="text-3xl font-bold text-[#265957]">{deptName}</h1>
      </div>

      {/* Long description - keep line breaks */}
      <p className="mt-5 text-gray-700 leading-relaxed whitespace-pre-line">
        {deptDesc || "Description coming soon."}
      </p>

      <h2 className="mt-10 text-xl font-semibold text-[#265957]">
        Doctors in this department
      </h2>

      {doctors.length === 0 ? (
        <p className="mt-2 text-gray-600">
          No doctors listed under this department yet.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doc) => {
            const doctorName = pickLang(lang, doc, "name");
            const spec = pickLang(lang, doc, "specialization");

            return (
              <Link
                key={doc.id}
                href={`/${lang}/doctors/${doc.slug}`}
                className="block"
              >
                <div
                  className="
                    bg-white rounded-xl border shadow-sm p-4
                    hover:shadow-md hover:-translate-y-0.5
                    transition
                    focus:outline-none focus:ring-4 focus:ring-blue-100
                  "
                >
                  <div className="font-semibold text-lg text-[#265957]">
                    {doctorName}
                  </div>

                  {spec && (
                    <div className="text-sm text-gray-600 mt-1">{spec}</div>
                  )}

                  {/* Optional image if you have it */}
                  {doc.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={doc.image_url}
                      alt={doctorName}
                      className="mt-3 w-full h-40 object-cover rounded-lg"
                    />
                  ) : null}

                  <div className="mt-3 text-sm font-semibold text-blue-700">
                    View Profile →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}