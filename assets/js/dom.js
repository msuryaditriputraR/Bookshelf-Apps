// NOTE: Membuat abstrak Button
{
    /* <button class="btn btn-green">Finish</button> */
}
//         <button class="btn btn-red">Delete</button>
const createButton = (buttonColorClass, eventListener, textBtn) => {
    const button = document
        .createElement('button')
        .classList.add('btn', buttonColorClass);

    button.innerText = textBtn;
    button.addEventListener('click', event => {
        eventListener(event);
    });

    return button;
};

// NOTE: Membuat button Finish
const finishButton = () =>
    createButton('btn-green', () => console.log('finish'), 'Finish');

// NOTE: Membuat button Delete
const deleteButton = () =>
    createButton('btn-red', () => console.log('delete'), 'Delete');

// NOTE: Membuat button unfinish
const unFinishButton = () =>
    createButton('btn-grey', () => console.log('unfinish'), 'Unfinish');
