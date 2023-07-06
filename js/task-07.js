const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

 inputEl.addEventListener('input', onDragInput);

function onDragInput() {
spanEl.style.fontSize = `${inputEl.value}px`;
}
onDragInput();