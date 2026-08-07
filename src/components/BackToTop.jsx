import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { t } = useLang();

  const label = t("common.backToTop");

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={goTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-emerald-500 text-white
        shadow-lg shadow-emerald-500/30
        hover:bg-emerald-600 hover:scale-110
        transition-all duration-300
        flex items-center justify-center
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      {/* Tooltip */}
      <span
        className={`
          absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2
          bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-xs font-medium
          px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-black/30
          whitespace-nowrap pointer-events-none
          transition-all duration-200
          ${hovered && show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
        `}
      >
        {/* Arrow */}
        <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-gray-900 border-t border-r border-gray-100 dark:border-gray-800 rotate-45" />
        {label}
      </span>

      {/* Arrow icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}