// lib/queries/doctors.js
import { sql } from "@/lib/db";

// Doctors listing (used in /[lang]/doctors)
export async function getDoctors({ activeOnly = true } = {}) {
  const rows = await sql`
    SELECT
      id,
      slug,
      name_en,
      name_hi,
      name_mr,
      specialization_en,
      specialization_hi,
      specialization_mr,
      image_url,
      is_active
    FROM doctors
    WHERE ${activeOnly} IS FALSE OR is_active = true
    ORDER BY name_en ASC
  `;
  return rows || [];
}

// Single doctor by slug (used in /[lang]/doctors/[slug])
export async function getDoctorBySlug(slug) {
  const rows = await sql`
    SELECT *
    FROM doctors
    WHERE slug = ${slug}
    LIMIT 1
  `;
  return rows?.[0] || null;
}

// Doctors for one department (used in /[lang]/departments/[slug])
export async function getDoctorsByDepartmentUuid(departmentUuid) {
  const rows = await sql`
    SELECT
      id,
      slug,
      name_en,
      name_hi,
      name_mr,
      specialization_en,
      specialization_hi,
      specialization_mr,
      image_url
    FROM doctors
    WHERE department_id = ${departmentUuid}
    ORDER BY name_en ASC
  `;
  return rows || [];
}
