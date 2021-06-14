// modal
const btnModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const BtnClosedModal = document.querySelector('.btn-closed');

btnModal.addEventListener('click', () => {
    toggleModal();
});

BtnClosedModal.addEventListener('click', () => {
    toggleModal();
});

modal.addEventListener('click', event => {
    if (event.target == modal) toggleModal();
});

const toggleModal = () => {
    modal.classList.toggle('show');
};
