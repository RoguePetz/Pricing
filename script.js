/*Set up for coingeckoAPI*/

let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let btc = document.getElementById("bitcoin");

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    btc.innerText = parseFloat(stockObject.p).toFixed(2);
}


/*Hamburger menu functionality*/ 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))

