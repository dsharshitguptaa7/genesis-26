if(typeof AOS !== "undefined"){
    AOS.init({
        duration: 800,
        once: true
    });
}

// ===========================
// Preloader Handler
// ===========================

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader && !loader.classList.contains("hide")) {
        loader.classList.add("hide");
        setTimeout(() => {
            loader.style.display = "none";
        }, 550);
    }
}

// Trigger hide on load or DOM ready
if (document.readyState === "complete") {
    setTimeout(hideLoader, 600);
} else {
    window.addEventListener("load", () => {
        setTimeout(hideLoader, 800);
    });
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(hideLoader, 1400);
    });
}

// Guaranteed maximum safety fallback: dismiss loader after at most 2s
setTimeout(hideLoader, 2000);

// Mouse Glow

const glow = document.querySelector(".cursor-glow");

if(glow){
    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });
}

// Countdown

const eventDate = new Date("2026-09-08T00:00:00").getTime();

function updateCountdown(){

    const now = Date.now();

    const gap = eventDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if(!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if(gap <= 0){
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();

setInterval(updateCountdown,1000);

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