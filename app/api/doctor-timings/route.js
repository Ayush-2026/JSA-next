import { sql } from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const doctorId = searchParams.get("doctorId");
  const dayOfWeek = searchParams.get("dayOfWeek");

  if (!doctorId || dayOfWeek === null) {
    return Response.json(
      { error: "Missing doctorId/dayOfWeek" },
      { status: 400 },
    );
  }

  const rows = await sql`
    SELECT start_time::text as start_time,
           end_time::text as end_time,
           slot_duration_min
    FROM doctor_timings
    WHERE doctor_id = ${doctorId}
      AND day_of_week = ${Number(dayOfWeek)}
      AND is_active = TRUE
    LIMIT 1
  `;

  return Response.json({ timing: rows[0] || null });
}
