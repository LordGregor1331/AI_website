// РАЗДЕЛЯЙ ВСЁ НА КАК МОЖНО БОЛЬШЕ РАЗНЫХ ФАЙЛОВ, ТИПО ОТДЕЛЬНЫЕ JS ДЛЯ ЧАТОВ, ДЛЯ АНИМАЦИЙ И ВСЕ ТАКОЕ :)




// Footer Navigation
const footerButtons = document.querySelectorAll('.footer-nav');
const sections = document.querySelectorAll('.section');

// Function to handle navigation
function handleNavigation(event) {
    const targetId = event.currentTarget.id;
    const targetSection = document.getElementById(targetId.replace('-button', '-page'));

    // Найти активную секцию
    const activeSection = document.querySelector('.section.active');

    if (activeSection) {
        // Текущая секция просто скрывается без анимации
        activeSection.classList.remove('active');
        activeSection.style.display = 'none'; // Скрыть текущую секцию
    }

    // Показать новую секцию
    targetSection.style.display = 'flex'; // Показать новую секцию
    targetSection.classList.add('active');
    targetSection.style.animation = 'fade-in 0.5s forwards';

    // Обновить классы на кнопках
    footerButtons.forEach(button => {
        button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}
