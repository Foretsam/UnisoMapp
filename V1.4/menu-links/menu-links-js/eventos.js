// Todo o script especifico dessa página (Schuab)
// Script do sistema de swiper (Schuab)
//START - botão do veja no mapa funcional
btn_verNoMapaIA = document.getElementById("verNoMapaIA").onclick = () => {

    localStorage.setItem("verNoMapaLat", '-23.5006912575045');
    localStorage.setItem("verNoMapaLng", '-47.39876188973549');
    window.location.assign("../index.html");
};
//pinto
//END

var swiper = new Swiper(".eventos-slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },

    },
});
// popup script
const openButtons = document.querySelectorAll('.eventos-open-btn');
const closeButtons = document.querySelectorAll('.eventos-close');
const popups = document.querySelectorAll('.eventos-popup');

openButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup');
        popups.forEach((popup) => {
            if (popup.id === popupId) {
                popup.style.display = 'block';
            } else {
                popup.style.display = 'none';
            }
        });
    });
});

closeButtons.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        popups.forEach((popup) => {
            popup.style.display = 'none';
        });
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('eventos-popup')) {
        popups.forEach((popup) => {
            popup.style.display = 'none';
        });
    }
});

function redirecionar() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador.html';
}