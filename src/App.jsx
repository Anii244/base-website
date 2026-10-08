import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero />
      <Features />
    </div>
  );
}
export default App;