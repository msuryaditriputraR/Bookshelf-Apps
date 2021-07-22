import { showCardSearch } from './card.js';

const searchBox = document.querySelector('.input-search');

searchBox.addEventListener('keyup', function () {
    showCardSearch(this.value);
});
