import Link from "next/link";

const eventsData = [
  {
    tag: "Health Camp",
    tagStyle: "bg-green-100 text-green-700",
    title: "Free Heart Health Checkup Camp",
    desc: "Comprehensive cardiac screening for early detection of heart conditions. Free consultation with senior cardiologists.",
    date: "March 15, 2024",
  },
  {
    tag: "Workshop",
    tagStyle: "bg-blue-100 text-blue-700",
    title: "Diabetes Awareness Workshop",
    desc: "Learn about diabetes management, nutrition, and lifestyle modifications. Expert dietitians and endocrinologists.",
    date: "March 20, 2024",
  },
  {
    tag: "Conference",
    tagStyle: "bg-purple-100 text-purple-700",
    title: "Medical Technology Conference",
    desc: "Latest advances in medical technology and surgical procedures. CME accredited for medical professionals.",
    date: "March 25, 2024",
  },
];

const updatesData = [
  {
    tag: "Equipment",
    tagStyle: "bg-orange-100 text-orange-700",
    title: "New Advanced MRI Machine Installed",
    desc: "State-of-the-art 3 Tesla MRI machine for superior imaging quality and faster diagnosis capabilities.",
    date: "March 10, 2024",
  },
  {
    tag: "Service",
    tagStyle: "bg-sky-100 text-sky-700",
    title: "24/7 Emergency Services Enhanced",
    desc: "Upgraded emergency department with additional trauma bays and critical care monitoring systems.",
    date: "March 8, 2024",
  },
  {
    tag: "Digital",
    tagStyle: "bg-indigo-100 text-indigo-700",
    title: "Telemedicine Services Launched",
    desc: "Online consultation services now available for follow-up appointments and routine medical advice.",
    date: "March 5, 2024",
  },
];

function CardItem({ item, accent = "border-gray-200", ctaText, ctaHref }) {
  return (
    <div className="relative pl-6 py-5">
      {/* left vertical line */}
      <div
        className={`absolute left-2 top-5 bottom-5 w-[3px] rounded-full ${accent}`}
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${item.tagStyle}`}
        >
          {item.tag}
        </span>
        <span className="text-xs text-gray-500">{item.date}</span>
      </div>

      <h4 className="mt-2 font-semibold text-gray-800">{item.title}</h4>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>

      <Link
        href={ctaHref}
        className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-[#265D8D] hover:underline"
      >
        {ctaText} <span className="text-base">›</span>
      </Link>
    </div>
  );
}

export default function EventsUpdatesSection({ lang = "en" }) {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-[#265957]">
          Events and Updates
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Events */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <span className="text-lg">📅</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Events & Conferences
                </h3>
              </div>

              <div className="mt-4 divide-y divide-gray-100">
                {eventsData.map((item, idx) => (
                  <div key={idx} className="py-2">
                    <CardItem
                      item={item}
                      accent="bg-blue-200"
                      ctaText="Learn More"
                      ctaHref={`/${lang}/events`}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href={`/${lang}/events`}
                  className="block text-center bg-[#265D8D] text-white py-3 rounded-xl font-medium hover:opacity-95 transition"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <span className="text-lg">🔔</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Hospital Updates
                </h3>
              </div>

              <div className="mt-4 divide-y divide-gray-100">
                {updatesData.map((item, idx) => (
                  <div key={idx} className="py-2">
                    <CardItem
                      item={item}
                      accent="bg-green-200"
                      ctaText="Read More"
                      ctaHref={`/${lang}/updates`}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href={`/${lang}/updates`}
                  className="block text-center bg-[#265D8D] text-white py-3 rounded-xl font-medium hover:opacity-95 transition"
                >
                  View All Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
