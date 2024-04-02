const introContainer = $(".intro");
const letter = $(".intro .logo .letter");
const logo = $(".intro .logo");
const smallLogo = $(".upper-nav .logo");
const navbar = $(".navbar");
const lowerNav = $(".lower-nav");
const heroUpper = $(".hero-upper");
const heroLower = $(".hero-lower");
const heroHeaderOne = $(".hero-header-one");
const heroHeaderTwo = $(".hero-header-two");
const downUp = $(".down-up");
const downDown = $(".down-down");
const body = $("body");

// register css plugin
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

console.log(gsap);
console.log(ScrollTrigger);

// intro anim
const introAnim = () => {
    const tl = gsap.timeline();
    tl.fromTo(introContainer, {
        scale: 0.9,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1
    })
    .fromTo(letter, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.5, 
        ease: "power2.out"
    })
    .to(logo, {
        y: -500,
        opacity: 0,
        ease: "power2.out"
    })
    .to(introContainer, {
        opacity: 0,
        zIndex: 0,
        onComplete: function() {
            revealAnim();
        }
    })
}

const revealAnim = () => {
    const tl = gsap.timeline();
    tl.to(navbar, {
        opacity: 1
    })
    .to(heroLower, {
        opacity: 1
    })
    .to(heroUpper, {
        opacity: 1
    }, "=-0.5")
    .fromTo(heroHeaderOne, {
        opacity: 0,
        x: 200
    }, { x: 0, opacity: 1 }, "=-0.1")
    .fromTo(heroHeaderTwo, {
        opacity: 0,
        x: -200
    }, { x: 0, opacity: 1 }, "=-0.1");
}

// nav bar open
$(".open").click(function() {
    const tl = gsap.timeline();
    tl.to(lowerNav, {
        x: 0
    })
    .fromTo($(".nav-link"), {
        opacity: 0,
        y: -100,
        ease: "elastic.out"
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.4
    }, "=-0.75");
});
// nav bar close
$(".close").click(function() {
    const tl = gsap.timeline();
    tl
    .fromTo($(".nav-link"), {
        opacity: 1,
        y: 0,
    }, {
        stagger: 0.4,
        opacity: 0,
        y: -100
    }, "=-0.75")
    .to(lowerNav, {
        x: -750,
        ease: "elastic.out"
    });
});



// gsap.to(lowerNav, {
//     y: -120,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: body, // Use the container as the trigger
//       start: "top top", // Trigger animation when the top of the container reaches the top of the viewport
//       end: "bottom bottom", // Trigger animation when the top of the container reaches the top of the viewport
//       scrub: true,
//     //   markers: true, // Show debug markers on the screen
//       reverse: true
//     }
//   });

// gsap.to(smallLogo, {
//   x: -650,
//   scrollTrigger: {
//     trigger: body, // Use the container as the trigger
//     start: "60% 50%", // Trigger animation when the top of the container reaches the top of the viewport
//     end: "bottom bottom", // Trigger animation when the top of the container reaches the top of the viewport
//     scrub: true,
//     // markers: true, // Show debug markers on the screen
//     reverse: true
//   }
// }); 

introAnim();
