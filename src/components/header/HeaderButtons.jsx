import { Sun } from "lucide-react";
function HeaderButtons() {
  return (
    <div className="flex items-center gap-8">
        <Sun size={20} className="text-grey-700" />
      <a href="" className="text-sm text-gray-700">
        Sign In
      </a>
      <a href="" className="text-sm text-gray-700">
        Sign Up
      </a>
    </div>

  );
}
export default HeaderButtons;