AOS.init();

// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 1800);

});

// Mouse Glow

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// Countdown

const eventDate = new Date("2026-09-15T10:00:00").getTime();

function updateCountdown(){

    const now = Date.now();

    const gap = eventDate - now;

    if(gap <= 0) return;

    const days = Math.floor(gap / (1000*60*60*24));
    const hours = Math.floor((gap % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((gap % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((gap % (1000*60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown,1000);

// Hero Animation

gsap.from(".hero h1",{

    y:80,

    opacity:0,

    duration:1.2,

    delay:.5

});

gsap.from(".hero p",{

    y:40,

    opacity:0,

    duration:1,

    delay:.8

});

gsap.from(".countdown div",{

    y:50,

    opacity:0,

    stagger:.15,

    duration:1,

    delay:1

});

// ===========================
// Mobile Navigation
// ===========================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(mobileMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close menu when a link is clicked

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});
