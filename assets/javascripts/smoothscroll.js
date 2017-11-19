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

var navigator_to_next_page_overview = document.getElementById("helper-circle-to-navigate-to-next-page-overview");
var navigator_to_next_page_self_love = document.getElementById("helper-circle-to-navigate-to-next-page-self-love");
if (navigator_to_next_page_overview) {
navigator_to_next_page_overview.addEventListener('click',function(){
    
smoothScroll("self-love");    
});
}
if (navigator_to_next_page_self_love) {
navigator_to_next_page_self_love.addEventListener('click',function(){
smoothScroll("overview");    
});
}
});