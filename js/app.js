"use strict";

const ulEl = document.getElementById("navbar__list");
const sectionEl = document.querySelectorAll(".landing__container");
const sections = document.getElementsByTagName("section");
const frag = document.createDocumentFragment();
const listElements = [];
const navBar = document.getElementById("navbar__list");

const make_nav = () => {
	for (let i = 1; i <= sectionEl.length; i++) {
		const li = document.createElement("li");
		const temp = `<li class="navSection"><a href="#section${i}" class="href-elements">Section ${i}</a></li>`;
		ulEl.innerHTML += temp;

		listElements.push(temp);
	}
};
make_nav();
const navSectionEl = document.querySelectorAll(".href-elements");

const observingSections = () => {
	const observer = new IntersectionObserver(
		function (entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("your-active-class");
					navSectionEl[entry.target.id[7] - 1].classList.add("active");
				} else {
					entry.target.classList.remove("your-active-class");
					navSectionEl[entry.target.id[7] - 1].classList.remove("active");
				}
			});
		},
		// options //
		{
			threshold: 0.7,
		}
	);
	return document.querySelectorAll("section").forEach((section) => {
		observer.observe(section);
	});
};

for (let i = 0; i < 5; i++) observingSections();

// Scroll to section on link click
for (let i = 0; i < sectionEl.length; i++) {
	navSectionEl[i].addEventListener("click", function (e) {
		e.preventDefault();
		sectionEl[i].scrollIntoView({ behavior: "smooth" });
	});
}

// Set sections as active
