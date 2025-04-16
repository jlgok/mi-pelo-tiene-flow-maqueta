const navElement = document.querySelector(".navbar");
const navContaner = document.getElementById("navContainer");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navElement.classList.add("c-navbar-scrolled");
        navContainer.classList.remove("py-2");
    } else if (window.scrollY < 56) {
        navElement.classList.remove("c-navbar-scrolled");
        navContainer.classList.add("py-2");
    }
});