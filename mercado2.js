// alert("¡Bienvenido al Mercado de La Taberna!")
const oro = 0;
const viewportheight = window.innerHeight;
const element = document.querySelector('#inicio');

function caidaCartel(){
    if(window.scrollY >= viewportheight/2){
        element.classList.add("animate__animated","animate__jackInTheBox");
    } 
} 
const itemPrice = document.querySelectorAll(".price");
let max = 150;
let min = 50;

// const obtenerPrecioDelDia = (min, max) => {
    // const fecha = new Date();
    // Creamos un número único basado en el año, mes y día (ej: 20231027)
    // const semilla = fecha.getFullYear() * 10000 + (fecha.getMonth() + 1) * 100 + fecha.getDate();
    
    // Usamos el residuo (%) para "encajar" la semilla en nuestro rango
    // const variacion = semilla % (max - min + 1);
    // return min + variacion;
// };

armas = [{
    nombre: "Espada de Hierro",
    imagen: "espada_hierro.png",
    efecto: "Aumenta el daño físico en 10%",
}

for (arma in armas){
    let datos = armas[arma];
    let nombre = datos["nombre"];
    let efecto = datos["efecto"];
    let precio = let precioRandom = Math.round(Math.random()*(max-min+1)+min);
    item.querySelector(".price").textContent  = `$${precioRandom}`;
    let htmlCode = `
    <div class="shop-grid-item">
        <h3>${nombre}</h3>
        <img src="${datos.imagen}" alt="${nombre}">
        <p>${efecto}</p>
        <p class="price">$${precio}</p>
    </div>`;
}

const shopItems = document.querySelectorAll(".shop-grid-item");
shopItems.forEach((item, i) => {
    item.tabIndex = i;   
    let precioRandom = Math.round(Math.random()*(max-min+1)+min);
    item.querySelector(".price").textContent = `$${precioRandom}`;
});


