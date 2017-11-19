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
var self_love_module = document.getElementById("self-love");
var hamburgermenu = document.getElementById("hamburger-wrap"); 
var isColorChanged = false;
var category_overview_navigator = document.getElementById("helper-circle-for-categories-overview");
var helper_circle_for_categories_overview = document.getElementById("helper-circle-for-categories-overview");
var helper_circle_for_events_overview = document.getElementById("helper-circle-for-events-overview");
var helper_circle_to_navigate_to_next_page_overview = document.getElementById("helper-circle-to-navigate-to-next-page-overview");
var brief_introduction = document.getElementById("landing-page-brief-introduction");
var landing_page_site_categories_overiew = document.getElementById("landing-page-site-categories-overiew");
var back_button = document.getElementById("back");
var container_div = document.getElementById('blog-cards-wrapper');
var pager_previous_button = document.getElementById('pager-previous');
var pager_next_button = document.getElementById('pager-next');
/*var blog_cards = document.getElementsByClassName("blog-cards-super-set");
var blog_cards_count = blog_cards.length;
var blog_cards_height = blog_cards[0].offsetHeight;
var total_length_of_blog_cards_superset = blog_cards_count * blog_cards_height;
var null_counter = blog_cards_height;*/

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
 navigation.parentNode.classList.toggle('visible-navigation-area');
 coverIcon.classList.toggle('change-colour');
 // blue.classList.toggle('slide');

});


window.addEventListener('scroll', function(e) {
if(self_love_module){ 
if (self_love_module.getBoundingClientRect()["top"] < hamburgermenu.getBoundingClientRect()["bottom"]) {
    if(isColorChanged == false) {
    coverIcon.classList.add('self-love-change-colour');
     navigation.classList.add('self-love-color-change');
        
isColorChanged = true;
    }
}
else if(self_love_module.getBoundingClientRect()["top"] > hamburgermenu.getBoundingClientRect()["bottom"]) {
     if(isColorChanged == true) {
         coverIcon.classList.remove('self-love-change-colour');
         navigation.classList.remove('self-love-color-change');
isColorChanged = false;
    }
}
}
});
if (category_overview_navigator) {
category_overview_navigator.addEventListener('click', function(){
   helper_circle_for_categories_overview.classList.add('disappear-navigation');
   helper_circle_to_navigate_to_next_page_overview.classList.add('disappear-navigation');
   helper_circle_for_events_overview.classList.add('disappear-navigation');
   brief_introduction.classList.add('disappear-description');
   landing_page_site_categories_overiew.classList.add('site-categories-overview');
});
}
if (back_button) {
back_button.addEventListener('click', function(){
   landing_page_site_categories_overiew.classList.remove('site-categories-overview');
   helper_circle_for_categories_overview.classList.remove('disappear-navigation');
   helper_circle_to_navigate_to_next_page_overview.classList.remove('disappear-navigation');
   helper_circle_for_events_overview.classList.remove('disappear-navigation');
   brief_introduction.classList.remove('disappear-description');
   landing_page_site_categories_overiew.classList.remove('site-categories-overview');
});
}

if (pager_previous_button) {
    pager_previous_button.addEventListener('click', function(){
        container_div.insertBefore(container_div.lastElementChild, container_div.firstChild);       
    });
    }
if (pager_next_button) {
        pager_next_button.addEventListener('click', function(){
            container_div.appendChild(container_div.firstElementChild);           
        });
        }
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

