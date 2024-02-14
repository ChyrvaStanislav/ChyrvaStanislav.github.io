export class Modal {
    constructor() {
        this._modalElement = document.createElement('div');
        this._backgroundContainer = document.createElement('div');
        this._mainContainer = document.createElement('div');
        this._contentContainer = document.createElement('div');
        this._buttonContainer = document.createElement('div');
        this._closeButton = document.createElement('div');
    }

    closeModal(){
        this._modalElement.remove();
    }

    createElements(){
        this._closeButton.classList.add('modal__close');
        this._closeButton.addEventListener('click', this.closeModal.bind(this));

        this._backgroundContainer.classList.add('modal__background');
        this._backgroundContainer.addEventListener('click', this.closeModal.bind(this));

        this._contentContainer.classList.add('modal__content-wrapper');
        this._buttonContainer.classList.add('modal__button-wrapper');

        this._mainContainer.classList.add('modal__main-container');
        this._mainContainer.append( this._contentContainer);
        this._mainContainer.append( this._buttonContainer);
        this._mainContainer.append( this._closeButton);

        this._modalElement.classList.add('modal');
        this._modalElement.append(this._backgroundContainer);
        this._modalElement.append(this._mainContainer);
    }

    render(selector = 'body'){
        this.createElements();
        document.querySelector(selector).append(this._modalElement);
    }
}

export class DeleteModal extends Modal {
    constructor(name, confirmFunction) {
        super();

        this.name = name;
        this.confirmFunction = confirmFunction;

        this._titleElem = document.createElement('h3')
        this._confirmButton = document.createElement('button');
        this._cancelButton = document.createElement('button');
    }

    static title = `Do you really want to delete "${name}"?`

    createElements(){
        super.createElements();

        this._titleElem.innerText = `Do you really want to delete "${this.name}"?`;
        this._contentContainer.append(this._titleElem);

        this._cancelButton.classList.add('modal__cancel-btn');
        this._cancelButton.innerText = 'Cancel';
        this._cancelButton.addEventListener('click', this.closeModal.bind(this));

        this._confirmButton.classList.add('modal__confirm-btn');
        this._confirmButton.innerText = 'Confirm';
        this._confirmButton.addEventListener('click', () => {
            this.confirmFunction();
            this.closeModal();
        });

        this._buttonContainer.append( this._confirmButton);
        this._buttonContainer.append( this._cancelButton);
    }
}

export class EditModal extends Modal {
    constructor(title, post, confirmFunction) {
        super();
        this.tile = title;
        this.post = post;
        this.confirmFunction = confirmFunction;
        this._confirmButton = document.createElement('button');
        this._formContainer = document.createElement('form')
        this._titleField = document.createElement("input");
        this._postField = document.createElement("textarea");
    }

    static title = `Do you really want to delete "${name}"?`

    createForm(){
        const labelTitle = document.createElement('label');
        labelTitle.innerText = 'Title';
        const postTitle = document.createElement('label');
        postTitle.innerText = 'Post';

        this._formContainer.append(labelTitle);
        this._formContainer.append(this._titleField);
        this._formContainer.append(postTitle);
        this._formContainer.append(this._postField);

        this._titleField.value = this.tile;
        this._postField.value = this.post;
    }

    onConfirm(){
        console.log(this._titleField.value)
        console.log(this._postField.value)
        this.confirmFunction(this._titleField.value, this._postField.value);
        this.closeModal();
    }

    createElements(){
        super.createElements();
        this.createForm();

        this._confirmButton.classList.add('modal__confirm-btn');
        this._confirmButton.innerText = 'Confirm';
        this._confirmButton.addEventListener('click', this.onConfirm.bind(this));

        this._buttonContainer.append( this._confirmButton);

        this._contentContainer.append(this._formContainer);
    }
}



