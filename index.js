
// Phần darkmode
const modeToggle = document.querySelector('#mode-toggle');
const icon = document.querySelector('#icon');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

modeToggle.addEventListener('click', () => {
    if (icon.classList.contains('fa-moon-o')) {
        icon.classList.remove('fa-moon-o');
        icon.classList.add('fa-sun-o');
        overlay.classList.add('active');
        overlay.style.pointerEvents = 'none'; // tắt tính năng pointer-events
    } else {
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');
        overlay.classList.remove('active');
        overlay.style.pointerEvents = 'auto'; // bật lại tính năng pointer-events
    }
});

document.body.appendChild(overlay);

const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = false;

function toggleTheme() {
    if (isDarkMode) {
        themeToggle.querySelector('.fa-sun-o').classList.add('fa-moon-o');
        themeToggle.querySelector('.fa-sun-o').classList.remove('fa-sun-o');
        themeToggle.querySelector('.overlay').classList.add('overlay-dark');
        themeToggle.querySelector('.overlay').classList.remove('overlay-light');
        isDarkMode = false;
    } else {
        themeToggle.querySelector('.fa-moon-o').classList.add('fa-sun-o');
        themeToggle.querySelector('.fa-moon-o').classList.remove('fa-moon-o');
        themeToggle.querySelector('.overlay').classList.add('overlay-light');
        themeToggle.querySelector('.overlay').classList.remove('overlay-dark');
        isDarkMode = true;
    }
}

// Phần search
$('.control').click( function(){
    $('body').addClass('search-active');
    $('.input-search').focus();
});
    $('.icon-close').click( function(){
    $('body').removeClass('search-active');
});
