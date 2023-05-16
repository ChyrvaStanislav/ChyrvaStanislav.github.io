export class Card {
  constructor() {


    this._mainContainer = document.createElement('div');
    this._contentContainer = document.createElement('div');
  }

  createElements() {
    this._contentContainer.classList.add('card__content-container');

    this._mainContainer.classList.add('card');
    this._mainContainer.append(this._contentContainer);
  }

  render(selector = 'body') {
    this.createElements();
    document.querySelector(selector).append(this._mainContainer);
  }
}

class EditDeleteCard extends Card {
  constructor(editFunction, deleteFunction) {
    super();

    this._editFunction = editFunction;
    this._deleteFunction = deleteFunction;
    this._editButton = document.createElement('button');
    this._deleteButton = document.createElement('button');
  }

  createElements() {
    super.createElements();
    this._editButton.classList.add('card__btn');
    this._editButton.classList.add('card__edit');
    this._editButton.addEventListener('click', this._editFunction.bind(this));


    this._deleteButton.classList.add('card__btn');
    this._deleteButton.classList.add('card__delete');
    this._deleteButton.addEventListener('click', this._deleteFunction.bind(this));

    this._mainContainer.append(this._editButton);
    this._mainContainer.append(this._deleteButton);
  }
}


export class ArticleCard extends EditDeleteCard {
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

export class ImageCard extends Card {
  constructor(url) {
    super();

    this._url = url;
    this._imageElem = document.createElement('img');
    this._imageElem.style.width = '100%';
  }

  createElements() {
    super.createElements();

    this._imageElem.src = this._url;
    this._contentContainer.append(this._imageElem);
  }
}


