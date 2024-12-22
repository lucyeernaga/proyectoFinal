// // -------------------------------------------------------------------
// // 1. Declaramos constantes y variables
// // -------------------------------------------------------------------

// // Selecciono el contenedor de imágenes del carrusel del HTML y también las propias imagenes
// const sliderImages = document.querySelector('.carrousel__imagenes'); 
// const images = document.querySelectorAll('.carrousel__img');
// // Selecciono los botones con ids 
// const btnNext = document.querySelector('#btnSig');
// const btnPrev = document.querySelector('#btnAnt'); 

// // variable para saber que imagen se muestra 
// let currentImageIndex = 0; // para empezar en la imagen 1
// const totalImages = images.length; // es el total de todas las imagenes



// // -------------------------------------------------------------------
// // 2. Events y funciones
// // -------------------------------------------------------------------

// // eventListener btn "Siguiente"
// btnNext.addEventListener('click', nextImage);

// // eventListener btn "Anterior"
// btnPrev.addEventListener('click', prevImage);

// // para pasar de la imagen 1 a la siguiente
// function nextImage() {
//     currentImageIndex++; // + indice
//     if (currentImageIndex >= totalImages) {
//         currentImageIndex = 0; // si llega a la imagen 6, vuelve a la 1
//     }
//     actualizarSlider();
// }

// // para ir a la imagen anterior
// function prevImage() {
//     currentImageIndex--; // - indice
//     if (currentImageIndex < 0) {
//         currentImageIndex = totalImages - 1; // Si está en la primera, vuelve a la última
//     }
//     actualizarSlider();
// }

// // para actualizar donde está (la posición) del slider
// function actualizarSlider() {
//     const movimiento = currentImageIndex * -100; 
//     sliderImages.style.transform = `translateX(${movimiento}%)`;
// }

// // -------------------------------------------------------------------
// // 3. Inicializamos el slider
// // -------------------------------------------------------------------
// actualizarSlider();



let carrouselImagenes = document.querySelector(".carrousel__imagenes"); 

let images = carrouselImagenes.querySelectorAll(".carrousel__img");

let index = 1;

setInterval(function () {
    let porcentaje = index * -100;
    carrouselImagenes.style.transform = 
    "translateX(" + porcentaje + "% )";
    index++;
    if (index > images.length -1) {
        index = 0;
    }
}, 5000);