import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import HeaderButtons from "./HeaderButtons";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-50 w-full">
      <div className="w-full p-10 mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-8">
        <div className="h-22.5 flex items-center justify-between">
          <Logo />
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="hidden lg:block">
            <HeaderButtons />
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-gray-800"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        className={`
          fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl
          z-100 transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-22.5 px-5 flex items-center justify-between border-b">
          <Logo />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-gray-700"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>
        <div className="px-6 py-8">
          <Nav />
          <div className="mt-8 pt-6 border-t">
            <HeaderButtons />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-90 lg:hidden"
        />
      )}
    </header>
  );
}
export default Header;