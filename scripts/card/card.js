export class Card {
    constructor(editFunction, deleteFunction) {
        this._editFunction = editFunction;
        this._deleteFunction = deleteFunction;

        this._mainContainer = document.createElement('div');
        this._editButton = document.createElement('button');
        this._deleteButton = document.createElement('button');
        this._contentContainer = document.createElement('div');
    }

    createElements(){
        this._editButton.classList.add('card__btn');
        this._editButton.classList.add('card__edit');
        this._editButton.addEventListener('click', this._editFunction.bind(this));


        this._deleteButton.classList.add('card__btn');
        this._deleteButton.classList.add('card__delete');
        this._deleteButton.addEventListener('click', this._deleteFunction.bind(this));

        this._contentContainer.classList.add('card__content-container');

        this._mainContainer.classList.add('card');
        this._mainContainer.append(this._editButton);
        this._mainContainer.append(this._deleteButton);
        this._mainContainer.append(this._contentContainer);
    }

    render(selector = 'body'){
        this.createElements();
        document.querySelector(selector).append(this._mainContainer);
    }
}



export class ArticleCard extends Card {
    constructor(title, post, editFunction, deleteFunction) {
        super(editFunction, deleteFunction);

        this.title = title;
        this.post = post;
        this._titleElem = document.createElement('h3');
        this._postElem = document.createElement('p');
    }

    createElements() {
        super.createElements();
        this._titleElem.innerText = this.title;
        this._postElem.innerText = this.post;

        this._contentContainer.append(this._titleElem);
        this._contentContainer.append(this._postElem);
    }
}
