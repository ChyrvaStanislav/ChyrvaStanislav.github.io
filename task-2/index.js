const header = document.querySelector('.header');
const scrollToTopBtn = document.querySelector('#scroll-to-top');

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}

scrollToTopBtn.addEventListener('click', scrollToTop)

const addShadowToHeaderOnScroll = () => {
	if (window.scrollY > 200) {
		header.classList.add('shadow');
	} else {
		header.classList.remove('shadow');
	}
}

const showAndHideScrollToTopOnScroll = () => {
	if (window.scrollY > 1200) {
		scrollToTopBtn.style.display = 'flex';
	} else {
		scrollToTopBtn.style.display = 'none';
	}
}

const handleScroll = () => {
	addShadowToHeaderOnScroll();
	showAndHideScrollToTopOnScroll();
}

window.addEventListener('scroll', handleScroll, { passive: true });