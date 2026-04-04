function Experience({ theme }) {
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";

  return (
    <section>
      <div className={`flex justify-between items-end border-b-2 pb-1 mb-6 ${isDark ? "border-[#E2C799]" : "border-[#800000]"} transition-colors duration-500`}>
        <h3 className={`font-black uppercase text-2xl ${accentColor}`}>Досвід роботи</h3>
        <span className={`text-xs uppercase font-bold mb-1 ${isDark ? "text-[#E2C799]/60" : "text-[#800000]/60"}`}>Навчальні проєкти</span>
      </div>
      <div className="space-y-8">
        <div className="group">
          <h4 className={`font-black text-lg uppercase mb-4 ${accentColor}`}>НУ «Львівська політехніка»</h4>
          {/* Встановлено text-base для всього опису та списку */}
          <p className={`text-base mb-4 italic font-medium ${isDark ? "text-slate-300" : "text-[#800000]/80"}`}>
            Курсові проєкти дали початковий досвід:
          </p>
          <ul className={`list-disc list-inside text-base space-y-4 font-medium ${isDark ? "text-slate-200" : "text-[#800000]/90"}`}>
            <li>Розробка баз даних та веб-сторінок для роботи з ними.</li>
            <li>Створення комп’ютерної мережі для навчального проєкту та її захист.</li>
            <li>Практична робота з алгоритмом шифрування DES.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;