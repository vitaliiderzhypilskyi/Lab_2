import { useState, useEffect } from "react";

function Modal({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const isDark = theme === "dark";

  // Поява через 1 хв (60 000 мс)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  // Відновлення з LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("modalFormData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Збереження в LocalStorage при введенні
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    localStorage.setItem("modalFormData", JSON.stringify(updated));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-sans uppercase tracking-widest transition-all">
      <div className={`
        ${isDark ? "bg-slate-900 border-[#E2C799]" : "bg-[#FFF8E7] border-[#800000]"} 
        border-2 w-full max-w-md p-8 relative shadow-2xl transition-all duration-500
      `}>
        
        <button 
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 ${isDark ? "text-[#E2C799]" : "text-[#800000]"} hover:opacity-70 text-2xl transition-colors`}
        >
          ✕
        </button>

        <h3 className={`
          ${isDark ? "text-[#E2C799] border-[#E2C799]/30" : "text-[#800000] border-[#800000]/30"} 
          font-black text-center mb-8 border-b pb-4 text-sm transition-colors
        `}>
          Залишити запит
        </h3>

        <form 
          action="https://formspree.io/f/mnjojdbj" 
          method="POST" 
          className="space-y-6"
        >
          <div>
            <input 
              type="text" name="name" placeholder="ІМ'Я" required 
              value={formData.name} onChange={handleChange}
              className={`w-full bg-transparent border-b ${isDark ? "border-[#E2C799]/50 text-white" : "border-[#800000]/50 text-[#800000]"} py-2 text-xs focus:outline-none transition-colors placeholder:opacity-85 placeholder:font-medium`}
            />
          </div>
          <div>
            <input 
              type="email" name="email" placeholder="EMAIL" required 
              value={formData.email} onChange={handleChange}
              className={`w-full bg-transparent border-b ${isDark ? "border-[#E2C799]/50 text-white" : "border-[#800000]/50 text-[#800000]"} py-2 text-xs focus:outline-none transition-colors placeholder:opacity-85 placeholder:font-medium`}
            />
          </div>
          <div>
            <input 
              type="tel" name="phone" placeholder="ТЕЛЕФОН" required 
              value={formData.phone} onChange={handleChange}
              className={`w-full bg-transparent border-b ${isDark ? "border-[#E2C799]/50 text-white" : "border-[#800000]/50 text-[#800000]"} py-2 text-xs focus:outline-none transition-colors placeholder:opacity-85 placeholder:font-medium`}
            />
          </div>
          <div>
            <textarea 
              name="message" placeholder="ПОВІДОМЛЕННЯ" rows="3" required 
              value={formData.message} onChange={handleChange}
              className={`w-full bg-transparent border-b ${isDark ? "border-[#E2C799]/50 text-white" : "border-[#800000]/50 text-[#800000]"} py-2 text-xs focus:outline-none transition-colors resize-none placeholder:opacity-85 placeholder:font-medium`}
            ></textarea>
          </div>

          <button 
            type="submit"
            className={`w-full ${isDark ? "bg-[#E2C799] text-slate-900" : "bg-[#800000] text-white"} font-black py-4 hover:opacity-90 transition-all shadow-lg text-[10px]`}
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;