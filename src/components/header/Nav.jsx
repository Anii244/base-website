import { ChevronDown } from "lucide-react";
function Nav() {
  return (
    <nav className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
      <a
        href=""
        className="
          text-md
          font-semibold
          text-[#2855d9]
          transition
          hover:text-[#1747bf]
          dark:text-shadow-zinc-800
          dark:hover:text-amber-300"
      >
        Home
      </a>
      <a
        href=""
        className="
          text-md
          text-gray-400
          font-semibold
          transition
          hover:text-[#2855d9]
          dark:text-zinc-500
          dark:hover:text-amber-400"
      >
        Features
      </a>
      <a
        href=""
        className="
          flex
          items-center
          gap-1
          text-md
          font-semibold
          text-gray-400
          transition
          hover:text-[#2855d9]
          dark:text-zinc-500
          dark:hover:text-amber-400 "
      >
        Pages
        <ChevronDown size={14} />
      </a>
      <a
        href=""
        className="
          text-md
          font-semibold
          text-gray-400
          transition
          hover:text-[#2855d9]
          dark:text-zinc-500
          dark:hover:text-amber-400"
      >
        Support
      </a>
    </nav>
  );
}
export default Nav;
