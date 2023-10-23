/*this is javscript
var mobileBtn = document.getElementById("hamburger-icon");
console.log(mobileBtn);

mobileBtn.addEventListener("click", toggleMenu);



function toggleMenu() {
    mobileBtn.classList.toggle("open");
}*/


//this is jquery ex
$(".hamburger-icon").on("click", () => {
    $(".hamburger-icon").toggleClass("open");
  // $(this).toggleClass("open");
});