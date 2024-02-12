/**
 * @return {boolean}
 */
const getRandomChance = ()=> Math.random() < 0.5;

// Далее пример решения студентами fe-30

/** Class representing a point. */
class Animal{
    /**
     * @param animalName {string}
     */
    constructor(animalName) {
        if (animalName.length < 3) {
            throw new Error ('Less than 3 symbols')
        }

        this._animalName = animalName;
        this.container = document.createElement("div");
        this.button = document.createElement("button");
        this.span = document.createElement("span");
        this.x = 0;
    }

    set name(animalName) {
        if (animalName.length >= 3) {
            this._animalName = animalName;
        }
        else {
            throw new Error ('Less than 3 symbols')
        }
    }

    getRandomChance(){
        return Math.random() < 0.5;
    };

    move(){
        this.x += 20;
        this.container.style.transform = `translateX(${this.x}px)`;
    }

    render(selector) {
        this.container.classList.add("animal") ;
        this.span.innerText = this._animalName;
        this.button.innerText = "move";
        this.button.addEventListener("click", this.move.bind(this))
        this.container.append(this.span);
        this.container.append(this.button);

        document.querySelector(selector).append(this.container);

    }

}


class Dog extends Animal {
    render(selector) {
        super.render(selector);
        this.container.classList.add("dog");
    }
    say(){
        this.container.classList.add("dog-say");
        setTimeout(()=>{
            this.container.classList.remove("dog-say");
        }, 200)
    }
    move(){
        super.move();
        if (this.getRandomChance()){
            super.move();
            this.say();
        }
    }
}
class Cat extends Animal {
    render(selector) {
        super.render(selector);
        this.container.classList.add("cat");
    }
    say(){
        this.container.classList.add("cat-say");
        setTimeout(()=>{
            this.container.classList.remove("cat-say");
        }, 200)
    }
    move(){
        if (this.getRandomChance()){
            this.say();
            return;
        }
        super.move();
    }
}

class Snake extends Animal {
    constructor(animalName, type) {
        super(animalName);
        if (type !== "poison" && type !== "safe") {
            throw new Error('Bad snake')
        }
        this.type = type;
    }

    render(selector) {
        super.render(selector);
        this.container.classList.add("snake");
    }

    move() {
        this.x -= 15;
        super.move();

        if (this.getRandomChance()) {
            alert("Sssssssssssssssssss!!!");
            console.log('this.type', this.type);
            if (this.type === "poison") {
                document.querySelectorAll(".cat").forEach(elem => {
                    elem.remove();
                });

                document.querySelectorAll(".dog").forEach(elem => {
                    elem.remove();
                });
            }
        }
    }
}

new Dog("Rex").render(".container");
new Cat("Summer").render(".container");
new Snake("Bred", "safe").render(".container")
new Snake("Poison", "poison").render(".container");

