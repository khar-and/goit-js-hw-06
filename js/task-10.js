function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const divEl = document.getElementById('boxes');

const divWidthHeight = 30;
let collectionArr = [];

btnCreateEl.addEventListener('click', onCreateCollection);
btnDestroyEl.addEventListener('click', destroyBoxes);

function onCreateCollection(event) {
  createBoxes(Number(inputEl.value))    
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const elementDivOfCollection = document.createElement('div');
    elementDivOfCollection.style.width = `${divWidthHeight + i *10}px`;
    elementDivOfCollection.style.height = `${divWidthHeight + i *10}px`;
    elementDivOfCollection.style.backgroundColor = getRandomHexColor();
    collectionArr.push(elementDivOfCollection);
  }
  divEl.append(...collectionArr);
}

function destroyBoxes() {
  console.log('destroy');
  divEl.innerHTML = "";
  inputEl.value = "";
  collectionArr = [];
  }



