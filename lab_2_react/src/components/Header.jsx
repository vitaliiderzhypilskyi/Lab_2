function Header({ theme }) {
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";
  const borderColor = isDark ? "border-[#E2C799]" : "border-[#800000]";

  return (
    <div className="space-y-8">
      <div className={`w-60 h-60 border-4 ${borderColor} rounded-full overflow-hidden shadow-2xl mx-auto transition-all`}>
        {/* Шлях тепер іде від кореня папки public */}
        <img 
          src="/me.jpg" 
          alt="Держипільський Віталій" 
          className="w-full h-full object-cover" 
        />
      </div>
      <h1 className={`text-4xl font-black uppercase tracking-tighter leading-none ${accentColor}`}>
        Держипільський <br /> Віталій
      </h1>
      <div className={`pt-6 border-t-2 ${borderColor}`}>
        <h3 className={`font-black uppercase text-xs tracking-widest mb-4 ${accentColor}`}>Контакти</h3>
        <ul className={`space-y-2 text-sm font-medium ${isDark ? "text-slate-300" : "text-[#800000]/80"}`}>
          <li>
            <a href="mailto:vitalii.derzhypilskyi.kb.2023@lpnu.ua" className="hover:underline">
              ✉ vitalii.derzhypilskyi.kb.2023@lpnu.ua
            </a>
          </li>
          <li>
            <a href="tel:+380684873525" className="hover:underline">
              📞 +380684873525
            </a>
          </li>
          <li>📍 Львів, Україна</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;