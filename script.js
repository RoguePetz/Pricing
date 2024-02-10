/*Set up Binance web socket live prices*/

let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/ltceur@trade');
let ws4 = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade');

let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let ltc = document.getElementById("litecoin");
let bnb = document.getElementById("binancecoin");


ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    eth.innerText = parseFloat(stockObject.p).toFixed(2);
}

ws2.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    btc.innerText = parseFloat(stockObject.p).toFixed(2);
}

ws3.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    ltc.innerText = parseFloat(stockObject.p).toFixed(2);
}

ws4.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    bnb.innerText = parseFloat(stockObject.p).toFixed(2);
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

