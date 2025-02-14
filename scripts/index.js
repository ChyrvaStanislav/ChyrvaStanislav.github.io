/*
{
    "id": 1,
    "characters": [
        "https://ajax.test-danit.com/api/swapi/people/1",
        "https://ajax.test-danit.com/api/swapi/people/2",
        "https://ajax.test-danit.com/api/swapi/people/3",
        "https://ajax.test-danit.com/api/swapi/people/4",
        "https://ajax.test-danit.com/api/swapi/people/5",
        "https://ajax.test-danit.com/api/swapi/people/6",
        "https://ajax.test-danit.com/api/swapi/people/7",
        "https://ajax.test-danit.com/api/swapi/people/8",
        "https://ajax.test-danit.com/api/swapi/people/9",
        "https://ajax.test-danit.com/api/swapi/people/10",
        "https://ajax.test-danit.com/api/swapi/people/12",
        "https://ajax.test-danit.com/api/swapi/people/13",
        "https://ajax.test-danit.com/api/swapi/people/14",
        "https://ajax.test-danit.com/api/swapi/people/15",
        "https://ajax.test-danit.com/api/swapi/people/16",
        "https://ajax.test-danit.com/api/swapi/people/18",
        "https://ajax.test-danit.com/api/swapi/people/19",
        "https://ajax.test-danit.com/api/swapi/people/81"
    ],
    "director": "George Lucas",
    "episodeId": 4,
    "openingCrawl": "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.\r\nDuring the battle, Rebel spies managed to steal secret plans to the Empire`s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.\r\nPursued by the Empire`s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...",
    "planets": [
        "https://ajax.test-danit.com/api/swapi/planets/1",
        "https://ajax.test-danit.com/api/swapi/planets/2",
        "https://ajax.test-danit.com/api/swapi/planets/3"
    ],
    "producer": "Gary Kurtz, Rick McCallum",
    "releaseDate": "1977-05-25",
    "species": [
        "https://ajax.test-danit.com/api/swapi/species/1",
        "https://ajax.test-danit.com/api/swapi/species/2",
        "https://ajax.test-danit.com/api/swapi/species/3",
        "https://ajax.test-danit.com/api/swapi/species/4",
        "https://ajax.test-danit.com/api/swapi/species/5"
    ],
    "starships": [
        "https://ajax.test-danit.com/api/swapi/starships/2",
        "https://ajax.test-danit.com/api/swapi/starships/3",
        "https://ajax.test-danit.com/api/swapi/starships/5",
        "https://ajax.test-danit.com/api/swapi/starships/9",
        "https://ajax.test-danit.com/api/swapi/starships/10",
        "https://ajax.test-danit.com/api/swapi/starships/11",
        "https://ajax.test-danit.com/api/swapi/starships/12",
        "https://ajax.test-danit.com/api/swapi/starships/13"
    ],
    "name": "A New Hope",
    "url": "https://ajax.test-danit.com/api/swapi/films/1",
    "vehicles": [
        "https://ajax.test-danit.com/api/swapi/vehicles/4",
        "https://ajax.test-danit.com/api/swapi/vehicles/6",
        "https://ajax.test-danit.com/api/swapi/vehicles/7",
        "https://ajax.test-danit.com/api/swapi/vehicles/8"
    ]
}

 */

class Film {
    constructor(name, director, releaseDate, openingCrawl) {
        this.name = name;
        this.director = director;
        this.releaseDate = releaseDate;
        this.openingCrawl = openingCrawl;
        this.root = document.createElement('div');
        this.charactersContainer = document.createElement('div');
        this.planetsContainer = document.createElement('div');
        this.starshipsContainer = document.createElement('div');
    }

    getHtmlTemplate() {
        return `
            <h2>${this.name}</h2>
            <p>${this.director}</p>
            <p>${this.releaseDate}</p>
            <p>${this.openingCrawl}</p>
        `
    }

    toggleCollapse({ currentTarget }) {
        if (currentTarget.className.includes('сollapsed')) {
            currentTarget.classList.remove('сollapsed');
        } else {
            currentTarget.classList.add('сollapsed');
        }
    }

