import { Zap } from "lucide-react";
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-[#2855d9] rounded-lg flex items-center justify-center text-white text-xl">
        <Zap size={20} />
      </div>
      <span className="text-3xl font-bold text-[#111827] dark:text-cyan-500">Base</span>
    </div>
  );
}
export default Logo;