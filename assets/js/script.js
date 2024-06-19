//responsive
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});


//scroll to top


//navigatio
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop -50;
        let id= current.getAttribute("id");

        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


//Dark/Light
const themeBtn = document.querySelector(".btn-swich");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun": "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-Icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


//service section

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".leran-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});




//portifolio-modal
const portifolioModals = document.querySelectorAll(".porfolio-model");
const imgCard = document.querySelectorAll(".img-card");
const portifolioCloseBtns = document.querySelectorAll(".portifolio-close-btn");

var portifolioModal = function(modalClick){
    portifolioModals[modalClick].classList.add("active");
}

imgCard.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portifolioModal(i);
    });
});

portifolioCloseBtns.forEach((portifolioCloseBtn) => {
    portifolioCloseBtn.addEventListener("click", () => {
        portifolioModals.forEach((portifolioModalView) => {
            portifolioModalView.classList.remove("active");
        });
    });
});


//swiper port
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //animation
  //commom
  ScrollReveal({
    reset: true,
    distance:'60px',
    duration:2500,
    delay: 100
});

//specify 
ScrollReveal().reveal('.hero .hero-subtitle',{ delay: 300, origin:'top' });
ScrollReveal().reveal('.hero h1, .section-title-01, .section-title-02',{ delay: 500, origin:'left' });
ScrollReveal().reveal('.hero  .hero-text, .about-info',{ delay: 600, origin:'right' });
ScrollReveal().reveal('.media-icons i, .contact-left li',{ delay: 500, origin:'right', interval: 200 });
ScrollReveal().reveal('.hero  .btn',{ delay: 600, origin:'bottom' });
ScrollReveal().reveal('.hero-banner, .about-img, .image-stack',{ delay: 500, origin:'bottom' });
ScrollReveal().reveal('.about .description, .contact-right',{ delay: 600, origin:'right' });
ScrollReveal().reveal('.service-card, .features-info',{ delay: 700, origin:'left' });
ScrollReveal().reveal('.services-description, .contact-card, .contact-left h2',{ delay: 700, origin:'left' });
ScrollReveal().reveal('.service-card, .portifolio .img-card',{ delay: 800, origin:'bottom', interval: 200 });
ScrollReveal().reveal('footer .group',{ delay: 500, origin:'top', interval: 200 });

