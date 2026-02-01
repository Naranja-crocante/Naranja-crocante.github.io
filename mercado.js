// alert("¡Bienvenido al Mercado de La Taberna!")

const viewportheight = window.innerHeight;
const element = document.querySelector('#inicio');

function caidaCartel(){
    if(window.scrollY >= viewportheight/2){
        element.classList.add("animate__animated","animate__jackInTheBox");
    } 
} 