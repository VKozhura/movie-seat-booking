const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seats:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = parseInt(movieSelect.value);

//update total and count
function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll(".row .seat.selected");
	const selectedSeatsCount = selectedSeats.length;
	count.textContent = selectedSeatsCount;
	total.textContent = selectedSeatsCount * ticketPrice;
}

container.addEventListener("click", (e) => {
	if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
		e.target.classList.toggle("selected");
		updateSelectedCount();
	}
});
