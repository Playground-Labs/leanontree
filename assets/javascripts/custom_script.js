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
$(window).load(function() {
 document.getElementById("hideAll").style.display = "none"; 
  $("body").removeClass("preload");
});

$(document).ready(function(){
var coverIcon = document.getElementById("hamburger-icon");
var iconbarA = document.getElementById("bar-a");
var iconbarB = document.getElementById("bar-b");
var iconbarC = document.getElementById("bar-c");
var navigation = document.getElementById("navigation-elements");
var second_module = document.getElementById("home-module-b");
var hamburgermenu = document.getElementById("hamburger-wrap"); 
var isColorChanged = false;
var buttonTester = document.getElementById("button-tester");
var helper_circle_for_categories = document.getElementById("helper-circle-for-categories");
var helper_circle_for_events = document.getElementById("helper-circle-for-events");
var helper_circle_for_other_pages = document.getElementById("helper-circle-for-other-pages");
var brief_introduction = document.getElementById("landing-page-brief-introduction");
var landing_page_site_categories_overiew = document.getElementById("landing-page-site-categories-overiew");
var back_button = document.getElementById("back");


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
 coverIcon.classList.toggle('change-colour');
 // blue.classList.toggle('slide');

});


window.addEventListener('scroll', function(e) { 
if (second_module.getBoundingClientRect()["top"] < hamburgermenu.getBoundingClientRect()["bottom"]) {
    if(isColorChanged == false) {
    coverIcon.classList.add('module-b-change-colour');
     navigation.classList.add('module-b-color-change');
        
isColorChanged = true;
    }
}
else if(second_module.getBoundingClientRect()["top"] > hamburgermenu.getBoundingClientRect()["bottom"]) {
     if(isColorChanged == true) {
         coverIcon.classList.remove('module-b-change-colour');
         navigation.classList.remove('module-b-color-change');
isColorChanged = false;
    }
}
});

buttonTester.addEventListener('click', function(){
   helper_circle_for_categories.classList.add('disappear-navigation');
   helper_circle_for_other_pages.classList.add('disappear-navigation');
   helper_circle_for_events.classList.add('disappear-navigation');
   brief_introduction.classList.add('disappear-description');
   landing_page_site_categories_overiew.classList.add('site-categories-overview');
});
back_button.addEventListener('click', function(){
   landing_page_site_categories_overiew.classList.remove('site-categories-overview');
   helper_circle_for_categories.classList.remove('disappear-navigation');
   helper_circle_for_other_pages.classList.remove('disappear-navigation');
   helper_circle_for_events.classList.remove('disappear-navigation');
   brief_introduction.classList.remove('disappear-description');
   landing_page_site_categories_overiew.classList.remove('site-categories-overview');
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

