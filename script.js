// var container = document.getElementById("right");
// var circle = document.querySelector(".cursor");

// TweenMax.set(".right", {
//   backgroundColor: function() {
//     return Math.random() * 0xffffff;
//   }
// });

// TweenMax.set(circle, { scale: 0, xPercent: -50, yPercent: -50 });

// container.addEventListener("pointerenter", function(e) {
//   TweenMax.to(circle, 0.3, { scale: 1, opacity: 1 });
//   positionCircle(e);
// });

// container.addEventListener("pointerleave", function(e) {
//   TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
//   positionCircle(e);
// });

// container.addEventListener("pointermove", function(e) {
//   positionCircle(e);
// });

// function positionCircle(e) {
//   var rect = container.getBoundingClientRect();  
//   var relX = e.pageX - container.offsetLeft;
//   var relY = e.pageY - container.offsetTop;

//   TweenMax.to(circle, 0.3, { x: relX, y: relY });
// }

// var cursor = document.querySelector(".cursor");
// document.addEventListener('mousemove', function(e) {
//   var x = e.clientX;
//   var y = e.clientY;

//   cursor.style.left = x + "px";
//   cursor.style.top = y + "px";
// })



// var container = document.querySelector(".hire");
// var circle = document.querySelector(".cursor");

// TweenMax.set(".hire", {
//   backgroundColor: function() {
//     return Math.random() * 0xffffff;
//   }
// });

// TweenMax.set(circle, { scale: 0, xPercent: -50, yPercent: -50 });

// container.addEventListener("pointerenter", function(e) {
//   TweenMax.to(circle, 0.3, { scale: 1, opacity: 1 });
//   positionCircle(e);
// });

// container.addEventListener("pointerleave", function(e) {
//   TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
//   positionCircle(e);
// });

// container.addEventListener("pointermove", function(e) {
//   positionCircle(e);
// });

// function positionCircle(e) {
//   var rect = container.getBoundingClientRect();  
//   var relX = e.pageX - container.offsetLeft;
//   var relY = e.pageY - container.offsetTop;

//   TweenMax.to(circle, 0.3, { x: relX, y: relY });
// }






// console.clear()
// var parent1 = document.querySelector('.left')
// var parent2 = document.querySelector('.mid')
// var displays

// TweenLite.set([parent1, parent2], {
//   scale: 1
// })


// function onMouseMove( e ) {
    
//     // this refers to the caller
//     // console.log(this)
    
//     var rect = this.getBoundingClientRect()
    
//     // Find its child
//    var follower = this.querySelector('.cursor')
    
//     TweenMax.to(follower, 0.3, {
//         x: e.offsetX,
//         y: e.offsetY,
//         ease:Power4.easeOut
//     })
    
//     // displays.pX.textContent = e.pageX
//     // displays.pY.textContent = e.pageY
    
//     displays.cX.textContent = Math.round(e.clientX - rect.left)
//     displays.cY.textContent = Math.round(e.clientY - rect.top)
    
//     displays.oX.textContent = e.offsetX
//     displays.oY.textContent = e.offsetY
    

// }


// function init() {

//     // Listen for mouse movement when over either one of the parents
//     parent1.addEventListener('mousemove', onMouseMove)
//     parent2.addEventListener('mousemove', onMouseMove)

// };


// // wait until DOM is ready
// document.addEventListener("DOMContentLoaded", function(event) {
    
//     // wait until window, stylesheets, images, links, and other media assets are loaded
//     window.onload = function() {
        
//         displays = {
//             // pX: document.querySelector('.pageX'),
//             // pY: document.querySelector('.pageY'),

//             cX: document.querySelector('.clientX'),
//             cY: document.querySelector('.clientY'),

//             oX: document.querySelector('.offsetX'),
//             oY: document.querySelector('.offsetY'),
//         }
                
//         // Center the pivot point of the follower
//         TweenMax.set('.cursor', {
//             xPercent: -50,
//             yPercent: -50
//         })

//         // All ready, start!
//         init();

//      };

// });




// var $cursor = $('.cursor');

// function moveCursor(e) {
//   $cursor.addClass('is-moving');
//   $cursor.css({"top": e.pageY, "left": e.pageX});

//   clearTimeout(timer2);

//    var timer2 = setTimeout(function() {
//        $cursor.removeClass('is-moving');
//    }, 300);
// }

// $(window).on('mousemove', moveCursor);





document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".cursor");
    var links = document.querySelectorAll("a, h2, h3, p");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
  });
  







  $(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    var scroll = $window.scrollTop() + ($window.height() / 2);
   
    $panel.each(function () {
      var $this = $(this);
      
  
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();





  gsap.from('.section', {y: 5, duration:1, opacity: 0, ease: Power1.slow }, 'Start' );
