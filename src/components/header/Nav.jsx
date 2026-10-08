import { ChevronDown } from "lucide-react";

function Nav() {
  return (
    <nav className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-9">
      <a
        href="#"
        className="text-sm font-medium text-[#2855d9]"
      >
        Home
      </a>

      <a
        href="#"
        className="text-sm font-medium text-gray-700 transition hover:text-[#2855d9]"
      >
        Features
      </a>

      <a
        href="#"
        className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#2855d9]"
      >
        Pages
        <ChevronDown size={14} />
      </a>

      <a
        href="#"
        className="text-sm font-medium text-gray-700 transition hover:text-[#2855d9]"
      >
        Support
      </a>
    </nav>
  );
}

export default Nav;