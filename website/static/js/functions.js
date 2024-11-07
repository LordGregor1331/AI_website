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

//learn more toggle in progress

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

//add to favorites
document.addEventListener('DOMContentLoaded', function() {
    const starIcon = document.getElementById('star-icon');
    if (!starIcon) {
        console.error('Элемент с id "star-icon" не найден!');
        return;
    }
    const starUrl = starIcon.dataset.starUrl;
    const starGoldUrl = starIcon.dataset.starGoldUrl;
    starIcon.addEventListener('click', function() {
        const currentSrc = this.getAttribute('src');
                if (currentSrc.includes('star.png')) {
            this.setAttribute('src', starGoldUrl);
            } else {
            this.setAttribute('src', starUrl);
        }
    });
});

//threedots-menu 
document.addEventListener('DOMContentLoaded', function () {
    const threedots = document.querySelector('.threedots')
    const menu = document.getElementById('threedots-menu')
    const deleteOption = document.getElementById('delete-option')
    const renameOption = document.getElementById('rename-option')
    const conversationTitle = document.querySelector('.conversation-title')

    function toggleMenu (event) {
        event.stopPropagation()
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'
    }
    
    function hideMenu() {
        menu.style.display = 'none'
    }
    threedots.addEventListener('click', toggleMenu)

    deleteOption.addEventListener('click', function(event) {
        event.stopPropagation()
        //здесь можно добавить логику по удалению чата на сервере, пока что оно просто скрывает чат
        hideMenu()
        const chatDelete = this.closest('.chat-date')
        if (chatDelete) {
        chatDelete.style.display = 'none'
        }
    })

    renameOption.addEventListener('click', function (event) {
        event.stopPropagation
        hideMenu()
        enableTitleEditing()
    })
    //Редактирование названия чата
    function enableTitleEditing() {
        conversationTitle.setAttribute('contenteditable', 'true')
        conversationTitle.focus()
        document.execCommand('selectAll', false, null)
        conversationTitle.addEventListener('blur', saveTitle)
        conversationTitle.addEventListener('keydown', handleKeyDown)
    }
    //сохранение изменений в названии чата
    function saveTitle () {
        const newTitle = conversationTitle.textContent.trim()
        if (newTitle === '') {
            conversationTitle.focus()
            return
        }
        conversationTitle.removeAttribute('contenteditable')
        conversationTitle.removeEventListener('blur', saveTitle)
        conversationTitle.removeEventListener('keydown', handleKeyDown)
        //здесь надо добавить функцию по сохранению данных на сервер
        console.log('New title: ', newTitle)
    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            conversationTitle.blur()
        }
    }
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !threedots.contains(event.target)) {
            hideMenu()
        }
    })
})

document.querySelector('.chat-date').addEventListener('click', function  () {
    document.getElementById('chat_history').classList.remove('active')
    document.getElementById('chat').classList.add('active')
})

