// NOTE: Membuat abstrak Button
{
    /* <button class="btn btn-green">Finish</button> */
}
//         <button class="btn btn-red">Delete</button>
const createButton = (buttonColorClass, eventListener) => {
    const button = document
        .createElement('button')
        .classList.add('btn', buttonColorClass);
    button.addEventListener('click', event => {
        eventListener(event);
    });

    return button;
};

// NOTE: Membuat button Finish
const finishButton = () => {
    return createButton('btn-green', () => {
        console.log('finish');
    });
};
