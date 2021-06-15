// NOTE: Membuat card
const makeCardBook = (title, author, year, isCompleted) => {
    const textTitle = document.createElement('h2').classList.add('text-title');
    textTitle.innerText = title;

    const textSubtitle = document
        .createElement('p')
        .classList.add('text-subtitle');
    textSubtitle.innerText = `${author} | ${year}`;

    const textHeader = document
        .createElement('div')
        .classList.add('text-header');
    textHeader.append(textTitle, textSubtitle);

    const textIsCompleted = document
        .createElement('p')
        .classList.add('text-isCompleted');

    if (isCompleted) {
        textIsCompleted.classList.add('completed');
        textIsCompleted.innerText = 'Completed';
    } else {
        textIsCompleted.classList.add('uncompleted');
        textIsCompleted.innerText = 'Uncompleted';
    }

    const cardHeader = document
        .createElement('div')
        .classList.add('card-header');

    cardHeader.append(textHeader, textIsCompleted);

    const cardFooter = 
};

// <div class="card">
//     <div class="card-header">
//         <div class="text-header">
//             <h2 class="text-title">Harry Potter</h2>
//             <p class="text-subtitle">Browl | 1999</p>
//         </div>
//         <p class="text-completed">uncompleted</p>
//     </div>
//     <div class="card-footer">
//         <button class="btn btn-green">Finish</button>
//         <button class="btn btn-red">Delete</button>
//     </div>
// </div>
//


// NOTE: Membuat abstrak Button
{/* <button class="btn btn-green">Finish</button> */}
//         <button class="btn btn-red">Delete</button>
const createButton = (buttonColorClass, eventListener ) => {
    const button = document.createElement('button').classList.add('btn', buttonColorClass);
    button.addEventListener('click', event => {
        eventListener(event);
    });

    return button;
}

// NOTE: Membuat button Finish
const finishButton = () => {
    return createButton('btn-green', () => {
        console.log('finish');
    })
}