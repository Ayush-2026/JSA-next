// lib/queries/departments.js
import { sql } from "@/lib/db";

/**
 * Returns departments for listing page.
 * Includes multilingual names + short_desc + icon + slug.
 */
export async function getDepartments() {
  const rows = await sql`
    SELECT
      slug,
      icon,
      short_desc,
      name_en,
      name_hi,
      name_mr
    FROM departments
    WHERE is_active = true
    ORDER BY name_en ASC
  `;
  return rows || [];
}

/**
 * Returns a single department by slug with all details needed for detail page.
 */
export async function getDepartmentBySlug(slug) {
  const rows = await sql`
    SELECT
      uuid_id,
      slug,
      icon,
      image_url,
      name_en,
      name_hi,
      name_mr,
      description_en,
      description_hi,
      description_mr
    FROM departments
    WHERE slug = ${slug}
    LIMIT 1
  `;
  return rows?.[0] || null;
}
