// app/[lang]/book-tests/page.js
import Link from "next/link";

export default async function BookTestsPage({ params }) {
  const { lang } = await params;

  // ✅ Update these
  const phoneDisplay = "+91 98765 43210";
  const phoneDial = "919876543210"; // digits only for tel:
  const telHref = `tel:${phoneDial}`;

  // ✅ Hardcoded tests for now
  const tests = [
    { id: 1, name: "Complete Blood Count (CBC)", icon: "🩸" },
    { id: 2, name: "Lipid Profile", icon: "🧬" },
    { id: 3, name: "Thyroid Profile (T3/T4/TSH)", icon: "🦋" },
    { id: 4, name: "Liver Function Test (LFT)", icon: "🫀" },
    { id: 5, name: "Kidney Function Test (KFT)", icon: "🫘" },
    { id: 6, name: "HbA1c (Diabetes)", icon: "🧪" },
    { id: 7, name: "Vitamin D", icon: "🌞" },
    { id: 8, name: "Electrolytes", icon: "⚡" },
  ];

  return (
    <div className="min-h-[75vh] bg-gradient-to-b from-[#f4fbfb] via-white to-[#f6f8ff]">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#2a9d8f]/10 blur-3xl" />
        <div className="absolute top-16 -right-24 h-72 w-72 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#265957]">
              Book Lab Tests
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Choose a test and call our team to confirm availability, timing and charges.
              (For now, this is hardcoded.)
            </p>
          </div>

          <a
            href={telHref}
            className="
              hidden sm:inline-flex
              items-center gap-2
              rounded-xl bg-[#265957] text-white
              px-4 py-3 font-semibold
              shadow-lg shadow-[#265957]/20
              transition hover:-translate-y-0.5 hover:shadow-xl
              active:scale-[0.98]
              focus:outline-none focus:ring-4 focus:ring-emerald-200
            "
          >
            <span className="text-lg">📞</span>
            Call Now
          </a>
        </div>

        {/* Premium card container */}
        <div
          className="
            mt-8 rounded-2xl border bg-white/80 backdrop-blur
            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            overflow-hidden
          "
        >
          {/* Header strip */}
          <div className="px-5 sm:px-6 py-4 bg-gradient-to-r from-[#265957] to-[#2a9d8f] text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="font-semibold">Available Tests</div>
              <div className="text-xs sm:text-sm opacity-90">
                Tap a test to call • {phoneDisplay}
              </div>
            </div>
          </div>

          {/* List */}
          <div className="p-4 sm:p-6">
            <div className="grid gap-4">
              {tests.map((t) => (
                <a
                  key={t.id}
                  href={telHref}
                  className="
                    group relative
                    rounded-2xl border bg-white
                    p-4 sm:p-5
                    shadow-sm
                    transition
                    hover:-translate-y-0.5 hover:shadow-lg
                    focus:outline-none focus:ring-4 focus:ring-blue-100
                  "
                  aria-label={`Call to book ${t.name}`}
                >
                  {/* subtle hover glow */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      opacity-0 group-hover:opacity-100 transition
                      bg-gradient-to-r from-[#2a9d8f]/10 via-transparent to-[#3b82f6]/10
                    "
                  />

                  <div className="relative flex items-center gap-4">
                    {/* Left: animated icon circle */}
                    <div
                      className="
                        shrink-0
                        w-12 h-12 sm:w-14 sm:h-14
                        rounded-full
                        bg-gradient-to-br from-[#2a9d8f]/20 to-[#3b82f6]/20
                        border
                        grid place-items-center
                        text-2xl
                        transition
                        group-hover:scale-[1.06]
                      "
                    >
                      <span className="drop-shadow-sm">{t.icon}</span>
                    </div>

                    {/* Middle: name */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-[#1f2937] text-base sm:text-lg truncate">
                          {t.name}
                        </div>
                        <span
                          className="
                            hidden sm:inline-flex
                            text-[11px]
                            rounded-full
                            px-2 py-0.5
                            bg-emerald-50 text-emerald-700
                            border border-emerald-100
                          "
                        >
                          Book via call
                        </span>
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-gray-600">
                        Confirm price • Home sample collection (if available) • Report time
                      </div>
                    </div>

                    {/* Right: call CTA */}
                    <div className="shrink-0">
                      <div
                        className="
                          inline-flex items-center gap-2
                          rounded-xl
                          bg-[#265957] text-white
                          px-3 py-2 sm:px-4 sm:py-3
                          font-semibold text-sm sm:text-base
                          shadow-md shadow-[#265957]/20
                          transition
                          group-hover:bg-[#1f4a48]
                          active:scale-[0.98]
                          whitespace-nowrap
                        "
                      >
                        <span className="text-lg">📞</span>
                        <span className="hidden sm:inline">{phoneDisplay}</span>
                        <span className="sm:hidden">Call</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile sticky call */}
            <div className="sm:hidden mt-6">
              <a
                href={telHref}
                className="
                  w-full inline-flex items-center justify-center gap-2
                  rounded-2xl bg-[#265957] text-white
                  px-4 py-4 font-bold
                  shadow-lg shadow-[#265957]/20
                  transition active:scale-[0.99]
                "
              >
                <span className="text-xl">📞</span>
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-xs sm:text-sm text-gray-500">
          Note: Test availability and reporting time may vary. Please call to confirm.
        </div>
      </div>
    </div>
  );
}