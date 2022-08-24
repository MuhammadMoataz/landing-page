"use strict";
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const ulEl = document.getElementById("navbar__list");
const sectionEl = document.querySelectorAll('.landing__container');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const make_nav = () => {
	for (let i = 1; i <= sectionEl.length; i++) {
		ulEl.innerHTML += `<li class="navSection"><a href="" class="href-elements">Section ${i}</a></li>`;
	}
}
make_nav();





// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

const checkViewPort = () => {
	let messageText = false;
	for(let i = 0; i < sectionEl.length; i++) {
		messageText = isInViewport(sectionEl[i]);
		if(messageText) {
			sectionEl[i].parentElement.classList.add('your-active-class');
			for (let j = 0; j < sectionEl.length; j++) {
				if (j !== i) sectionEl[j].parentElement.classList.remove('your-active-class');
			}
		}
	}
}

const isInViewport = (element) => {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}



/* Listeners functions */

document.addEventListener("scroll", checkViewPort);

document.addEventListener("mousemove", checkViewPort);


// Scroll to section on link click
const navSectionEl = document.querySelectorAll('.href-elements');
for (let i = 0; i < sectionEl.length; i++) {
	navSectionEl[i].addEventListener('click', function (e){
		e.preventDefault();
		sectionEl[i].scrollIntoView({behavior: "smooth"});
	})
}

// Set sections as active



