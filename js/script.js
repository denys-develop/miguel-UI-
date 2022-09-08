// Menu burger
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header__nav-list');
const body = document.body; 


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.querySelectorAll('.header__nav-list-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
    });
}); 