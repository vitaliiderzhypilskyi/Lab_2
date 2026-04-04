import { useState, useEffect } from "react";

function ReviewsForm({ theme }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";
  const borderColor = isDark ? "border-[#E2C799]" : "border-[#800000]";
  const btnBg = isDark ? "bg-[#E2C799]" : "bg-[#800000]";
  const btnText = isDark ? "text-slate-900" : "text-white";

  // 1. Відновлення даних з LocalStorage при завантаженні [cite: 10, 14]
  useEffect(() => {
    const savedData = localStorage.getItem("reviewsFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // 2. Обробка змін та автоматичне збереження [cite: 9, 13]
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem("reviewsFormData", JSON.stringify(updatedData));
  };

  return (
    <section className="mt-12">
      <div className={`flex justify-between items-end border-b-2 pb-1 mb-6 ${borderColor} transition-colors duration-500`}>
        <h3 className={`font-black uppercase text-2xl ${accentColor}`}>Залишити відгук</h3>
      </div>

      <form action="https://formspree.io/f/mnjojdbj" method="POST" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" name="name" placeholder="ВАШЕ ІМ'Я" required 
            value={formData.name} onChange={handleChange}
            className={`w-full bg-transparent border-b ${isDark ? 'border-[#E2C799]/50 text-white' : 'border-[#800000]/50 text-[#800000]'} py-2 text-xs focus:outline-none transition-colors uppercase placeholder:opacity-85 placeholder:font-medium`}
          />
          <input 
            type="email" name="email" placeholder="ВАШ EMAIL" required 
            value={formData.email} onChange={handleChange}
            className={`w-full bg-transparent border-b ${isDark ? 'border-[#E2C799]/50 text-white' : 'border-[#800000]/50 text-[#800000]'} py-2 text-xs focus:outline-none transition-colors uppercase placeholder:opacity-85 placeholder:font-medium`}
          />
        </div>
        
        <textarea 
          name="message" placeholder="ВАШ КОМЕНТАР" rows="2" required 
          value={formData.message} onChange={handleChange}
          className={`w-full bg-transparent border-b ${isDark ? 'border-[#E2C799]/50 text-white' : 'border-[#800000]/50 text-[#800000]'} py-2 text-xs focus:outline-none transition-colors resize-none uppercase placeholder:opacity-85 placeholder:font-medium`}
        ></textarea>

        <button 
          type="submit"
          className={`px-10 py-4 ${btnBg} ${btnText} font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg text-[10px]`}
        >
          Опублікувати
        </button>
      </form>
    </section>
  );
}

export default ReviewsForm;