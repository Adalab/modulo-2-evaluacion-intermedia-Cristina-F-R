'use strict';

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


function handleclick (e) {
    e.preventDefault();
    comparison();
    counterAttempts();
}

let text = ''; 
function render(text) {
  clue.innerHTML = text;
}

const comparison = () =>{
    let inputValue = input.value;
    if(inputValue.length === 0){
        render('Debes escribir un número')
    }else{
    if (parseInt(inputValue) === randomNumber){
        render('Has ganado campeona!!!');
    }else if(parseInt(inputValue) > randomNumber && inputValue < 101){
       render('Demasiado alto');
    }else if (parseInt(inputValue) < randomNumber && inputValue >-1){
        render('Demasiado bajo');
    }else {
        parseInt(inputValue)
       render('El número debe estar entre 1 y 100.');
}}};

const counterAttempts = () =>{
    count++;
    attempts.innerHTML = count;
}

btn.addEventListener('click', handleclick);
