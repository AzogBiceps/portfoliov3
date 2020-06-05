var cursor = document.querySelector(".cursor");
var follower = document.querySelector(".cursor-follower");
var links = document.querySelectorAll("a");

var posX = 0;
var posY = 0;

var mouseX = 0;
var mouseY = 0;

// Migrate to gsap one day
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

// tracking
document.addEventListener("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// mouseenter
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseenter", function() {
    cursor.classList.add("active");
    follower.classList.add("active");
  });
};

// mouseleave
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseleave", function() {
    cursor.classList.remove("active");
    follower.classList.remove("active");
  });
};