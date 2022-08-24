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
const addingList = document.createElement('ul');
const navbar = document.querySelector('.navbar__menu');


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
		// const liEl = document.createElement('li');
		// liEl.innerHTML = `<a href="" class="href-elements">Section ${i}</a>`;
		ulEl.innerHTML += `<li class="navSection"><a href="" class="href-elements">Section ${i}</a></li>`;
		// addingList.appendChild(liEl);
	}
	// navbar.appendChild(addingList);
}
make_nav();

const navSectionEl = document.querySelectorAll('.href-elements');
console.log(navSectionEl[0]);
for (let i = 0; i < sectionEl.length; i++) {
	// addingList.children[i].addEventListener('click', function (e) {
	navSectionEl[i].addEventListener('click', function (e){
		e.preventDefault();
		sectionEl[i].scrollIntoView({behavior: "smooth"});
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

const checkViewPort = () => {
	let messageText = false;
	for(let i = 0; i < length ; i++)
	{
		// check if the section in on focus
		messageText = isInViewport(sectionEl[i]);
		if(messageText)
		{
			sectionEl[i].parentElement.classList.add('your-active-class');
			if(i != 0){sectionEl[i-1].parentElement.classList.remove('your-active-class');}
		}
	}
}

const isInViewport = (el) => {
	const rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// getting view port to work
document.addEventListener("scroll", checkViewPort);
document.addEventListener("mousemove", checkViewPort);
