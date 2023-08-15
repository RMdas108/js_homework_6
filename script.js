//Завдання 1. Гра “Вгадай число” (версія 1.0)
'use strict'
let numComp = Math.round(Math.random()*100);
let i = 1;
console.log(numComp);
let numUser = parseInt(prompt("Вгадайте загадане мною число від 0 до 100..."));
if (!isNaN(numUser) || numUser <= 100 || numUser >= 0 ){
while (numComp !== numUser){
  i++;
  if( numComp < numUser){
    numUser = +prompt("Введене Вами число більше за те, що я загадав. Спробуйте ще...");
  }
  else if (numComp > numUser){
    numUser = +prompt("Введене Вами число менше за те, що я загадав. Спробуйте ще...");}
  }
  alert(`Вітаю! Ви вгадали з ${i} спроби.`);
}
else {numUser =prompt("Введіть число потрібного діапазону.")}