document.addEventListener('DOMContentLoaded', function () {
    const botonSubir = document.getElementById('btn-subir');

    botonSubir.addEventListener('click', function () {
        document.documentElement.scrollTop = 0;
    });
});
