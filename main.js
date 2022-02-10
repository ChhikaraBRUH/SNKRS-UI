// Navigation Menu Functionality JS

let navMenuBtn = document.getElementById("nav-menu-btn");
let navMenuCloseBtn = document.getElementById("nav-menu-close-btn");
let navMenu = document.querySelector(".nav-menu");
let wrapperDiv = document.querySelector(".wrapper");
let menuOpened = false;

const closeMenu = () => {
	navMenu.style.display = "none";
	wrapperDiv.style.display = "flex";
	menuOpened = false;
};

const openMenu = () => {
	navMenu.style.display = "flex";
	wrapperDiv.style.display = "none";
	menuOpened = true;
};

const menuOpener = () => {
	menuOpened ? closeMenu() : openMenu();
};

navMenuBtn.addEventListener("click", menuOpener);
navMenuCloseBtn.addEventListener("click", menuOpener);
