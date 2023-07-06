const categoryListArr = document.querySelectorAll('.item');
console.log(`Number of categories: ${document.querySelectorAll('.item').length}`);

categoryListArr.forEach((elem)=> {
    console.log(`Category:${elem.firstElementChild.textContent}`);
    const listEl = elem.lastElementChild;
    console.log(listEl.children.length);
    });