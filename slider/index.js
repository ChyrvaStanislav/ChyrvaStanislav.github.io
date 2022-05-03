const beacon = [
    'https://baconmockup.com/600/300/',
    'https://baconmockup.com/600/301/',
    'https://baconmockup.com/600/302/',
    'https://baconmockup.com/600/303/',
    'https://baconmockup.com/600/299/',
]

const bear = [
    'https://placebear.com/600/303',
    'https://placebear.com/600/302',
    'https://placebear.com/600/301',
    'https://placebear.com/600/300',
    'https://placebear.com/600/299',
    'https://placebear.com/600/298',
    'https://placebear.com/600/297',
    'https://placebear.com/600/296',
    'https://placebear.com/600/295',
]

const categories = {
    beacon,
    bear,
}

let counter = 0;
let currentPictures = 'beacon';
const imgHolder = document.querySelector('.image-holder');
const sliderButtonCollection = document.querySelectorAll('.button-container button');
const categoryButtonCollection = document.querySelectorAll('.category-container button');
const bulletContainer = document.querySelector('.bullet-container');
const counterSpan = document.querySelector('.counter-container span');

const setImage = () => {
    imgHolder.style.backgroundImage = `url("${categories[currentPictures][counter]}")`;
}

const setCounter = () => {
    counterSpan.innerHTML = `${counter + 1}/${categories[currentPictures].length}`;
}

const createBullets = () => {
    categories[currentPictures].forEach((_, index) => {
        const bullet = document.createElement('span');
        bullet.className = 'bullet';
        if (index === 0) {
            bullet.classList.add('bullet-active');
        }
        bullet.setAttribute('data-image', index.toString());
        bullet.addEventListener('click', handleBulletClick);
        bulletContainer.append(bullet);
    })
}

const setActiveBullet = () => {
    bulletContainer.querySelectorAll('span').forEach(bullet => {
        if (bullet.className.includes('active')) {
            bullet.classList.remove('bullet-active');
        }

        if (bullet.dataset.image === counter.toString()) {
            bullet.classList.add('bullet-active');
        }
    })

}

const nextImages = () => {
    if (counter >= categories[currentPictures].length - 1) {
        counter = 0;
        setImage();
        setCounter();
        setActiveBullet();
        return;
    }

    counter++;
    setImage();
    setCounter();
    setActiveBullet();
}

const prevImages = () => {
    if (counter <= 0) {
        counter = categories[currentPictures].length - 1;
        setImage();
        setCounter();
        setActiveBullet();
        return;
    }

    counter--;
    setImage();
    setCounter();
    setActiveBullet();
}

const handleBulletClick = (event) => {
    counter = +event.target.dataset.image;
    setImage();
    setCounter();
    setActiveBullet();
}

const changeCategory = (event) => {
    counter = 0;
    currentPictures = event.target.dataset.category;
    setImage();
    setCounter();
    bulletContainer.innerHTML = "";
    createBullets();
}

const addListeners = () => {
    sliderButtonCollection[0].addEventListener('click', prevImages);
    sliderButtonCollection[1].addEventListener('click', nextImages);
    categoryButtonCollection.forEach(button => {
        button.addEventListener('click', changeCategory);
    });
}

const start = () => {
    addListeners();
    createBullets();
    setCounter();
}

start();

