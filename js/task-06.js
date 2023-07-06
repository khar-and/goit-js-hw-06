const textInput = document.querySelector('input');
const inputLength = textInput.getAttribute('data-length');

textInput.addEventListener('focus', onReturnFocusInput);
textInput.addEventListener('blur', onOffFocus);

function onReturnFocusInput(event) {
    textInput.classList.remove('invalid');
}

function onOffFocus(event) {
    console.log('off');
    if (Number(inputLength) !== Number(textInput.value.trim().length)) {
        textInput.classList.add('invalid');
        console.log('не равно 6');
    }
    textInput.classList.add('valid');
    console.log(textInput.value.length);
}
