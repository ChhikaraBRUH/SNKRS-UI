const starContainer = document.querySelector(".rating-container");
const allStars = document.querySelectorAll(".rating-star");
const ratingText = document.querySelector(".rating-text");

// Adding color to stars on hover

allStars.forEach((star, index) => {
	star.addEventListener("mouseover", () => {
		allStars.forEach((star) => {
			star.classList.remove("rating-hover"); // Removes hover class from all stars
		});

		allStars.forEach((star, i) => {
			if (i <= index) {
				star.classList.add("rating-hover"); // Adds hover class to only indexes with less than or equal to current star index
			}
		});
	});
});

// Removing color from stars on mouse leave

starContainer.addEventListener("mouseleave", () => {
	allStars.forEach((star) => {
		star.classList.remove("rating-hover");
	});
});

// Click to add "rating-active" class to stars with indexes less than or equal to current star index

allStars.forEach((star, index) => {
	star.addEventListener("click", (event) => {
		event.stopPropagation();
		allStars.forEach((star) => {
			star.classList.remove("rating-active"); // Remove active class from all stars
			star.classList.remove("rating-hover"); // Remove hover class from all stars
		});

		allStars.forEach((star, i) => {
			if (i <= index) {
				star.classList.add("rating-active"); // Adding active class to stars with less than or equal to clicked index star
			}
		});
		let currentRating = index + 1;
		ratingText.textContent = `Rating: ${currentRating}/5`; // Changing Rating Text on click
	});
});