    render(selector = 'main') {
        this.root.innerHTML = this.getHtmlTemplate();

        this.root.append(this.charactersContainer);
        this.charactersContainer.innerHTML = '<h3>Characters</h3>';
        this.charactersContainer.addEventListener('click', this.toggleCollapse);
        this.charactersContainer.className = 'items-container сollapsed loading';

        this.root.append(this.planetsContainer);
        this.planetsContainer.innerHTML = '<h3>Planets</h3>';
        this.planetsContainer.addEventListener('click', this.toggleCollapse);
        this.planetsContainer.className = 'items-container сollapsed loading';

        this.root.append(this.starshipsContainer);
        this.starshipsContainer.innerHTML = '<h3>Starships</h3>';
        this.starshipsContainer.addEventListener('click', this.toggleCollapse);
        this.starshipsContainer.className = 'items-container сollapsed loading';

        document.querySelector(selector).appendChild(this.root);
    }

    addCharacter(characterElement) {
        this.charactersContainer.appendChild(characterElement);
        this.charactersContainer.classList.remove('loading');
    }

    addPlanet(planetElement) {
        this.planetsContainer.appendChild(planetElement);
        this.planetsContainer.classList.remove('loading');
    }

    addStarship(starshipElement) {
        this.starshipsContainer.appendChild(starshipElement);
        this.starshipsContainer.classList.remove('loading');
    }
}

class Character {
    constructor(name, gender, hairColor) {
        this.name = name;
        this.gender = gender;
        this.hairColor = hairColor;
        this.root = document.createElement('div');
    }

    getElement() {
        this.root.innerHTML = `
            <h4>${this.name}</h4>
            <p>${this.gender || ''}</p>
            <p>${this.hairColor || ''}</p>
            `;
        this.root.className = 'card';

        return this.root;
    }
};

const Planet = class {
    constructor(name, climate, population) {
        this.name = name;
        this.climate = climate;
        this.population = population;
        this.root = document.createElement('div');
    }

    getElement() {
        this.root.innerHTML = `
            <h4>${this.name}</h4>
            <p>${this.climate || ''}</p>
            <p>${this.population || ''}</p>
            `;
        this.root.className = 'card';

        return this.root;
    }
};

const Starship = class {
    constructor(name, model, manufacturer) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.root = document.createElement('div');
    }

    getElement() {
        this.root.innerHTML = `
            <h4>${this.name}</h4>
            <p>${this.model || ''}</p>
            <p>${this.manufacturer || ''}</p>
            `;
        this.root.className = 'card';

        return this.root;
    }
}

class Loader {
    constructor() {
        this.root = document.createElement('span');
    }

    addToElement(element) {
        this.root.className = 'loader';
        element.appendChild(this.root);
    }

    remove() {
        this.root.remove();
    }
}

axios.get('https://ajax.test-danit.com/api/swapi/films')
.then(({ data  }) => {
    console.log(data);

    data.forEach(film => {
        const filmObject = new Film(film.name, film.director, film.releaseDate, film.openingCrawl);
        filmObject.render();

        const charactersPromises = film.characters.map(characterUrl => axios.get(characterUrl));
        const charactersLoader = new Loader();
        charactersLoader.addToElement(filmObject.charactersContainer);
        Promise.allSettled(charactersPromises)
            .then((characters) => {
                characters.forEach(character => {
                    const characterData = character.value.data;
                    const characterObject = new Character(characterData.name, characterData.gender, characterData.hairColor);
                    filmObject.addCharacter(characterObject.getElement());
                });

                charactersLoader.remove();
            });


        const planetsPromises = film.planets.map(planetUrl => axios.get(planetUrl));
        const planetsLoader = new Loader();
        planetsLoader.addToElement(filmObject.planetsContainer);
        Promise.allSettled(planetsPromises)
            .then((planets) => {
                planets.forEach(planet => {
                    const planetData = planet.value.data;
                    const planetObject = new Planet(planetData.name, planetData.climate, planetData.population);
                    filmObject.addPlanet(planetObject.getElement());
                });

                planetsLoader.remove();
            });


        const starshipsPromises = film.starships.map(starshipUrl => axios.get(starshipUrl));
        const starshipsLoader = new Loader();
        starshipsLoader.addToElement(filmObject.starshipsContainer);
        Promise.allSettled(starshipsPromises)
            .then((starships) => {
                starships.forEach(starship => {
                    const starshipData = starship.value.data;
                    const starshipObject = new Starship(starshipData.name, starshipData.model, starshipData.manufacturer);
                    filmObject.addStarship(starshipObject.getElement());
                });

                starshipsLoader.remove();
            });
    });
})