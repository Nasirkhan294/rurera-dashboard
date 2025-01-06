const toggle = document.querySelector('.navbar-toggler');
const removeToggle = document.querySelector('.fa-times');
const sidebar = document.querySelector('.navbar-nav');
const mainContent = document.querySelector('.main-content');
const mobileNav = document.querySelector('.mobile-nav');


toggle.addEventListener('click', () => {
	sidebar.classList.remove('d-none');
	sidebar.classList.add('tablet-nav');
	mainContent.classList.add('d-none');
	mobileNav.classList.add('d-none');
})

removeToggle.addEventListener('click', () => {
	sidebar.classList.add('d-none');
	sidebar.classList.remove('tablet-nav');
	mainContent.classList.remove('d-none');
	mobileNav.classList.remove('d-none');
});