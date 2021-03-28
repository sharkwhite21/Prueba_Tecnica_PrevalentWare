let active = document.querySelector(".last-box");
let cerrar = document.querySelector("body > main > div.zoom > div > img");
active.addEventListener('click',modal,false);
cerrar.addEventListener('click',close,false);

function modal(e){
    let modal = document.querySelector('body > main > div.zoom');

    modal.removeAttribute('display');
    modal.style.display= "flex";

    active.removeAttribute('display');
    active.style.display= "none";
}

function close(e) {
    let modal = document.querySelector('body > main > div.zoom');

    modal.removeAttribute('display');
    modal.style.display= "none";

    active.removeAttribute('display');
    active.style.display= "flex";
}