const updates = [
  {
    tag: "Equipment",
    title: "New Advanced MRI Machine Installed",
    date: "March 10, 2024",
    desc: "State-of-the-art 3 Tesla MRI machine for superior imaging quality and faster diagnosis capabilities.",
  },
  {
    tag: "Service",
    title: "24/7 Emergency Services Enhanced",
    date: "March 8, 2024",
    desc: "Upgraded emergency department with additional trauma bays and critical care monitoring systems.",
  },
  {
    tag: "Digital",
    title: "Telemedicine Services Launched",
    date: "March 5, 2024",
    desc: "Online consultation services now available for follow-up appointments and routine medical advice.",
  },
];

export default async function UpdatesPage({ params }) {
  const { lang } = await params;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#265957]">
        Hospital Updates
      </h1>
      <p className="mt-2 text-gray-500">
        Latest news, services, announcements, and upgrades.
      </p>

      <div className="mt-8 grid gap-5">
        {updates.map((u, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                {u.tag}
              </span>
              <span className="text-xs text-gray-500">{u.date}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-gray-800">
              {u.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {u.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
