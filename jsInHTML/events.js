// Function triggered by event is an event handler.
function changeText() {
    const p = document.querySelector('p');
    p.textContent = 'I changed because of an event handler.';
}

const arrowChange = () => {
    const paragraph = document.querySelector('#p2');
    paragraph.style.border = '3px dashed red';
    paragraph.textContent = 'I have changed.';
}