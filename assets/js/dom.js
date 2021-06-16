const containerCard = document.getElementById('main-content');

// NOTE: Membuat Card
const makeCardBook = (title, author, year, isCompleted) => {
    console.log(title, author, year, isCompleted);

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
    createButton('btn-green', 'mr-3', () => console.log('finish'), 'Finish');

// NOTE: Membuat button Delete
const deleteButton = () =>
    createButton('btn-red', 'ml-3', () => console.log('delete'), 'Delete');

// NOTE: Membuat button unfinish
const unFinishButton = () =>
    createButton('btn-grey', 'mr-3', () => console.log('unfinish'), 'Unfinish');

const addBookButton = document.getElementById('addBookBtn');

export { makeCardBook, addBookButton, containerCard };
