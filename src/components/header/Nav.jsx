import { ChevronDown } from "lucide-react";
function Nav() {
  return (
    <nav className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-9">
      <a
        href=""
        className="text-20px font-bold text-[#2855d9] dark:text-blue-700"> Home
      </a>
      <a
        href=""
        className="text-20px font-bold text-gray-700 transition hover:text-[#2855d9] dark:text-amber-200">Features
      </a>
      <a
        href=""
        className="flex items-center gap-1 text-20px font-bold text-gray-700 transition hover:text-[#2855d9] dark:text-amber-200">Pages
        <ChevronDown size={14} />
      </a>
      <a
        href=""
        className="text-20px font-bold text-gray-700 transition hover:text-[#2855d9] dark:text-amber-200">Support
      </a>
    </nav>
  );
}
export default Nav;