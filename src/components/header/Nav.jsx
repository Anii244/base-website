import { ChevronDown } from "lucide-react";
function Nav() {
  return (
    <nav className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
      <a
        href=""
        className="
          text-sm
          font-semibold
          text-[#2855d9]
          transition
          hover:text-[#1747bf]
          dark:text-amber-400
          dark:hover:text-amber-300
        "
      >
        Home
      </a>
      <a
        href=""
        className="
          text-sm
          font-semibold
          text-gray-700
          transition
          hover:text-[#2855d9]
          dark:text-amber-200
          dark:hover:text-amber-400
        "
      >
        Features
      </a>
      <a
        href=""
        className="
          flex
          items-center
          gap-1
          text-sm
          font-semibold
          text-gray-700
          transition
          hover:text-[#2855d9]
          dark:text-amber-200
          dark:hover:text-amber-400
        "
      >
        Pages
        <ChevronDown size={14} />
      </a>
      <a
        href=""
        className="
          text-sm
          font-semibold
          text-gray-700
          transition
          hover:text-[#2855d9]
          dark:text-amber-200
          dark:hover:text-amber-400
        "
      >
        Support
      </a>
    </nav>
  );
}
export default Nav;