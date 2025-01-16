// -------------------------------------------------------------------
// 1. Declaramos constantes y variables
// -------------------------------------------------------------------

// Seleccionamos el contenedor de imágenes y las imágenes individuales
const sliderImages = document.querySelector('.slider__container');
const images = document.querySelectorAll('.slider__foto');

// Seleccionamos los botones de "Anterior" y "Siguiente"
const btnNext = document.querySelector('#btnSig');
const btnPrev = document.querySelector('#btnAnt');

// Variable para saber qué imagen se muestra actualmente
let currentImageIndex = 0;

// -------------------------------------------------------------------
// 2. Eventos y funciones
// -------------------------------------------------------------------

// EventListener para el botón "Siguiente"
btnNext.addEventListener('click', mostrarSiguienteImagen);

// EventListener para el botón "Anterior"
btnPrev.addEventListener('click', mostrarImagenAnterior);

// Función para mostrar la siguiente imagen
function mostrarSiguienteImagen() {
    currentImageIndex++; // Aumentamos el índice de la imagen
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Si llegamos al final, volvemos a la primera imagen
    }
    actualizarSlider(); // Llamamos a la función para actualizar el slider
}

// Función para mostrar la imagen anterior
function mostrarImagenAnterior() {
    currentImageIndex--; // Disminuimos el índice de la imagen
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Si estamos en la primera, volvemos a la última imagen
    }
    actualizarSlider(); // Llamamos a la función para actualizar el slider
}

// Función para actualizar la posición del slider
function actualizarSlider() {
    const movimiento = currentImageIndex * -100; // Movemos el slider según el índice
    sliderImages.style.transform = `translateX(${movimiento}%)`; // Aplicamos la transformación
}

// -------------------------------------------------------------------
// 3. Inicializamos el slider
// -------------------------------------------------------------------
actualizarSlider(); // Llamamos la función para mostrar la primera imagen al cargar la página