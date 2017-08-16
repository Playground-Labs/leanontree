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

var overiew_navigator_button = document.getElementById("overview-category-navigator");
var self_love_navigator_button = document.getElementById("self-love-category-navigator");
overiew_navigator_button.addEventListener('click',function(){
    
smoothScroll("self-love");    
});
self_love_navigator_button.addEventListener('click',function(){
smoothScroll("overview");    
});
});