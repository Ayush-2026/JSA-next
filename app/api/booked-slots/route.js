import { sql } from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const doctorId = searchParams.get("doctorId");
  const date = searchParams.get("date"); // YYYY-MM-DD

  if (!doctorId || !date) {
    return Response.json({ error: "Missing doctorId/date" }, { status: 400 });
  }

  // get all booked start-times for that date (confirmed + hold)
  const rows = await sql`
    SELECT to_char(schedule_time AT TIME ZONE 'Asia/Kolkata', 'HH24:MI') as t
    FROM appointments
    WHERE doctor_id = ${doctorId}
      AND (schedule_time AT TIME ZONE 'Asia/Kolkata')::date = ${date}
      AND status IN ('confirmed','hold')
  `;

  return Response.json({ booked: rows.map((r) => r.t) });
}
