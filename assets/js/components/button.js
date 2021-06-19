import { changeBookToCompleted, changeBookToUnCompleted } from './../books.js';
import { deleteCardBook } from './card.js';

// NOTE: Membuat abstrak Button
const createButton = (
    buttonColorClass,
    marginClass,
    eventListener,
    textBtn
) => {
    const button = document.createElement('button');
    button.classList.add('btn', buttonColorClass, marginClass);

    button.innerText = textBtn;
    button.addEventListener('click', event => {
        eventListener(event);
    });

    return button;
};

// NOTE: Membuat button Finish
const finishButton = () =>
    createButton(
        'btn-green',
        'mr-3',
        event => {
            changeBookToCompleted(event.target.parentElement.parentElement);
        },
        'Finish'
    );

// NOTE: Membuat button Delete
const deleteButton = () =>
    createButton(
        'btn-red',
        'ml-3',
        event => {
            const isDelete = confirm('Are you Sure delete this book?');
            if (isDelete)
                deleteCardBook(event.target.parentElement.parentElement);
        },
        'Delete'
    );

// NOTE: Membuat button unfinish
const unFinishButton = () =>
    createButton(
        'btn-grey',
        'mr-3',
        event => changeBookToUnCompleted(event.target.parentNode.parentNode),
        'Unfinish'
    );

export { finishButton, deleteButton, unFinishButton };
