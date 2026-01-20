import Link from "next/link";
import Image from "next/image";
import { getDoctors } from "@/lib/queries/doctors";

export default async function DoctorsPage({ params }) {
  const { lang } = await params;
  const doctors = await getDoctors();

  const pick = (row, key) => row[`${key}_${lang}`] || row[`${key}_en`];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#265957]">
        Our Doctors
      </h1>
      <p className="mt-2 text-gray-600">
        Choose a specialist and book your consultation.
      </p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {doctors.map((d) => (
          <Link
            key={d.id}
            href={`/${lang}/doctors/${d.slug}`}
            className="bg-white rounded-2xl shadow border border-gray-100 hover:shadow-lg transition p-4"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={d.image_url || "/assets/doctor-placeholder.png"}
                alt={pick(d, "name")}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-3 font-semibold text-gray-900 text-sm sm:text-base">
              {pick(d, "name")}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {pick(d, "specialization")}
            </p>

            
          </Link>
        ))}
      </div>
    </div>
  );
}
