"use strict";

function imgError(image) {
    image.onerror = "";
    image.src = "/img/lot/no-picture.jpg";
    return true;
}

function socialSharePopup(url) {
    var newwindow = window.open(url, 'name', 'height=250,width=500');
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}

$(window).load(function () {
    document.getElementById("hideAll").style.display = "none";
    $("body").removeClass("preload");
});

$(document).ready(function () {
    var menu_toggle = document.getElementById("menu-toggle");
    var navigation_elements = document.getElementById("navigation-elements");
    var sticky_header = document.getElementById("navigation-container");
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

    $(".timeline > li").hide();
    $('.timeline  > .row-fluid,.badges-year').click(function () {
        $(this).parent().find('li').toggle();
    });

    // hamburger menu toggle
    if (menu_toggle) {
        menu_toggle.addEventListener('click', function () {
            navigation_elements.classList.toggle('navigation-elements--open');
            this.classList.toggle('menu-toggle--open');
        });
    }

    // sticky navigation on scroll
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > sticky_header.offsetTop) {
            sticky_header.classList.add("sticky-navigation")
        } else {
            sticky_header.classList.remove("sticky-navigation");
        }
    });

    if (category_overview_navigator) {
        category_overview_navigator.addEventListener('click', function () {
            helper_circle_for_categories_overview.classList.add('disappear-navigation');
            helper_circle_to_navigate_to_next_page_overview.classList.add('disappear-navigation');
            helper_circle_for_events_overview.classList.add('disappear-navigation');
            brief_introduction.classList.add('disappear-description');
            landing_page_site_categories_overiew.classList.add('site-categories-overview');
        });
    }
    if (back_button) {
        back_button.addEventListener('click', function () {
            landing_page_site_categories_overiew.classList.remove('site-categories-overview');
            helper_circle_for_categories_overview.classList.remove('disappear-navigation');
            helper_circle_to_navigate_to_next_page_overview.classList.remove('disappear-navigation');
            helper_circle_for_events_overview.classList.remove('disappear-navigation');
            brief_introduction.classList.remove('disappear-description');
            landing_page_site_categories_overiew.classList.remove('site-categories-overview');
        });
    }
    if (pager_previous_button) {
        pager_previous_button.addEventListener('click', function () {
            document.getElementById("blog-cards-wrapper").firstElementChild.nextElementSibling.classList.remove("set-animation", "set-animation-up");
            document.getElementById("blog-cards-wrapper").firstElementChild.classList.remove("set-animation", "set-animation-up");
            document.getElementById("blog-cards-wrapper").lastElementChild.classList.remove("set-animation", "set-animation-up");
            document.getElementById("blog-cards-wrapper").firstElementChild.classList.add("set-animation");
            document.getElementById("blog-cards-wrapper").lastElementChild.classList.add("set-animation-up");
            container_div.insertBefore(container_div.lastElementChild, container_div.firstChild);

        });


    }




    if (pager_next_button) {
        pager_next_button.addEventListener('click', function () {
            document.getElementById("blog-cards-wrapper").firstElementChild.nextElementSibling.classList.remove("set-animation", "set-animation-up");
            document.getElementById("blog-cards-wrapper").firstElementChild.classList.remove("set-animation", "set-animation-up");
            document.getElementById("blog-cards-wrapper").lastElementChild.classList.remove("set-animation", "set-animation-up");
            document.getElementById("blog-cards-wrapper").firstElementChild.classList.add("set-animation");
            document.getElementById("blog-cards-wrapper").firstElementChild.nextElementSibling.classList.add("set-animation-up");
            container_div.appendChild(container_div.firstElementChild);
        });
    }
});

window.fbAsyncInit = function () {
    FB.init({
        appId: '361201497409231',
        xfbml: true,
        version: 'v2.4'
    });
};