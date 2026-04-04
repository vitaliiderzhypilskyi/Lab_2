import { useState, useEffect } from "react";

function Reviews({ theme }) {
  // 1. Створюємо "кошик" (state) для відгуків [cite: 98, 136]
  const [comments, setComments] = useState([]);
  
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-[#E2C799]" : "text-[#800000]";
  const borderColor = isDark ? "border-[#E2C799]" : "border-[#800000]";

  // 2. useEffect спрацьовує ОДИН РАЗ при завантаженні сторінки [cite: 107, 134]
  useEffect(() => {
    // Твій варіант [cite: 50, 51, 135]
    const variant = 5; 
    
    // 3. Фізичний запит до сервера [cite: 17, 19]
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(response => response.json()) // Перетворюємо в JSON [cite: 20]
      .then(data => {
        // Беремо перші 3 коментарі і кладемо в state [cite: 21, 52]
        setComments(data.slice(0, 3)); 
      })
      .catch(error => console.error("Помилка:", error)); // Якщо немає інтернету 
  }, []);

  return (
    <section>
      <div className={`flex justify-between items-end border-b-2 pb-1 mb-6 ${borderColor} transition-colors duration-500`}>
        <h3 className={`font-black uppercase text-2xl ${accentColor}`}>Відгуки роботодавців</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 4. Рендеримо дані, які прийшли з сервера [cite: 137] */}
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-2 animate-pulse-once">
            <p className={`text-[10px] font-bold uppercase ${accentColor}`}>
              {comment.email.split('@')[0]} {/* Витягуємо ім'я з пошти */}
            </p>
            <p className={`text-[11px] italic leading-tight ${isDark ? "text-slate-400" : "text-[#800000]/70"}`}>
              "{comment.body.substring(0, 90)}..."
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;