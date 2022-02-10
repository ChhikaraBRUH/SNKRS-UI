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

// Modal Functionality JS

let modalOpenBtn = document.querySelector(".modal-open-btn");
let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let modalCloseBtn = document.getElementById("modal-close-btn");

const openModal = () => (modalContainer.style.display = "flex");
const closeModal = () => (modalContainer.style.display = "none");

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
	e.stopPropagation();
});
modalContainer.addEventListener("click", closeModal);
