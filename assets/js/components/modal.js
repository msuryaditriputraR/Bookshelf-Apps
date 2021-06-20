import { addBook } from './../books.js';

const formModal = [
    { id: 'book-title', type: 'text', text: 'Title' },
    { id: 'book-author', type: 'text', text: 'Author' },
    { id: 'book-years', type: 'text', text: 'Years' },
    { id: 'book-iscompleted', type: 'checkbox', text: 'Is Completed' }
];

// NOTE: make an abstraction of modal
const makeModal = (inputModal, textHeader, textButton, idButton) => {
    const headerContent = document.createElement('div');
    headerContent.classList.add('header-content');

    const titleHeader = document.createElement('h2');
    titleHeader.classList.add('title-header');
    titleHeader.textContent = textHeader;

    const btnClosed = document.createElement('span');
    btnClosed.className = 'btn-closed btn-red';
    btnClosed.innerHTML = '&times;';

    headerContent.append(titleHeader, btnClosed);

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    inputModal.forEach(input => {
        const formControl = document.createElement('div');
        formControl.classList.add('form-control');

        const labelModal = document.createElement('label');
        labelModal.setAttribute('for', input.id);
        labelModal.innerText = input.text;

        const inputModal = document.createElement('input');
        inputModal.setAttribute('type', input.type);
        inputModal.setAttribute('id', input.id);

        formControl.append(labelModal, inputModal);
        mainContent.append(formControl);
    });

    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';

    const btnAddBook = document.createElement('button');
    btnAddBook.className = 'btn btn-main';
    btnAddBook.setAttribute('id', idButton);
    btnAddBook.innerText = textButton;

    footerContent.append(btnAddBook);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    modalContent.append(headerContent, mainContent, footerContent);

    return modalContent;
};

const addBookModal = (inputModal, textHeader, textButton, idButton) => {
    return makeModal(inputModal, textHeader, textButton, idButton);
};

// NOTE: Modal
const addBtnModal = document.querySelector('.add-btn-modal');

const modal = document.querySelector('.modal');

const toggleModal = () => {
    modal.classList.toggle('show');
};

document.addEventListener(
    'click',
    event => {
        const element = event.target;
        if (element.classList.contains('btn-closed')) {
            element.addEventListener(
                'click',
                () => {
                    toggleModal();
                },
                { once: true }
            );
        }

        if (element.id == 'addBookBtn') {
            element.addEventListener(
                'click',
                () => {
                    addBook();
                    toggleModal();
                },
                { once: true }
            );
        }
    },
    { capture: true }
);

addBtnModal.addEventListener('click', () => {
    const modalContent = document.querySelector('.modal-content');

    if (!modalContent) {
        const modalAddBook = addBookModal(
            formModal,
            'Add New Book',
            'Add Book',
            'addBookBtn'
        );
        modal.append(modalAddBook);
    }

    toggleModal();
});

modal.addEventListener('click', event => {
    if (event.target == modal) toggleModal();
});

// export { toggleModal };
