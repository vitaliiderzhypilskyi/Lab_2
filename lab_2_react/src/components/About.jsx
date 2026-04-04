function About({ theme }) {
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";

  return (
    <section>
      <div className={`flex justify-between items-end border-b-2 pb-1 mb-6 ${isDark ? "border-[#E2C799]" : "border-[#800000]"} transition-colors duration-500`}>
        <h3 className={`font-black uppercase text-2xl ${accentColor}`}>Про себе</h3>
      </div>
      {/* Встановлено text-base для уніфікації */}
      <div className={`text-base leading-relaxed space-y-4 ${isDark ? "text-slate-300" : "text-[#800000]/80"}`}>
        <p>
          Я студент третього курсу Національного університету «Львівська політехніка», спеціальність <strong>"Кібербезпека"</strong>.
        </p>
        <p>
          Зацікавлений у розвитку навичок захисту інформації. Мотивований початківець, відкритий до співпраці та нових викликів. 
          Легко знаходжу спільну мову з колегами і готовий активно працювати для здобуття практичного досвіду.
        </p>
      </div>
    </section>
  );
}

export default About;