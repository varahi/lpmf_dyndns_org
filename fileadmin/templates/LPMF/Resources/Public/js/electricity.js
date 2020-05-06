var opened_burger = document.getElementsByClassName("opened_burger")[0];
var burger_line1 = document.getElementsByClassName("burger_line")[0];
var burger_line2 = document.getElementsByClassName("burger_line")[1];
var burger_line3 = document.getElementsByClassName("burger_line")[2];
var burger_button = document.getElementsByClassName("burger_button")[0];
var open_burger = document.getElementsByClassName("opened_burger")[0];
var dropdown_mobile = document.getElementsByClassName("mobile_dropdown")[0];
var electricity = document.getElementsByClassName("electricity")[0];
var dropdown = document.getElementsByClassName("dropdown-content")[0];
var nos_formation = document.getElementsByClassName("nos_formation");
var header_menu = document.getElementsByClassName("header_menu")[0];
var img = document.getElementsByClassName("dropdown_img")[0];



electricity.addEventListener("mouseout", function() {
    img.style.backgroundImage = "url(img/dropdownImg.png)";
    img.style.backgroundSize = "cover";
}, false);

dropdown.addEventListener("mouseover", function() {
    nos_formation[0].style.backgroundColor = "orange";
}, false);


dropdown_mobile.addEventListener("click", function() {
    nos_formation[1].style.backgroundColor = "orange";
}, false);

dropdown.addEventListener("mouseout", function() {
    nos_formation[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
}, false);


window.onscroll = function() {myFunction()};


var sticky = header_menu.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header_menu.classList.add("sticky");
        open_burger.classList.add("top_class");
    } else {
        header_menu.classList.remove("sticky");
        open_burger.classList.remove("top_class");
    }
}

var opened = false;

burger_button.addEventListener("click", function() {
    if (opened){
        open_burger.style.display = "none";
        burger_line2.style.display = "block";
        burger_line1.style.position = "relative";
        burger_line1.style.transform = "rotate(0deg)";
        burger_line3.style.transform = "rotate(0deg)";
        header_menu.style.backgroundColor = "rgba(0,0,0,0.2)"
    } else {
        opened_burger.style.display = "block";
        burger_line2.style.display = "none";
        burger_line1.style.position = "absolute";
        burger_line1.style.transform = "rotate(45deg)";
        burger_line3.style.transform = "rotate(-45deg)";
        header_menu.style.backgroundColor = "rgba(0,0,0,0.8)"
    }
    opened = !opened;
});


