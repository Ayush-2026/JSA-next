"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

function formatTime(h, m) {
  const hh = String(h).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  return `${hh}:${mm}`;
}

function parseHHMM(str) {
  const [hh, mm] = String(str).split(":").map(Number);
  return { hh, mm };
}

function dayOfWeekFromISODate(dateStr) {
  // dateStr: YYYY-MM-DD, local
  const d = new Date(`${dateStr}T00:00:00`);
  return d.getDay(); // 0=Sun ... 6=Sat
}

export default function ConsultationForm({ lang = "en", doctors = [] }) {
  const sp = useSearchParams();
  const doctorFromUrl = sp.get("doctor"); // slug

  const [patient, setPatient] = useState({
    name: "",
    phone: "",
    issue: "",
  });

  const [doctorSlug, setDoctorSlug] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
const [refreshKey, setRefreshKey] = useState(0);
  const [timing, setTiming] = useState(null); // {start_time,end_time,slot_duration_min}
  const [booked, setBooked] = useState([]); // ["12:00","12:30",...]

  // Auto-select doctor from URL (?doctor=slug)
  useEffect(() => {
    if (!doctorFromUrl) return;
    if (!doctors?.length) return;
    const ok = doctors.some((d) => d.slug === doctorFromUrl);
    if (ok) setDoctorSlug(doctorFromUrl);
  }, [doctorFromUrl, doctors]);

  const selectedDoctor = useMemo(
    () => doctors.find((d) => d.slug === doctorSlug) || null,
    [doctors, doctorSlug],
  );

  const fee = selectedDoctor?.consultation_fee ?? 600;

  // Fetch timing when doctor + date chosen
  useEffect(() => {
    async function run() {
      setTiming(null);
      setBooked([]);
      setSlot("");

      if (!selectedDoctor || !date) return;

      const dow = dayOfWeekFromISODate(date);

      // 1) get timing for doctor + weekday
      const tRes = await fetch(
        `/api/doctor-timings?doctorId=${encodeURIComponent(
          selectedDoctor.id,
        )}&dayOfWeek=${encodeURIComponent(dow)}`,
        { cache: "no-store" },
      );

      if (!tRes.ok) return;
      const tJson = await tRes.json();
      if (!tJson?.timing) return;

      setTiming(tJson.timing);

      // 2) get booked slots for doctor + date
      const bRes = await fetch(
        `/api/booked-slots?doctorId=${encodeURIComponent(
          selectedDoctor.id,
        )}&date=${encodeURIComponent(date)}`,
        { cache: "no-store" },
      );
      if (!bRes.ok) return;
      const bJson = await bRes.json();
      setBooked(bJson?.booked || []);
    }

    run();
  }, [selectedDoctor, date, refreshKey]);

  // Build available slots from timing minus booked
  const availableSlots = useMemo(() => {
    if (!timing) return [];

    const { hh: sh, mm: sm } = parseHHMM(timing.start_time);
    const { hh: eh, mm: em } = parseHHMM(timing.end_time);
    const step = Number(timing.slot_duration_min || 30);

    // generate [start, end) slots
    let curMins = sh * 60 + sm;
    const endMins = eh * 60 + em;

    const all = [];
    while (curMins + step <= endMins) {
      const h = Math.floor(curMins / 60);
      const m = curMins % 60;
      all.push(formatTime(h, m));
      curMins += step;
    }

    const bookedSet = new Set((booked || []).map((x) => String(x)));
    return all.filter((t) => !bookedSet.has(t));
  }, [timing, booked]);

  const doctorAvailableMsg =
    selectedDoctor && date && !timing
      ? "Doctor not available on this day."
      : "";

  const canSubmit =
    selectedDoctor &&
    date &&
    slot &&
    patient.name.trim() &&
    patient.phone.trim().length >= 10;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    const res = await fetch("/api/appointments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        doctorId: selectedDoctor.id,
        date, // YYYY-MM-DD
        time: slot, // HH:MM
        slotDurationMin: timing?.slot_duration_min ?? 30,
        patientName: patient.name,
        patientPhone: patient.phone,
        healthIssue: patient.issue,
      }),
    });

    const json = await res.json();

    if (!res.ok) {
      alert(json?.error || "Booking failed");
      // refresh booked slots if someone else booked it
      setRefreshKey((k) => k + 1); 
      return;
    }

   alert("Appointment booked!");
   setSlot("");
   setRefreshKey((k) => k + 1);

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 space-y-5"
    >
      {/* Patient Name */}
      <Field label="Patient Name">
        <input
          required
          value={patient.name}
          onChange={(e) => setPatient((p) => ({ ...p, name: e.target.value }))}
          type="text"
          placeholder="Enter patient name"
          className="input"
        />
      </Field>

      {/* Phone */}
      <Field label="Phone Number">
        <input
          required
          value={patient.phone}
          onChange={(e) =>
            setPatient((p) => ({
              ...p,
              phone: e.target.value.replace(/\D/g, "").slice(0, 10),
            }))
          }
          type="tel"
          placeholder="10-digit number"
          className="input"
        />
      </Field>

      {/* Doctor */}
      <Field label="Select Doctor">
        <select
          required
          value={doctorSlug}
          onChange={(e) => {
            setDoctorSlug(e.target.value);
            setDate("");
            setSlot("");
            setTiming(null);
            setBooked([]);
          }}
          className="input bg-white"
        >
          <option value="">Choose Doctor</option>
          {doctors.map((d) => (
            <option key={d.id} value={d.slug}>
              {d.name_en} — {d.specialization_en}
            </option>
          ))}
        </select>
      </Field>

      {/* Date */}
      <Field label="Select Date">
        <input
          required
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setSlot("");
          }}
          type="date"
          className="input"
          disabled={!selectedDoctor}
        />
      </Field>

      {/* Availability message */}
      {doctorAvailableMsg ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {doctorAvailableMsg}
        </div>
      ) : null}

      {/* Slots */}
      <Field label="Available Time Slots">
        <select
          required
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          className="input bg-white"
          disabled={!timing}
        >
          <option value="">
            {!selectedDoctor
              ? "Select doctor first"
              : !date
                ? "Select date first"
                : !timing
                  ? "No slots"
                  : "Select a slot"}
          </option>
          {availableSlots.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      {/* Issue */}
      <Field label="Health Issue (optional)">
        <textarea
          value={patient.issue}
          onChange={(e) => setPatient((p) => ({ ...p, issue: e.target.value }))}
          rows={3}
          placeholder="Describe briefly..."
          className="input h-auto py-2"
        />
      </Field>

      {/* Fee */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm text-gray-700">Consultation Fee</p>
        <p className="text-2xl font-bold text-blue-700">₹{fee}</p>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Book Consultation
      </button>

      <style jsx global>{`
        .input {
          margin-top: 0.25rem;
          width: 100%;
          height: 2.75rem;
          padding: 0 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #d1d5db;
          outline: none;
        }
        .input:focus {
          box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.7);
          border-color: transparent;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      {children}
    </div>
  );
}
