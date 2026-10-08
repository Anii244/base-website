import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
   useEffect(() => {
     if (darkmode) {
      document.documentElementclassList.add("dark", darkMode);
     }
   }, [darkMode]); 
  
  return (
    <div className="min-h-screen bg-white m-12 text-grey-900 dark:bg-grey-900 dark:text-white-500 transition-colors duration-300">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
export default App;