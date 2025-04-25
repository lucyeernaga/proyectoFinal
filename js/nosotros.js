// -------------------------------------------------------------------
// 1. Declaramos constantes y variables
// -------------------------------------------------------------------

// Seleccionamos el contenedor de imágenes y las imágenes individuales
const sliderImages = document.querySelector('.slider__container');
const images = document.querySelectorAll('.slider__foto');

// Seleccionamos los botones de "Anterior" y "Siguiente"
const btnNext = document.querySelector('#btnSig');
const btnPrev = document.querySelector('#btnPrev');

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


// ----------------------------------------------------------
// Botón "Leer más"
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const btnExpandir = document.getElementById("btnExpandir");
    const texto2 = document.querySelector(".texto2");

    if (btnExpandir && texto2) {
        btnExpandir.addEventListener("click", function () {
            texto2.classList.toggle("mostrar");
            btnExpandir.innerText = texto2.classList.contains("mostrar") ? "Leer menos" : "Leer más";
        });
    }
});




















// Botón leer más , leer menos

// -------------------------------------------------------------------
// 1. Declaramos constantes y variables
// -------------------------------------------------------------------

// Seleccionamos el botón y el texto a mostrar/ocultar
const btnExpandir = document.getElementById("btnExpandir");
const texto2 = document.querySelector(".texto2");

// -------------------------------------------------------------------
// 2. Eventos y funciones
// -------------------------------------------------------------------

// EventListener para el botón "Leer más"
btnExpandir.addEventListener("click", alternarTexto);

// Función para alternar la visibilidad del texto
function alternarTexto() {
    const textoVisible = texto2.style.display === "block";

    if (textoVisible) {
        ocultarTexto();
    } else {
        mostrarTexto();
    }
}

// Función para mostrar el texto
function mostrarTexto() {
    texto2.style.display = "block";
    btnExpandir.textContent = "Leer menos";
}

// Función para ocultar el texto
function ocultarTexto() {
    texto2.style.display = "none";
    btnExpandir.textContent = "Leer más";
}

// -------------------------------------------------------------------
// 3. Inicializamos el estado inicial
// -------------------------------------------------------------------
ocultarTexto(); // Ocultamos el texto al cargar la página
