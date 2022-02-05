let navMenuBtn = document.getElementById("nav-menu-btn");

let navMenuCloseBtn = document.getElementById("nav-menu-close-btn");

let navMenu = document.querySelector(".nav-menu");

let wrapperDiv = document.querySelector(".wrapper");

let menuOpened = false;

let closeMenu = () => {
	navMenu.style.display = "none";
	wrapperDiv.style.display = "flex";
	menuOpened = false;
};

let openMenu = () => {
	navMenu.style.display = "flex";
	wrapperDiv.style.display = "none";
	menuOpened = true;
};

let menuOpener = () => {
	menuOpened ? closeMenu() : openMenu();
};

navMenuBtn.addEventListener("click", menuOpener);

navMenuCloseBtn.addEventListener("click", menuOpener);
