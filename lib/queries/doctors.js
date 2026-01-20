import { sql } from "@/lib/db";

export async function getDoctors({ activeOnly = true } = {}) {
  const where = activeOnly ? sql`WHERE is_active = TRUE` : sql``;

  const rows = await sql`
    SELECT
      id, slug,
      name_en, name_hi, name_mr,
      specialization_en, specialization_hi, specialization_mr,
      consultation_fee, image_url, is_active
    FROM doctors
    ${where}
    ORDER BY name_en ASC
  `;

  return rows;
}

export async function getDoctorBySlug(slug) {
  const clean = String(slug || "")
    .trim()
    .toLowerCase();

  const rows = await sql`
    SELECT *
    FROM doctors
    WHERE LOWER(slug) = ${clean}
    LIMIT 1
  `;

  return rows[0] || null;
}
