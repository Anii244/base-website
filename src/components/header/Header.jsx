import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import HeaderButtons from "./HeaderButtons";

function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex h-[80px] items-center justify-between lg:h-[90px]">
          <Logo />
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="hidden lg:block">
            <HeaderButtons
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-md p-2 text-gray-700 dark:text-amber-300 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 dark:bg-gray-900 lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[80px] items-center justify-between border-b border-gray-200 px-6 dark:border-gray-700">
          
          <Logo />

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-md p-2 text-gray-700 dark:text-amber-300"
            aria-label="Close menu"
          >
            <X size={25} />
          </button>
        </div>
        <div className="px-6 py-8">
          <Nav />

          <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
            <HeaderButtons
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>
        </div>
      </aside>
    </header>
  );
}
export default Header;