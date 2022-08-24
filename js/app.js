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
// const ulEl = document.getElementById("navbar__list");
const sectionEl = document.querySelectorAll('.landing__container');
const addingList = document.createElement('ul');
const navbar = document.querySelector('.navbar__menu');
var length = sectionEl.length;


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
function make_nav() {
	for (let i = 1; i <= sectionEl.length; i++) {
		const liEl = document.createElement('li');
		liEl.innerHTML = `<a href="" class="href-elements">Section ${i}</a>`;
		// ulEl.innerHTML += `<!--<li class="navSection"><a href="" class="href-elements">Section ${i}</a></li>-->`;
		addingList.appendChild(liEl);
	}
	navbar.appendChild(addingList);
}
make_nav();

const navSectionEl = document.querySelectorAll('.href-elements');
console.log(navSectionEl[0]);
for (let i = 0; i < length; i++) {
	addingList.children[i].addEventListener('click', function () {
		sectionEl[i].scrollIntoView();
	})
}




// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

