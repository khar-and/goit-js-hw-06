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
// змінні для валідації кількості дівов
const minCountDiv = Number(inputEl.getAttribute('min'));
const maxCountDiv = Number(inputEl.getAttribute('max'));
const step = Number(inputEl.getAttribute('step'))

btnCreateEl.addEventListener('click', onCreateCollection);
btnDestroyEl.addEventListener('click', destroyBoxes);

function onCreateCollection(event) {
  if (Number(inputEl.value) < minCountDiv || Number(inputEl.value) > maxCountDiv) {
    alert("Кількість елементів колекції повинна знаходитись в межах від 1 до 100 елементів!")    
  } else {
    createBoxes(Number(inputEl.value));    
  }
  
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i += step) {
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



