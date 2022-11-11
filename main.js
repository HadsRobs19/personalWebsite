var slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

showSlides(1);

function plusSlides(n) {
	clearTimeout(showSlides);
	showSlides((slideIndex += n));

	for (i = 0; i < dots.length; i++) {
		if (i == n) {
			dots[i].className += " active";
		} else {
			dots[i].className = dots[i].className.replace("active", "");
		}
	}
}
function currentSlide(n) {
	clearTimeout(showSlides);
	showSlides((slideIndex = n));
}
function showSlides(n) {
	let i;

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

//showSlides();

// function showSlides() {
// 	let i;
// 	let slides = document.getElementsByClassName("mySlides");
// 	console.log(slides);
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 		console.log(slides[i]);
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {
// 		slideIndex = 1;
// 	}
// 	// console.log(slides[0], slideIndex - 1);
// 	slides[slideIndex - 1].style.display = "block";
// 	setTimeout(showSlides, 2000);
// }
