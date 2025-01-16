// // -------------------------------------------------------------------
// // 1. Declaramos constantes y variables
// // -------------------------------------------------------------------


// // -------------------------------------------------------------------
// // 2. Events y funciones
// // -------------------------------------------------------------------


// // -------------------------------------------------------------------
// // 3. Inicializamos el slider
// // -------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.header__menu--btn'); // selecciono el botón
    const navMenu = document.querySelector('.nav'); // selecciono el menú
    console.log(menuBtn, navMenu); // imprimir en pantalla

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('nav--activo'); // mostrar/ocultar
    });
});
