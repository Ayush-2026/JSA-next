import Image from "next/image";

export default function BookTestsPage({ params }) {
  const { lang } = params;

  // ✅ Hardcoded for now
  const phoneNumberDisplay = "+91 98765 43210";
  const phoneNumberDial = "919876543210"; // digits only for tel:
  const tests = [
    { id: 1, name: "Complete Blood Count (CBC)", icon: "/tests/cbc.png" },
    { id: 2, name: "Lipid Profile", icon: "/tests/lipid.png" },
    { id: 3, name: "Thyroid Profile (T3/T4/TSH)", icon: "/tests/thyroid.png" },
    { id: 4, name: "Liver Function Test (LFT)", icon: "/tests/lft.png" },
    { id: 5, name: "Kidney Function Test (KFT)", icon: "/tests/kft.png" },
    { id: 6, name: "HbA1c (Diabetes)", icon: "/tests/hba1c.png" },
  ];

  return (
    <div className="bg-gray-100 min-h-[70vh] py-10 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-semibold text-blue-600 text-center">
          Book Lab Tests
        </h1>
        <p className="mt-2 text-center text-sm sm:text-base text-gray-600">
          Call us to book a test. (Temporarily hardcoded)
        </p>

        <div className="mt-8 space-y-4">
          {tests.map((t) => (
            <div
              key={t.id}
              className="
                flex items-center gap-3 sm:gap-4
                rounded-xl bg-white p-3 sm:p-4
                shadow-sm border
              "
            >
              {/* Left: circle logo */}
              <div className="shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-50 border grid place-items-center overflow-hidden">
                  {/* If you don't have icons yet, keep a placeholder image or use initials */}
                  <Image
                    src={t.icon}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Middle: rectangle with test name */}
              <div className="flex-1">
                <div
                  className="
                    w-full
                    rounded-lg bg-gray-50 border
                    px-3 py-2 sm:px-4 sm:py-3
                    text-gray-900 font-medium
                    text-sm sm:text-base
                    leading-snug
                  "
                >
                  {t.name}
                </div>
              </div>

              {/* Right: call-to-action button */}
              <div className="shrink-0">
                <a
                  href={`tel:${phoneNumberDial}`}
                  className="
                    inline-flex items-center justify-center
                    rounded-lg bg-blue-600 text-white
                    px-3 py-2 sm:px-4 sm:py-3
                    text-sm sm:text-base font-semibold
                    shadow-sm
                    transition hover:bg-blue-700 active:scale-[0.98]
                    whitespace-nowrap
                  "
                  aria-label={`Call to book: ${phoneNumberDisplay}`}
                >
                  Call {phoneNumberDisplay}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional footer note */}
        <div className="mt-8 text-center text-xs sm:text-sm text-gray-500">
          For emergencies, please call your local emergency number.
        </div>
      </div>
    </div>
  );
}
