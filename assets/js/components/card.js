import {
    finishButton,
    deleteButton,
    unFinishButton,
    editButton
} from './button.js';

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

    if (isCompleted)
        cardFooter.append(unFinishButton(), editButton(), deleteButton());
    else cardFooter.append(finishButton(), editButton(), deleteButton());

    const card = document.createElement('div');
    card.classList.add('card');
    card.append(cardHeader, cardFooter);

    return card;
};

// NOTE: function untuk merubah UI card Book
const updateCardBook = (cardBook, { title, author, years, isCompleted }) => {
    const textTitle = cardBook.querySelector('.text-title');
    const textSubtitle = cardBook.querySelector('.text-subtitle');
    const textIsCompleted = cardBook.querySelector('.text-isCompleted');
    const footerCard = cardBook.querySelector('.card-footer');

    const subtitle = textSubtitle.innerText.split(' | ');

    const [textAuthor, textYears] = subtitle;

    if (title) textTitle.innerText = title;
    if (author || years) {
        if (author != textAuthor && years != textYears)
            textSubtitle.innerText = `${author} | ${years}`;
        else {
            if (author != textAuthor)
                textSubtitle.innerText = `${author} | ${textYears}`;
            if (years != textYears)
                textSubtitle.innerText = `${textAuthor} | ${years}`;
        }
    }

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

// NOTE: function untuk menampilkan buku sesuai filter
const showCardFilter = cardFilter => {
    const card = document.querySelectorAll('#main-content .card');

    card.forEach(cd => {
        const textIsCompleted = cd.querySelector('.text-isCompleted');
        if (cardFilter == 'all') {
            cd.style.display = 'block';
        } else if (textIsCompleted.innerText.toLowerCase() == cardFilter) {
            cd.style.display = 'block';
        } else {
            cd.style.display = 'none';
        }
    });
};

// NOTE: function delete card UI
const deleteCardBook = cardElement => {
    cardElement.remove();
};

export {
    makeCardBook,
    containerCard,
    updateCardBook,
    deleteCardBook,
    showCardFilter
};
