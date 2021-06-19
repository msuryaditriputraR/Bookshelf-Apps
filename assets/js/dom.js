import { changeBookToCompleted, changeBookToUnCompleted } from './books.js';

const containerCard = document.getElementById('main-content');

// NOTE: Membuat Card
const makeCardBook = (title, author, year, isCompleted) => {
    const textTitle = document.createElement('h2');
    textTitle.classList.add('text-title');
    textTitle.innerText = title;

    const textSubtitle = document.createElement('p');
    textSubtitle.classList.add('text-subtitle');
    textSubtitle.innerText = `${author} | ${year}`;

    const textHeader = document.createElement('div');
    textHeader.classList.add('text-header');
    textHeader.append(textTitle, textSubtitle);

    const textIsCompleted = document.createElement('p');
    textIsCompleted.classList.add('text-isCompleted');

    if (isCompleted) {
        textIsCompleted.classList.add('completed');
        textIsCompleted.innerText = 'Completed';
    } else {
        textIsCompleted.classList.add('uncompleted');
        textIsCompleted.innerText = 'Uncompleted';
    }

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    cardHeader.append(textHeader, textIsCompleted);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    if (isCompleted) cardFooter.append(unFinishButton(), deleteButton());
    else cardFooter.append(finishButton(), deleteButton());

    const card = document.createElement('div');
    card.classList.add('card');
    card.append(cardHeader, cardFooter);

    return card;
};

const updateCardBook = (cardBook, isCompleted) => {
    const textIsCompleted = cardBook.querySelector('.text-isCompleted');
    const footerCard = cardBook.querySelector('.card-footer');

    if (isCompleted) {
        textIsCompleted.classList.remove('uncompleted');
        textIsCompleted.classList.add('completed');
        textIsCompleted.innerText = 'Completed';

        footerCard.replaceChild(unFinishButton(), footerCard.childNodes[0]);
    } else {
        textIsCompleted.classList.remove('completed');
        textIsCompleted.classList.add('uncompleted');
        textIsCompleted.innerText = 'Uncompleted';

        footerCard.replaceChild(finishButton(), footerCard.childNodes[0]);
    }
};

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
    createButton('btn-red', 'ml-3', () => console.log('delete'), 'Delete');

// NOTE: Membuat button unfinish
const unFinishButton = () =>
    createButton(
        'btn-grey',
        'mr-3',
        event => changeBookToUnCompleted(event.target.parentNode.parentNode),
        'Unfinish'
    );

const addBookButton = document.getElementById('addBookBtn');

export { makeCardBook, addBookButton, containerCard, updateCardBook };
