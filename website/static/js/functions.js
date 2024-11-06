// В: РАЗДЕЛЯЙ ВСЁ НА КАК МОЖНО БОЛЬШЕ РАЗНЫХ ФАЙЛОВ, ТИПО ОТДЕЛЬНЫЕ JS ДЛЯ ЧАТОВ, ДЛЯ АНИМАЦИЙ И ВСЕ ТАКОЕ :)
// И: ХОРОШО :)




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

//burger toggle
function toggleMenu() {
    document.querySelector('.burger-container').classList.toggle('active');
}

//learn more toggle 

//chat history navigation 
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.chat-history-object');
    const mainSections = document.querySelectorAll('.main');
    const nav = document.querySelector('.chat-history-navigation');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const navId = item.id; 
            const mainId = navId.replace('-nav', ''); 
            const targetMain = document.getElementById(mainId);
            mainSections.forEach(main => {
                main.classList.remove('active-main');
            });
            targetMain.classList.add('active-main');
            nav.classList.add('nav-hidden');
        });
    });
    const backButton = document.querySelector('.arrow-back');
    backButton.addEventListener('click', () => {
        mainSections.forEach(main => {
            main.classList.remove('active-main');
        });
        nav.classList.remove('nav-hidden');
    });
});