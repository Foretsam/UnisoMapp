// Script que aparecera em todas as páginas, modifique com cuidado!!! (Schuab)
// Script menu desktop (Schuab)
const sidebarDesktop = document.querySelector('.menuDesktop-sidebar');
const toggleBtnDesktop = document.querySelector('.menuDesktop-toggle-btn');

toggleBtnDesktop.addEventListener('click', () =>{
    sidebarDesktop.classList.toggle('menuDesktop-active');
});
// Script menu desktop (Schuab)
// Script menu mobile (Schuab)
const sidebarMobile = document.querySelector('.menuMobile-sidebar');
const toggleBtnMobile = document.querySelector('.menuMobile-toggle-btn');

toggleBtnMobile.addEventListener('click', () =>{
    sidebarMobile.classList.toggle('menuMobile-active');
});
// Script menu mobile (Schuab)