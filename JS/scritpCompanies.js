let active = document.querySelector(".last-box");
let cerrar = document.querySelector("body > main > div.zoom > div > img");
let zoom =document.querySelector("body > main > div.zoom ")
active.addEventListener('click', function() {
    zoom.style.display = "flex";
    active.style.display = 'none'
})
cerrar.addEventListener('click', function() {
    zoom.style.display = "none";
    active.style.display = 'flex'
})