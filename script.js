/*Set up for coingeckoAPI*/


const fetchData = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cdogecoin&vs_currencies=usd');
    const data = await response.json();
    return data;
}

fetchData()
    .then(data => console.log('resolved:', data));


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

