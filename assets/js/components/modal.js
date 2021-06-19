import { addBook } from './../books.js';

// NOTE: Modal
const btnModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const BtnClosedModal = document.querySelector('.btn-closed');

const toggleModal = () => {
    modal.classList.toggle('show');
};

btnModal.addEventListener('click', () => {
    toggleModal();
});

BtnClosedModal.addEventListener('click', () => {
    toggleModal();
});

modal.addEventListener('click', event => {
    if (event.target == modal) toggleModal();
});

const addBookButton = document.getElementById('addBookBtn');

addBookButton.addEventListener('click', () => {
    addBook();
    toggleModal();
});

export { toggleModal };
