function Skills({ theme }) {
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";
  const borderColor = isDark ? "border-[#E2C799]" : "border-[#800000]";

  const skillsList = ['Python, HTML, PHP, C, C#', 'Захист мереж', 'ISO 27001 Аудит', 'Схемотехніка'];

  return (
    <div className={`pt-6 border-t-2 ${borderColor}`}>
      <h3 className={`font-black uppercase text-xs tracking-[0.2em] mb-4 ${accentColor}`}>Навички</h3>
      <ul className={`space-y-2 text-sm font-medium ${isDark ? "text-slate-300" : "text-[#800000]"}`}>
        {skillsList.map((skill) => (
          <li key={skill} className="flex items-start gap-2">
            <span className={`text-xs mt-1 ${accentColor}`}>•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Skills;