var cursor = document.querySelector(".cursor");
var follower = document.querySelector(".cursor-follower");
var links = document.querySelectorAll("a");
// const link = document.querySelector("a");
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

// // mouseenter
// links.forEach(function(a) {
//     a.addEventListener("mouseenter", function() {
//         cursor.classList.add("active");
//     });
//     a.addEventListener("mouseleave", function() {
//         cursor.classList.remove("active");
//     });
// });

// //mouseleave
// links.forEach(function(a) {
//     a.addEventListener("mouseenter", function() {
//         follower.classList.add("active");
//     });
//     a.addEventListener("mouseleave", function() {
//         follower.classList.remove("active");
//     });
// });

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseenter", function() {
    cursor.classList.add("active");
    follower.classList.add("active");
  });
};

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseleave", function() {
    cursor.classList.remove("active");
    follower.classList.remove("active");
  });
};


