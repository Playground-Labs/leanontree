"use strict";

function imgError(image) {
    image.onerror = "";
    image.src = "/img/lot/no-picture.jpg";
    return true;
}

function socialSharePopup(url) {
var newwindow = window.open(url,'name','height=250,width=500');
	if (window.focus)
	{
	newwindow.focus()
	}
    return false;
    } 
 function toggleMenu() {
       var hb = document.getElementById("first-nav");
    if (hb.className === "site-navigation-menu") {
        hb.className += " site-navigation-menu-responsive";
    } else {
        hb.className = "site-navigation-menu";
    }
 }   
$(document).ready(function(){
var coverIcon = document.getElementById("hamburger-icon");
var iconbarA = document.getElementById("bar-a");
var iconbarB = document.getElementById("bar-b");
var iconbarC = document.getElementById("bar-c");
var navigation = document.getElementById("navigation");

$(".timeline > li").hide();
$('.timeline  > .row-fluid,.badges-year').click(function() {
    $(this).parent().find('li').toggle();
});
   
/* document.querySelector( 'a.icon' ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  }); */


coverIcon.addEventListener('click', function() {
  iconbarA.classList.toggle('first-bar');
  iconbarB.classList.toggle('second-bar');
  iconbarC.classList.toggle('third-bar');
 navigation.classList.toggle('visible-navigationelements');
 // blue.classList.toggle('slide');
});

});

window.fbAsyncInit = function() {
    FB.init({
      appId      : '361201497409231',
      xfbml      : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

$(window).scroll(function() {

    if ($(window).scrollTop() > $(".masthead-and-navigation-links").height()) {
        $('#brand-tag-line').addClass('brand-tag-line-dynamic');
        $('.masthead-and-navigation-links').addClass('dynamic-header');
      $('.brand-name').addClass('brand-name-dynamic');
      $('.brand-logo').addClass('brand-logo-dynamic');
    

    } else {
 
       $('#brand-tag-line').removeClass('brand-tag-line-dynamic');
         $('.masthead-and-navigation-links').removeClass('dynamic-header');
      $('.brand-name').removeClass('brand-name-dynamic');
      $('.brand-logo').removeClass('brand-logo-dynamic');
     
       
    }
});

