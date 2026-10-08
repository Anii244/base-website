import { Sun, Moon } from "lucide-react";
function HeaderButtons({darkMode, setDarkMode}) {
  return (
    <div className="flex items-center gap-8">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun size={20} className="text-grey-700" /> : <Moon size={20} className="text-grey-700" />}
      </button>
      <a href="" className="text-20px font-bold text-gray-700">
        Sign In
      </a>
      <a href="" className="text-20px font-bold text-gray-700">
        Sign Up
      </a>
    </div>
  );
}
export default HeaderButtons;