import { showCardFilter } from './card.js';

// NOTE: Filter
const btnFilter = document.querySelector('.dropdown-filter button');
const filterMenuContainer = document.querySelector('.dropdown-filter-menu');
const filterMenu = filterMenuContainer.querySelectorAll('input');

btnFilter.addEventListener('click', () => {
    filterMenuContainer.classList.toggle('show');
});

filterMenuContainer.addEventListener('click', event => {
    filterMenu.forEach(menu => {
        if (event.target == menu) {
            const valueFilter = event.target.value;
            showCardFilter(valueFilter);
        }
    });
});
