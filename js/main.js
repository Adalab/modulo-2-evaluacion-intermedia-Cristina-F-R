const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-inputNumber');
const attempts = document.querySelector('.js-attempts');
const clue = document.querySelector('.js-clue');



function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}

console.log('Tu número aleatorio es: '+ getRandomNumber(100));

handleclick = (e) =>{
    e.preventDefault();
    let inputValue = input.value;
    console.log(inputValue);
    comparison();
}



btn.addEventListener('click', handleclick);
