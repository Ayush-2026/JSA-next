import { sql } from "@/lib/db";

export async function POST(req) {
  const body = await req.json();

  const {
    doctorId,
    date, // YYYY-MM-DD
    time, // HH:MM
    slotDurationMin = 30,
    patientName,
    patientPhone,
    healthIssue = "",
  } = body || {};

  if (!doctorId || !date || !time || !patientName || !patientPhone) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Build schedule_time in Asia/Kolkata local time, store as timestamptz
  const scheduleLocal = `${date} ${time}:00`;

  try {
    const rows = await sql`
      INSERT INTO appointments (
        doctor_id, schedule_time, slot_duration_min, status,
        patient_name, patient_phone, health_issue
      )
      VALUES (
        ${doctorId},
        (${scheduleLocal}::timestamp AT TIME ZONE 'Asia/Kolkata'),
        ${Number(slotDurationMin)},
        'confirmed',
        ${patientName},
        ${patientPhone},
        ${healthIssue}
      )
      RETURNING id
    `;

    return Response.json({ ok: true, id: rows[0]?.id });
  } catch (e) {
    // if unique constraint fails, slot already booked
    return Response.json(
      { error: "Slot already booked. Please choose another time." },
      { status: 409 },
    );
  }
}
