const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-large-line");
    if(isOpen){
        navLinks.classList.add("close");
        navLinks.addEventListener(
            "animationend", (e) => {
                navLinks.classList.remove("open");
                navLinks.classList.remove("close");
            },
            { once: true} 
        );
    }else{
        navLinks.classList.add("open");
    }
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-content .content-cta-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header-content .content-cta-btn", {
    ...scrollRevealOption,
    delay: 1500,
});


ScrollReveal().reveal(".about-image", {
    ...scrollRevealOption,
    origin: "top",
});

ScrollReveal().reveal(".about-content .section-subheader", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".about-content .section-header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about-content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about-content .about-btn", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});


ScrollReveal().reveal(".collection-image-1", {
    ...scrollRevealOption,
    origin: "top",
});

ScrollReveal().reveal(".collection-image-2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".collection-content .section-subheader", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
});

ScrollReveal().reveal(".collection-content .section-header", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".collection-content p", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".collection-btn", {
    ...scrollRevealOption,
    delay: 2500,
});




