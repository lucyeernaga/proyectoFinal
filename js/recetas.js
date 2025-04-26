document.addEventListener('DOMContentLoaded', () => {
    // cogemos el parámetro id(ej: recetas.html?id=salados)
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('id'); // salados, dulces, navidad

    //con esto se muestran solo las recetas de la categoría elegida
    function mostrarRecetas(categoriaElegida) {
        const recetas = document.querySelectorAll('.recetas');

        recetas.forEach(receta => {
            if (receta.classList.contains(categoriaElegida)) {
                receta.style.display = 'block';
            } else {
                receta.style.display = 'none';
            }
        });
    }

    // Si hay una categ. se muestra esa, si no, se muestran las recetas saladas
    if (categoria) {
        mostrarRecetas(categoria);
    } else {
        mostrarRecetas('salados');
    }
});
