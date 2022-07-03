let bigBox = document.querySelector(".bigbox")
let lampochka = document.querySelector(".lampochka")
let btn = document.querySelector(".btn")
btn.addEventListener("click", function(e) {
    btn.classList.toggle("active");
    lampochka.classList.toggle("active");
    bigBox.classList.toggle("active");
})