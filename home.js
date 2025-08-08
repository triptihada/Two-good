// const scroll=new LocomotiveScroll({
//     el:document.querySelector('#main'),
//     smooth:true
// });

function locomotiveAnimations(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimations()


function navbarAnimation(){
gsap.to("#nav1 svg",{
  // transform:"translateY(-100%)",
  y: "-100%",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    start:"top 0",
    end:"top -5%",
    scrub:true
  }
})
gsap.to("#nav2 #links",{
  // transform:"translateY(-100%)",
  y: "-100%",
  opacity:0,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // markers:true,
    start:"top 0",
    end:"top -5%",
    scrub:true
  }
})
}

navbarAnimation()
function videoconAnimation(){

let videocon=document.querySelector('#video-container')
let play=document.querySelector("#play")
let isInside=false
videocon.addEventListener("mouseenter",function(){
    // play.style.opacity=1
    // play.style.scale=1 
    isInside=true
    gsap.to(play,{
        scale:1,
        opacity:1,
        duration: 0.3,
      ease: "power2.out"
    })
})
videocon.addEventListener("mouseleave",function(){
    // play.style.opacity=1
    // play.style.scale=1 
    isInside=false;
    gsap.to(play,{
        scale:0,
        opacity:0,
        duration: 0.3,
      ease: "power2.out"
    })
})
videocon.addEventListener("mousemove",function(e){
    // play.style.opacity=1
    // play.style.scale=1 
    if(isInside){
    gsap.to(play,{
        left:e.x-50,
        top:e.y-120,
        duration: 0.3,
      ease: "power2.out"
    
    })
}
})

// window.addEventListener('scroll',function(){
//     const rect=videocon.getBoundingClientRect()
//     const insidViewport=
//      rect.top<=this.window.innerHeight ||
//       rect.bottom>=0||
//       rect.left<=this.window.innerWidth ||
//       rect.right>=0

//       if(!insidViewport || isInside){
//          isInside=false
//          gsap.to(play,{
//              sacle:0,
//              opacity:0
//          }
         

         
//           )
//       }
   
      
//  })

} 
videoconAnimation()

function loadinganimation(){
gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.5
})
}
loadinganimation()


// JS (Corrected)
// Move the cursor
function cursorAnimationpage3(){
document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.clientX,
    top: dets.clientY,
    duration: 0.3,
    ease: "power2.out"
  });
});

// Show/hide the cursor on all children
document.querySelectorAll(".child").forEach(function (child) {
  child.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  child.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(0)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

}
cursorAnimationpage3()




