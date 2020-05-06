
var img = document.getElementsByClassName("dropdown_img")[0];
var dropdown = document.getElementsByClassName("nav-dropdown-content")[0];
var header = document.getElementsByClassName("header")[0];
var content = document.getElementsByClassName("content")[0];
var header_menu = document.getElementsByClassName("header_menu")[0];
var open_burger = document.getElementsByClassName("opened_burger")[0];
var burger_button = document.getElementsByClassName("burger_button")[0];
var opened_burger = document.getElementsByClassName("opened_burger")[0];
var burger_line1 = document.getElementsByClassName("burger_line")[0];
var burger_line2 = document.getElementsByClassName("burger_line")[1];
var burger_line3 = document.getElementsByClassName("burger_line")[2];
var dropdown_mobile = document.getElementsByClassName("mobile_dropdown")[0];



//adding specific HOVER on Menu elements Level 2
//all menu elements on level 2
var menu_level2 = document.querySelectorAll(".menul2");


//on hover - change image at right in menu
function addHover(elem,index) {
	elem.addEventListener("mouseover", function() {
		var src = elem.dataset.img;
		if (src != "fileadmin"){
    			elem.parentElement.parentElement.nextElementSibling.style.backgroundImage = "url(" + src + ")";
    			elem.parentElement.parentElement.nextElementSibling.style.backgroundSize = "cover";
		}

	}, false);

	elem.addEventListener("mouseout", function() {
    		elem.parentElement.parentElement.nextElementSibling.style.backgroundImage = "url(fileadmin/templates/LPMF/Resources/Public/img/dropdownImg.png)";
    		elem.parentElement.parentElement.nextElementSibling.style.backgroundSize = "cover";
    	}, false);
}

//attach change image on hover to all elementes menu on level 2
menu_level2.forEach( addHover );





//adding specific behaviour to image in Main page

//select all image with class changable

//hide top image and show bottom image
jQuery(".changable").mouseover(function() {
	
	jQuery(".changable").show();
	jQuery(this).hide();
	jQuery(this).next().show();

});


//hide bottom image and show top image
jQuery(".img_over").mouseout(function() {

	jQuery(".img_over").hide();
	jQuery(".changable").show();
	jQuery(this).prev().show();

});


/*
var changable_image = document.querySelectorAll(".changable");

function hideImage(elem, index) {

	elem.addEventListener("mouseover", function() {
		elem.style.display = "none";
		elem.nextElementSibling.style.display = "block";
		//elem.nextElementSibling.nextElementSibling.style.display = "block";
		//elem.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
	}, false);

}

changable_image.forEach( hideImage );


var hover_image = document.querySelectorAll(".img_over");

function showImage(elem, index) {

	elem.addEventListener("mouseout", function() {
		elem.style.display = "none";
		elem.previousElementSibling.style.display = "block";
		//elem.nextElementSibling.style.display = "none";
		//elem.nextElementSibling.nextElementSibling.style.display = "block";
	}, false);

}

hover_image.forEach( showImage );*/





//Slider on main page and changing Header background on other

var slides = document.getElementsByClassName("slide");
var n = Object.keys(slides).length -1; //highest number of slide in set

if (n >= 0){ //if exist image with class "slides" - this is Main page - slider will working

//show first slide
slides[0].style.display = "block";
header.style.backgroundImage= "url(" + slides[0].dataset.img + ")";

var i_slides = 0; //current number of slide



    setInterval(function(){  

	i_slides = i_slides + 1;
	
	if (i_slides > n){
		i_slides = 0;
		//hide previous slide
		slides[ n ].style.display = "none";
		// $(slides[ n ]).stop().fadeOut();
		//show next slide
		slides[i_slides].style.display = "block";
		// $(slides[i_slides]).stop().fadeIn();
		// $(header).stop().fadeOut();
		header.style.backgroundImage= "url(" + slides[ i_slides ].dataset.img + ")";
		// $(header).stop().fadeIn();
	} else {
		//hide previous slide
		slides[ (i_slides - 1) ].style.display = "none";
		// $(slides[ (i_slides - 1) ]).stop().fadeOut();
		//show next slide
		slides[ i_slides ].style.display = "block";
		// $(slides[ i_slides ]).stop().fadeIn();
		// $(header).stop().fadeOut();
		header.style.backgroundImage= "url(" + slides[ i_slides ].dataset.img + ")";
		// $(header).stop().fadeIn();
	}

	 
    
	}, 7000);

} else { //on other pages background of Header set as image from content attr data-imgtop

	header.style.backgroundImage= "url(" + content.dataset.imgtop + ")";

}

//END Slider






//stick Menu at the Top when scroll

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


