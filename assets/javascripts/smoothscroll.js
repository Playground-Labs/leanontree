$(document).ready(function(){
function currentYPosition() {
      // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
function targetYPosition(ElementId) {
    var element = document.getElementById(ElementId);
    var topPositionOfElement = element.offsetTop;
    var node = element;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        topPositionOfElement += node.offsetTop;
    } return topPositionOfElement;
}

function smoothScroll(ElementId) {

    var startY = currentYPosition();

    var stopY = targetYPosition(ElementId);

    var distance = stopY > startY ? stopY - startY : startY - stopY;

    if (distance < 100) {
    
        scrollTo(0, stopY); return;
        
    }
    var speed = Math.round(distance / 50);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
       
        for ( var i=startY; i<stopY; i+=step ) {
 
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
          
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

var explore_module_a_button = document.getElementById("explore-module-a");
var explore_module_b_button = document.getElementById("explore-module-b");
explore_module_b_button.addEventListener('click',function(){
    
smoothScroll("home-module-b");    
});
explore_module_a_button.addEventListener('click',function(){
smoothScroll("home-module-a");    
});
});