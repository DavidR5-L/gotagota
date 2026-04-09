// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY)

document.addEventListener("DOMContentLoaded", () => {
    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => {
        console.log('Datos:', data);
        const elemento = document.getElementById("tabla-cliente")

        console.log(elemento)
    })
});