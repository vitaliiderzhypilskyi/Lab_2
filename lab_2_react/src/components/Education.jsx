function Education({ theme }) {
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";
  const barColor = isDark ? "bg-[#E2C799]" : "bg-[#800000]";

  const education = [
    {
      institution: "Національний університет «Львівська політехніка»",
      degree: "Кібербезпека | 3 курс",
      period: "2023 — Теперішній час"
    },
    {
      institution: "Ліцей №81",
      degree: "Повна загальна середня освіта | 11 класів",
      period: "До 2023"
    }
  ];

  return (
    <section>
      <div className={`flex justify-between items-end border-b-2 pb-1 mb-6 ${isDark ? "border-[#E2C799]" : "border-[#800000]"} transition-colors duration-500`}>
        <h3 className={`font-black uppercase text-2xl ${accentColor}`}>Освіта</h3>
      </div>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8">
            <div className={`absolute left-0 top-1 bottom-1 w-1.5 ${barColor} opacity-90`}></div>
            <h4 className={`font-black uppercase text-lg leading-tight ${accentColor}`}>{edu.institution}</h4>
            {/* Встановлено text-base */}
            <p className={`text-base mt-2 font-medium ${isDark ? "text-slate-200" : "text-[#800000]/90"}`}>{edu.degree}</p>
            <span className="text-xs opacity-60 block mt-1 italic">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;