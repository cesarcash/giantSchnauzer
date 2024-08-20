const $menuIcon = document.querySelector('.header__icon-menu');
const $menu = document.querySelector('.menu');

$menuIcon.addEventListener('click', () => {
    $menu.classList.toggle('menu-active');
});

window.addEventListener('click', (event) => {
    if ($menu.classList.contains('menu-active') && event.target !== $menuIcon) {
        $menu.classList.remove('menu-active');
    }
})