// 1. Системна інформація (LocalStorage)
function saveSystemInfo() {
    const info = {
        os: navigator.platform, //
        browser: navigator.userAgent, //
        timeSaved: new Date().toLocaleString()
    };
    // Зберігаємо як рядок JSON
    localStorage.setItem('system_data', JSON.stringify(info));
    
    const display = document.getElementById('storage-info');
    const saved = JSON.parse(localStorage.getItem('system_data')); //
    
    if (display && saved) {
        display.innerHTML = `Система: ${saved.os} | Браузер: ${saved.browser}`; //
    }
}

// 2. Динамічний вміст (Fetch API)
async function fetchReviews() {
    const variant = 5; // Твій номер у журналі
    const container = document.getElementById('reviews-container');
    
    try {
        // Асинхронний запит до сервера
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`);
        const data = await response.json(); //
        
        if (container) {
            container.innerHTML = ''; 
            // Відображаємо перші 3 коментарі
            data.slice(0, 3).forEach(comment => {
                const div = document.createElement('div');
                div.style.borderBottom = "1px solid #ccc";
                div.style.padding = "10px 0";
                div.innerHTML = `<strong>${comment.email}</strong>: <p>${comment.body}</p>`;
                container.appendChild(div);
            });
        }
    } catch (error) {
        console.error('Помилка отримання даних:', error); //
    }
}

// 3. Модальне вікно (через 1 хвилину)
function setupModal() {
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.getElementById('close-modal');

    // Таймер на 60 секунд
    setTimeout(() => {
        if (modal) modal.style.display = 'block';
    }, 60000); 

    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none'; //
    }
}

// 4. Перемикач теми (Авто за часом + Кнопка)
function handleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    
    // Автоматичне перемикання за часом
    const hours = new Date().getHours(); //
    // Денна тема: від 07:00 до 21:00
    if (hours < 7 || hours >= 21) {
        body.classList.add('dark-theme'); //
    }

    // Ручне перемикання через кнопку
    if (btn) {
        btn.onclick = () => {
            body.classList.toggle('dark-theme');
        };
    }
}

// Запуск усіх функцій після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    saveSystemInfo();
    fetchReviews();
    setupModal();
    handleTheme();
});