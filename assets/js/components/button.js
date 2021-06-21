import { changeBookToCompleted, changeBookToUnCompleted } from './../books.js';
import { deleteCardBook } from './card.js';

// NOTE: Membuat abstrak Button
const createButton = ({ className, eventListener, textBtn }) => {
    const button = document.createElement('button');
    button.classList.add('btn', ...className);

    button.innerText = textBtn;
    button.addEventListener('click', event => {
        eventListener(event);
    });

    return button;
};

// NOTE: Membuat button Finish
const finishButton = () =>
    createButton({
        className: ['btn-green', 'mr-3'],
        eventListener: event => {
            changeBookToCompleted(event.target.parentElement.parentElement);
        },
        textBtn: 'Finish'
    });

// NOTE: Membuat button Delete
const deleteButton = () =>
    createButton({
        className: ['btn-red', 'ml-3'],
        eventListener: event => {
            const isDelete = confirm('Are you Sure delete this book?');
            if (isDelete)
                deleteCardBook(event.target.parentElement.parentElement);
        },
        textBtn: 'Delete'
    });

// NOTE: Membuat button unfinish
const unFinishButton = () =>
    createButton({
        className: ['btn-grey', 'mr-3'],
        eventListener: event =>
            changeBookToUnCompleted(event.target.parentNode.parentNode),
        textBtn: 'Unfinish'
    });

export { finishButton, deleteButton, unFinishButton };
