const textInput = document.querySelector('input');
const textSpan = document.querySelector('span');

textInput.addEventListener('input', onTextChangeInput);

function onTextChangeInput(event) {
    let textWithoutSpace = event.currentTarget.value.trim();
    if (textWithoutSpace !== "") {
        textSpan.textContent = textWithoutSpace; 
    } else {
        textSpan.textContent = "Anonymous"; 
    }
}
    
