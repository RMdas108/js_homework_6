//Завдання 1. Гра “Вгадай число” (версія 1.0)
"use strict";
var userConfirm = true;
while (userConfirm) {
  let numComp = Math.round(Math.random() * 100);
  let i = 1;
  let numUser = parseInt(
    prompt("Вгадайте загадане мною число від 0 до 100...")
  );

  while (numUser !== null) {
    if (!isNaN(numUser) && numUser >= 0 && numUser <= 100) {
      while (numComp !== numUser) {
        console.log(`Компьютер: ${numComp}, Користувач: ${numUser}`); //Введені значення
        i++;
        if (numComp < numUser) {
          numUser = +prompt(
            "Введене Вами число БІЛЬШЕ за те, що я загадав. Спробуйте ще..."
          );
        } else if (numComp > numUser) {
          numUser = +prompt(
            "Введене Вами число МЕНШЕ за те, що я загадав. Спробуйте ще..."
          );
        }
      }
      userConfirm = confirm(
        `Вітаю! Ви вгадали з ${i} спроби. Бажаєте пограти ще?`
      );
      break;
    } else {
      numUser = parseInt(prompt("Введіть число потрібного діапазону."));
    }
  }
}
