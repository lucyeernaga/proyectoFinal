document.addEventListener('DOMContentLoaded', function () {
    // Leer el parámetro `id` de la URL (ej. receta.html?id=salados)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id'); // salados, dulces, navidad

    // Función para mostrar solo las recetas de la categoría seleccionada
    function showRecipes(category) {
        const allRecipes = document.querySelectorAll('.recetas');
        
        // Mostrar solo las recetas que coinciden con la categoría
        allRecipes.forEach(recipe => {
            if (recipe.classList.contains(category)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    }

    // Verificar si se pasó un `id` en la URL, y mostrar las recetas de esa categoría
    if (categoryId) {
        showRecipes(categoryId);
    } else {
        // Si no hay categoría en la URL, mostrar todas las recetas
        showRecipes('salados'); // Mostrar una categoría predeterminada
    }
});
