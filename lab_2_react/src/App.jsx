import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ReviewsForm from "./components/ReviewsForm"; // НОВИЙ КОМПОНЕНТ
import Modal from "./components/Modal";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();
    // Денна тема: від 07:00 до 21:00 [cite: 73, 74, 155]
    setTheme(hour >= 7 && hour < 21 ? "light" : "dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add('dark'); // Застосування класу dark з Tailwind 
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light"); // Ручне перемикання [cite: 70, 156]

  return (
    <div className={`min-h-screen transition-colors duration-500 p-12 md:p-16 relative ${
      theme === "dark" 
        ? "bg-slate-900 text-slate-100" 
        : "bg-[#FFF8E7] text-[#800000]"
    }`}>
      
      <div className="max-w-5xl mx-auto flex justify-end mb-12 -mt-4">
        <button 
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full border-2 font-bold text-xs uppercase tracking-widest transition-all shadow-lg ${
            theme === "dark"
              ? "border-[#E2C799] text-[#E2C799] hover:bg-[#E2C799] hover:text-slate-900"
              : "border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
          }`}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:grid-flow-col-dense md:col-start-2">
        <aside className="md:col-span-4 space-y-12">
          <Header theme={theme} />
          <Skills theme={theme} />
        </aside>

        <main className="md:col-span-8 space-y-16">
          <Experience theme={theme} />
          <Education theme={theme} />
          <About theme={theme} />
          <Reviews theme={theme} />
          {/* Секція для написання відгуку на сторінці [cite: 53, 140] */}
          <ReviewsForm theme={theme} /> 
          <Footer theme={theme} />
        </main>
      </div>
      {/* Модальне вікно, що з'являється через 1 хвилину [cite: 54, 143, 144] */}
      <Modal theme={theme} /> 
    </div>
  );
}

export default App;