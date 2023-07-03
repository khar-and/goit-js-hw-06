const categoryListArr = document.querySelectorAll('.item');
console.log(`Number of categories: ${document.querySelectorAll('.item').length}`);

categoryListArr.forEach((elem)=> {
    console.log(`Category:${elem.firstElementChild.textContent}`);
    console.log(`Elements:${elem.querySelectorAll('li').length}`);
});