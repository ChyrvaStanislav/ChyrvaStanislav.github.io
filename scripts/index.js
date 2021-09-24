/**
 * @return {boolean}
 */
const getRandomChance = ()=> Math.random() < 0.5;


class Animal {
    /**
     * @param name {string}
     */
    constructor(name) {
        if (typeof name !== 'string') throw new Error('Name should be a string');
        if (name.length < 3) throw new Error('Name should include min 3 characters');
        this._name = name;
        this.x = 0;
        this.animalElement = document.createElement('div');
        this.moveButton = document.createElement('button');
    }

    set name(name){
        if (typeof name !== 'string') throw new Error('Name should be a string');
        if (name.length < 3) throw new Error('Name should include min 3 characters');
        this._name = name;
    }

    get name(){
        return this._name;
    }

    getRandomChance() {
        return Math.random() < 0.5;
    }

    move(){
        this.x += 20;
        this.animalElement.style.transform = `translateX(${this.x}px)`;
    }

    render(selector){
        this.animalElement.classList.add('animal');
        this.animalElement.innerHTML = `<span class="name">${this._name}</span>`;
        this.moveButton.innerHTML = 'Move';
        this.moveButton.addEventListener('click', this.move.bind(this));
        this.animalElement.append(this.moveButton);
        document.querySelector(selector).append(this.animalElement);
    }
}

class Dog extends Animal {
    /**
     * @param name {string}
     */
    constructor(name) {
        super(name);
    }

    render(selector){
        super.render(selector);
        this.animalElement.classList.add('dog');
    }

    say(){
        this.animalElement.classList.add('dog-say');
        setTimeout(() => {
            this.animalElement.classList.remove('dog-say');
        }, 200);
    }

    move(){
        super.move();
        if (this.getRandomChance()) {
            super.move();
            this.say();
        }
    }
}

class Cat extends Animal {
    /**
     * @param name {string}
     */
    constructor(name) {
        super(name);
    }

    render(selector){
        super.render(selector);
        this.animalElement.classList.add('cat');
    }

    say(){
        this.animalElement.classList.add('cat-say');
        setTimeout(() => {
            this.animalElement.classList.remove('cat-say');
        }, 200)
    }

    move(){
        if (this.getRandomChance()) {
            super.move();
        } else {
            this.say();
        }
    }
}

class Snake extends Animal {
    /**
     * @param name {string}
     * @param type {'poison'|'safe'}
     */
    constructor(name, type = 'safe') {
        super(name);
        if (type !== 'poison' && type !== 'safe') throw new Error('Type of snake should be one of "poison" or "safe" ');
        this._type = type;
    }

    get type(){
        return this._type;
    }

    render(selector){
        super.render(selector);
        this.animalElement.classList.add('snake');
    }

    move(){
        this.x -= 15;
        super.move();
        if (this.getRandomChance()) {
            alert('Sssssssssssssssssssss!!!')
            if (this._type === 'poison') {
                document.querySelectorAll('.dog').forEach(elem => {
                    elem.remove();
                })

                document.querySelectorAll('.cat').forEach(elem => {
                    elem.remove();
                })
            }
        }
    }
}


const dog = new Dog('Bob');
const cat = new Cat('Cat');
const snake = new Snake('Poison Simon', 'poison');
const snake2 = new Snake('Safe Simon');

dog.render('.container');
cat.render('.container');
snake.render('.container');
snake2.render('.container');
