import { departmentsMock } from "@/lib/data/departments";

export async function getDepartments({ limit } = {}) {
  const all = departmentsMock;
  return typeof limit === "number" ? all.slice(0, limit) : all;
}

export async function getDepartmentBySlug(slug) {
  const clean = String(slug || "")
    .trim()
    .toLowerCase();

  return (
    departmentsMock.find(
      (d) =>
        String(d.slug || "")
          .trim()
          .toLowerCase() === clean,
    ) || null
  );
}
