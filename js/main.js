const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-inputNumber');
const attempts = document.querySelector('.js-attempts');
const clue = document.querySelector('.js-clue');
let count = 0;


function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log('Tu número aleatorio es: '+ randomNumber);

handleclick = (e) =>{
    e.preventDefault();
    // let inputValue = input.value;
    // console.log(inputValue);
    comparison();
    counterAttempts();
}

function comparison() {
    let inputValue = parseInt(input.value);
    if(inputValue > 100 || inputValue < 0){
       clue.innerHTML = 'El número debe estar entre 1 y 100.' 
    }if (inputValue === randomNumber){
        clue.innerHTML = 'Has ganado campeona!!!';
    }if (inputValue > randomNumber){
        clue.innerHTML = 'Demasiado alto';
    }if (inputValue < randomNumber){
        clue.innerHTML = 'Demasiado bajo';
    }else{
        console.log('error');
    }
}

function counterAttempts(){
    count++;
    attempts.innerHTML = count;
}

btn.addEventListener('click', handleclick);
