document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------
    // 1. Declaramos constantes y variables
    // -------------------------------------------------------------------
    const menuBtn = document.querySelector('.header__menu--btn'); // selecciono el botón
    const navMenu = document.querySelector('.nav'); // selecciono el menú

    // -------------------------------------------------------------------
    // 2. Events y funciones
    // -------------------------------------------------------------------
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('nav--activo'); // mostrar/ocultar
    });

    // -------------------------------------------------------------------
    // 3. Inicializamos el slider
    // -------------------------------------------------------------------
    console.log(menuBtn, navMenu); // imprimir en pantalla para verificar
});
