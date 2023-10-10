const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const items = document.querySelectorAll('.banner-img');
const dots = document.querySelectorAll('.dot')
const nbSlide = items.length;
let tagLine = document.querySelector('#tagline');
const next = document.querySelector('.arrow_right');
const previous = document.querySelector('.arrow_left');
let count = 0;

dots.forEach((button, i) => {
	button.addEventListener("click", () => {
		// déselectionne les éléments
		items.forEach((item) =>
			item.classList.remove("active")
		);
		dots.forEach((button) =>
			button.classList.remove("dot_selected")
		);

		items[i].classList.add("active");
		button.classList.add("dot_selected");
	});
});

// sélectionne le premier élément au chargement de la page
items[0].classList.add("active");
dots[0].classList.add("dot_selected");



function nextSlide(){
	items[count].classList.remove('active');
	dots[count].classList.remove('dot_selected');
	if(count < nbSlide - 1){
			count++;
	} else {
			count = 0;
	}

	items[count].classList.add('active');
	dots[count].classList.add('dot_selected');
	document.querySelector('#tagline').innerHTML = slides[count].tagLine;
	//console.log(count);
}
next.addEventListener('click', nextSlide)

function prevSlide(){
	items[count].classList.remove('active');
	dots[count].classList.remove('dot_selected');
	if(count > 0){
			count--;
	} else {
			count = nbSlide - 1;
	}

	items[count].classList.add('active');
	dots[count].classList.add('dot_selected');
	document.querySelector('#tagline').innerHTML = slides[count].tagLine;
	// console.log(count);
	
}
previous.addEventListener('click', prevSlide)

function keyPress(e){
	//console.log(e);
	
	if(e.keyCode === 37){
		prevSlide();
	} else if(e.keyCode === 39){
			nextSlide();
	}
}
document.addEventListener('keydown', keyPress)