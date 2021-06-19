import { addBook } from './books.js';
import {
    addBookButton,
    btnModal,
    modal,
    toggleModal,
    BtnClosedModal
} from './dom.js';

btnModal.addEventListener('click', () => {
    toggleModal();
});

BtnClosedModal.addEventListener('click', () => {
    toggleModal();
});

modal.addEventListener('click', event => {
    if (event.target == modal) toggleModal();
});

addBookButton.addEventListener('click', () => {
    addBook();
    toggleModal();
});
