var menuBtn = document.querySelector('#btn-menu');
var thoatBtn = document.querySelector('#btn-thoat');

menuBtn.addEventListener("click", function() {
    document.querySelector(".header-menu ul").style.transform = "translateX(0%)";
    document.querySelector(".fa-xmark").style.opacity = "1";
    document.querySelector(".header-menu ul").style.transition = "all 0.5s ease";
    
});
thoatBtn.addEventListener("click", function() {
    document.querySelector(".header-menu ul").style.transform = "translateX(-100%)";
    document.querySelector(".fa-xmark").style.opacity = "0";
    document.querySelector(".header-menu ul").style.transition = "all 0.5s ease";
});
// -----------Slider---------------------
var nutTrai = document.querySelector("#nut-Trai");
var nutPhai = document.querySelector("#nut-Phai");
var imgSL = document.querySelectorAll(".slider-qc img");
let index = 0;

nutPhai.addEventListener("click", function() {
    index = index + 1;
    if (index > imgSL.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-qc").style.right = index * 100 + "%";
})
nutTrai.addEventListener("click", function() {
    index = index - 1;
    if (index < 0) {
        index = imgSL.length - 1;
    }
    document.querySelector(".slider-qc").style.right = index * 100 + "%";
})
// -----Auto chạy slider
function sliderAuto () {
    index = index + 1;
    if (index > imgSL.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-qc").style.right = index * 100 + "%";
}
setInterval(sliderAuto,7000);