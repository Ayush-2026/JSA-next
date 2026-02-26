// components/layout/WhatsAppButton.jsx

export default function WhatsAppButton() {
  const phone = "91XXXXXXXXXX"; // digits only
  const text = encodeURIComponent(
    "Hi! I want to enquire about an appointment.",
  );
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with hospital on WhatsApp"
      className="
        fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[9999]
        flex items-center gap-2 sm:gap-3
        rounded-full bg-[#25D366] text-white
        p-3 sm:px-4 sm:py-3
        shadow-lg transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.02]
        active:scale-[0.98]
        focus:outline-none focus:ring-4 focus:ring-green-200
      "
    >
      {/* pulse ring */}
      <span className="relative grid place-items-center">
        <span
          className="
            absolute -inset-2 rounded-full bg-white/20
            animate-ping motion-reduce:animate-none
          "
        />
        {/* icon bubble */}
        <span className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white">
          <svg
            viewBox="0 0 32 32"
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2.8C8.7 2.8 2.8 8.7 2.8 16c0 2.3.6 4.5 1.7 6.5L3 29l6.7-1.7c1.9 1.1 4.1 1.7 6.3 1.7 7.3 0 13.2-5.9 13.2-13.2S23.3 2.8 16 2.8Z"
              fill="#25D366"
            />
            <path
              d="M23.1 19.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.9-.9-3.1-1.6-4.4-3.6-.3-.5.3-.5.8-1.8.1-.3.1-.5 0-.7-.1-.2-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.5-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"
              fill="#fff"
            />
          </svg>
        </span>
      </span>

      {/* ✅ Hide label on small devices */}
      <span className="hidden sm:inline text-sm sm:text-base font-medium whitespace-nowrap">
        How can I help you?
      </span>
    </a>
  );
}
