import { useEffect, useState } from 'react';

function Footer({ theme }) {
  // Стан для зберігання даних із localStorage
  const [storedInfo, setStoredInfo] = useState({ os: '', browser: '' });
  
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";

  useEffect(() => {
    // 1. Отримуємо інформацію про систему та браузер [cite: 127]
    const osInfo = navigator.platform;
    const browserInfo = navigator.userAgent;

    // 2. Зберігаємо дані у localStorage (вимога лаби) [cite: 45, 129]
    localStorage.setItem('user_os', osInfo);
    localStorage.setItem('user_browser', browserInfo);

    // 3. Зчитуємо дані з localStorage для відображення [cite: 46, 130]
    setStoredInfo({
      os: localStorage.getItem('user_os'),
      browser: localStorage.getItem('user_browser')
    });
  }, []); // Порожній масив — виконується 1 раз при монтажі [cite: 107, 114]

  return (
    <footer className={`mt-12 pt-8 border-t ${isDark ? "border-[#E2C799]/20" : "border-[#800000]/20"} text-center space-y-4 transition-colors duration-500`}>
      <div className={`text-[10px] font-medium ${isDark ? "text-slate-400" : "text-[#800000]/70"}`}>
        {/* Виводимо дані, які були отримані саме з localStorage [cite: 46] */}
        <p>Ваша система (з localStorage): <span className={`font-bold ${accentColor}`}>{storedInfo.os}</span></p>
        <p className="max-w-md mx-auto truncate opacity-80 mt-1">Браузер: {storedInfo.browser}</p>
      </div>
      
      <p className={`text-[10px] uppercase tracking-[0.3em] font-black ${accentColor}`}>
        © 2026 | ЛАБОРАТОРНА РОБОТА №4 | ДИЗАЙН MAROON & CREAM
      </p>
    </footer>
  );
}

export default Footer;