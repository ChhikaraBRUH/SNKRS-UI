// Snackbar Functionality JS

let snackbarOpenBtn = document.querySelector(".snackbar-open-btn");
let snackbar = document.querySelector(".snackbar-container");
let snackbarCloseBtn = document.querySelector("#snackbar-close-btn");

const closeSnackbar = () => (snackbar.style.display = "none");
const openSnackbar = () => {
	snackbar.style.display = "flex";
	setTimeout(closeSnackbar, 3000);
};

snackbarOpenBtn.addEventListener("click", openSnackbar);
snackbarCloseBtn.addEventListener("click", closeSnackbar);
