// NOTE: Membuat Card
const makeCardBook = (title, author, year, isCompleted) => {
    const textTitle = document.createElement('h2').classList.add('text-title');
    textTitle.innerText = title;

    const textSubtitle = document
        .createElement('p')
        .classList.add('text-subtitle');
    textSubtitle.innerText = `${author} | ${year}`;

    const textHeader = document
        .createElement('div')
        .classList.add('text-header');
    textHeader.append(textTitle, textSubtitle);

    const textIsCompleted = document
        .createElement('p')
        .classList.add('text-isCompleted');

    if (isCompleted) {
        textIsCompleted.classList.add('completed');
        textIsCompleted.innerText = 'Completed';
    } else {
        textIsCompleted.classList.add('uncompleted');
        textIsCompleted.innerText = 'Uncompleted';
    }

    const cardHeader = document
        .createElement('div')
        .classList.add('card-header');

    cardHeader.append(textHeader, textIsCompleted);

    const cardFooter = document
        .createElement('div')
        .classList.add('card-footer');

    if (isCompleted) cardFooter.append(unFinishButton(), deleteButton());
    else cardFooter.append(finishButton(), deleteButton());

    const card = document.createElement('div').classList.add('card');
    card.append(cardHeader, cardFooter);

    return card;
};

// NOTE: Membuat abstrak Button
const createButton = (buttonColorClass, eventListener, textBtn) => {
    const button = document
        .createElement('button')
        .classList.add('btn', buttonColorClass);

    button.innerText = textBtn;
    button.addEventListener('click', event => {
        eventListener(event);
    });

    return button;
};

// NOTE: Membuat button Finish
const finishButton = () =>
    createButton('btn-green', () => console.log('finish'), 'Finish');

// NOTE: Membuat button Delete
const deleteButton = () =>
    createButton('btn-red', () => console.log('delete'), 'Delete');

// NOTE: Membuat button unfinish
const unFinishButton = () =>
    createButton('btn-grey', () => console.log('unfinish'), 'Unfinish');

export { makeCardBook };
