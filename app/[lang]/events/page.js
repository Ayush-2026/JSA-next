const events = [
  {
    tag: "Health Camp",
    title: "Free Heart Health Checkup Camp",
    date: "March 15, 2024",
    desc: "Comprehensive cardiac screening for early detection of heart conditions. Free consultation with senior cardiologists.",
  },
  {
    tag: "Workshop",
    title: "Diabetes Awareness Workshop",
    date: "March 20, 2024",
    desc: "Learn about diabetes management, nutrition, and lifestyle modifications. Expert dietitians and endocrinologists.",
  },
  {
    tag: "Conference",
    title: "Medical Technology Conference",
    date: "March 25, 2024",
    desc: "Latest advances in medical technology and surgical procedures. CME accredited for medical professionals.",
  },
];

export default async function EventsPage({ params }) {
  const { lang } = await params;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#265957]">
        Events & Conferences
      </h1>
      <p className="mt-2 text-gray-500">
        Upcoming events, health camps, workshops, and conferences.
      </p>

      <div className="mt-8 grid gap-5">
        {events.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                {e.tag}
              </span>
              <span className="text-xs text-gray-500">{e.date}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-gray-800">
              {e.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
