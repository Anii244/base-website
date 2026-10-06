import { ChevronDown } from "lucide-react";
function Nav() {
  return (
    <nav className="flex items-center gap-10">
      <a href="" className="text-[#2855d9] font-medium">
        Home
      </a>
      <a href="" className="text-gray-700">
        Features
      </a>
      <a href="" className="flex items-center gap-2 text-gray-700">
        Pages<ChevronDown size={16}/>
      </a>
      <a href="" className="text-gray-700">
        Support
      </a>
    </nav>
  );
}
export default Nav;