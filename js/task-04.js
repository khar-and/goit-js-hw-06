let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector('span');

btnIncrement.addEventListener('click', onIncrementClick);
btnDecrement.addEventListener('click', onDecrementClick);

function onIncrementClick(elem) {
    counterValue += 1;
    span.textContent = counterValue;
}


function onDecrementClick(elem) {
    counterValue -= 1;
    span.textContent = counterValue;
}

