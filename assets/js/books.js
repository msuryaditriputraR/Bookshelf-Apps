import {
    containerCard,
    makeCardBook,
    updateCardBook,
    showCardFilter
} from './components/card.js';

const addBook = () => {
    const title = document.getElementById('book-title');
    const author = document.getElementById('book-author');
    const years = document.getElementById('book-years');
    const isCompleted = document.getElementById('book-iscomleted');

    const cardBook = makeCardBook(
        title.value,
        author.value,
        years.value,
        isCompleted.checked
    );
    containerCard.append(cardBook);

    // NOTE: When add new book, filter back to All and show All books
    const allFilter = document.querySelector('input#all');
    allFilter.checked = true;
    showCardFilter(allFilter.value);
    // NOTE: reset value input when add Button clicked
    title.value = '';
    author.value = '';
    years.value = '';
    isCompleted.checked = false;
    // console.log(title, author, years, isCompleted);
};

const changeBookToCompleted = cardBookElement => {
    updateCardBook(cardBookElement, true);
};

const changeBookToUnCompleted = cardBookElement => {
    updateCardBook(cardBookElement, false);
};

export { addBook, changeBookToCompleted, changeBookToUnCompleted };
