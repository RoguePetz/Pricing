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

/*Set up for coingeckoAPI*/

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    .then(res => {
        if (res.ok){
            console.log("success")
        }else{
            console.log("not successful")
        }
        res.json
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))