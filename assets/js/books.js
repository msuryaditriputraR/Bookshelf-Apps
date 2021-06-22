import {
    containerCard,
    makeCardBook,
    updateCardBook,
    showCardFilter
} from './components/card.js';
import { formModal } from './components/modal.js';

const addBook = () => {
    const title = document.getElementById('book-title');
    const author = document.getElementById('book-author');
    const years = document.getElementById('book-years');
    const isCompleted = document.getElementById('book-iscompleted');

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

const validationInput = () => {
    const modalContent = document.querySelector('.main-content');
    const inputText = modalContent.querySelectorAll('input[type = text]');

    let isValid = true;

    inputText.forEach(inp => {
        if (!inp.value) {
            alert(inp.previousSibling.innerText + ' is Required');
            isValid = false;
        }
    });
    return isValid;
};

const getValueInputModal = cardBookElement => {
    const titleValue = cardBookElement.querySelector('.text-title').innerText;
    const textSubtitle =
        cardBookElement.querySelector('.text-subtitle').innerText;
    const textIsCompleted =
        cardBookElement.querySelector('.text-isCompleted').innerText;

    const subtitle = textSubtitle.split(' | ');

    const [authorValue, yearsValue] = subtitle;

    let isCompleted;

    if (textIsCompleted === 'Completed') isCompleted = true;
    if (textIsCompleted === 'Uncompleted') isCompleted = false;

    const valueObject = {
        titleValue,
        authorValue,
        yearsValue
    };

    const valueFormModal = [...formModal];

    const arrValueFormModal = valueFormModal.map((input, index) => {
        let newInput = Object.assign({}, input);

        if (input.id === 'book-iscompleted') {
            newInput.isChecked = isCompleted;
        } else {
            for (const [i, val] of Object.keys(valueObject).entries()) {
                if (index === i) {
                    newInput.value = valueObject[val];
                }
            }
        }

        console.log(newInput);
    });

    console.log(arrValueFormModal);
};

export {
    addBook,
    changeBookToCompleted,
    changeBookToUnCompleted,
    getValueInputModal,
    validationInput
};
