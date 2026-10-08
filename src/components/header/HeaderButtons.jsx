import { Sun, Moon } from "lucide-react";
function HeaderButtons({ darkMode, setDarkMode }) {
  return (
    <div className="flex items-center gap-6 sm:gap-8">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
          rounded-full
          p-1
          text-gray-700
          transition
          hover:bg-gray-200
          dark:text-amber-300
          dark:hover:bg-gray-700
        "
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </button>
      <a
        href=""
        className="
          text-sm
          text-gray-700
          transition
          hover:text-[#2855d9]
          dark:text-amber-200
          dark:hover:text-amber-400
        "
      >
        Sign In
      </a>
      <a
        href=""
        className="
          text-sm
          text-gray-700
          transition
          hover:text-[#2855d9]
          dark:text-amber-200
          dark:hover:text-amber-400
        "
      >
        Sign Up
      </a>
    </div>
  );
}
export default HeaderButtons;