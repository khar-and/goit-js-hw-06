const textInput = document.querySelector('input');
const textSpan = document.querySelector('span');

textInput.addEventListener('input', onTextChangeInput);

function onTextChangeInput(event) {
    textSpan.textContent = event.currentTarget.value;
}