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
