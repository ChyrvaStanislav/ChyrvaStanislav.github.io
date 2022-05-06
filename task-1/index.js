const spaceShip = document.querySelector('#space-ship');

let x = 0;
let y = 0;
const step = 10;

const handleKeyDown = event => {
	switch (event.key) {
		case 'ArrowUp': {
			y-= step;
			spaceShip.style.cssText = `transform: translate(${x}px, ${y}px) rotate(0)`;
			break;
		}

		case 'ArrowRight': {
			x+= step;
			spaceShip.style.cssText = `transform: translate(${x}px, ${y}px) rotate(90deg)`;
			break;
		}

		case 'ArrowDown': {
			y+= step;
			spaceShip.style.cssText = `transform: translate(${x}px, ${y}px) rotate(180deg)`;
			break;
		}

		case 'ArrowLeft': {
			x-= step;
			spaceShip.style.transform = `translate(${x}px, ${y}px) rotate(270deg)`;
		}
	}
}

window.addEventListener('keydown', handleKeyDown)