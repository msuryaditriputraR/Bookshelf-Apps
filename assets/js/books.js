import { containerCard, makeCardBook, updateCardBook } from './dom.js';

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
