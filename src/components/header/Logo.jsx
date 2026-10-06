import { Zap } from "lucide-react";
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#2855d9] rounded-lg flex items-center justify-center text-white text-xl">
        <Zap size={20} />
      </div>
      <span className="text-2xl font-bold text-[#111827]">Base</span>
    </div>
  );
}
export default Logo;