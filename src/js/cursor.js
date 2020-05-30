var cursor = document.querySelectorAll(".cursor");
var follower = document.querySelectorAll(".cursor-follower");
const links = document.querySelectorAll("a");
// const links = document.querySelectorAll(".link");

var posX = 0;
var posY = 0;

var mouseX = 0;
var mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

// jquery
// $(document).on("mousemove", function(e) {
//     mouseX = e.pageX;
//     mouseY = e.pageY;
// });

// $(".link").on("mouseenter", function() {
//     cursor.addClass("active");
//     follower.addClass("active");
// });
// $(".link").on("mouseleave", function() {
//     cursor.removeClass("active");
//     follower.removeClass("active");
// });

// tracking
document.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// mouseenter
links.forEach(function(a) {
    addEventListener("mouseenter", function() {
        cursor.addClass("active");
    });
    addEventListener("mouseenter", function() {
        follower.addClass("active");
    });
});

//mouseleave
links.forEach(function(a) {
    addEventListener("mouseleave", function() {
        cursor.removeClass("active");
    });
    addEventListener("mouseleave", function() {
        follower.removeClass("active");
    });
});

// test
links.addEventListener("mouseenter", function() {
    cursor.addClass("active");
});