import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import HeaderButtons from "./HeaderButtons";
function Header({darkMode, setDarkMode}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-10">
        <div className="flex h-22.5 items-center justify-between ml-8">
          <Logo />
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="hidden lg:block">
            <HeaderButtons />
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-md p-2 lg:hidden"
            aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-70
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          lg:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-22.5 items-center justify-between border-b px-6">
          <Logo />
          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-md p-2"
            aria-label="Close menu">
            <X size={25} />
          </button>
        </div>
        <div className="px-6 py-8">
          <Nav />
          <div className="mt-8 border-t pt-6">
            <HeaderButtons 
              darkMode={darkMode}
              setDarkMode={setDarkMode}/>
          </div>
        </div>
      </aside>
    </header>
  );
}
export default Header;