

const menu = document.querySelector(".menu_icon")
const navBar = document.querySelector(".navbar")

menu.addEventListener("click", toggleMenu)

function toggleMenu () {
    menu.classList.toggle("open")
    navBar.classList.toggle("nav_open")
    console.log(navBar.className)
}

