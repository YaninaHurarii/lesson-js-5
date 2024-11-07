/* 1.  Напишіть функцію, яка повертає частку двох чисел. Виведіть результат роботи функції в консоль. */

function returnNum(a, b) {
 
  if (b === 0) {
    
    return "Ділення на нуль неможливе!";

  } else {
    return a / b;
  }

}

returnNum();
console.log(returnNum(160, 80));
console.log(returnNum(70, 140));
console.log(returnNum(80, 0));




/* 2. Завдання: Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами.

Технічні вимоги:
- Отримати за допомогою модального вікна браузера два числа. Провалідувати отримані значення(перевірити, що отримано числа). Якщо користувач ввів не число, запитувати до тих пір, поки не введе число
- Отримати за допомогою модального вікна браузера математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /. Провалідувати отримане значення. Якщо користувач ввів не передбачене значення, вивести alert('Такої операції не існує').
- Створити функцію, в яку передати два значення та операцію.
- Вивести у консоль результат виконання функції.*/

let firstNumber;
let secondNumber;
let operation;

function returnResult() {
  while (isNaN(firstNumber)) {
    firstNumber = +prompt("Введіть перше число:");
  }

  do {
    operation = prompt("Введіть математичну операцію (+, -, *, /)");
  } while (!["+", "-", "*", "/"].includes(operation));

  while (isNaN(secondNumber)) {
    secondNumber = +prompt("Введіть друге число:");
  }

  const result = toCalc(firstNumber, secondNumber, operation);

  if (result !== undefined) {
    console.log(result);
    alert(result);
  }
}

function toCalc(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return secondNumber !== 0
        ? firstNumber / secondNumber
        : alert("Такої операції не існує!");
    default:
      return alert("Невідома операція!");
  }
}

returnResult();
  

/* 3. Опціонально. Завдання:

Реалізувати функцію підрахунку факторіалу числа.
Технічні вимоги:
- Отримати за допомогою модального вікна браузера число, яке введе користувач.
- За допомогою функції порахувати факторіал числа, яке ввів користувач і вивести його на екран.
- Використовувати синтаксис ES6 для роботи зі змінними та функціями.*/



function letFactorial(number) {
  return number <= 1 ? number === 1 : number * letFactorial(number - 1);
}

function calcFactorial() {
  let getNumber = +prompt("Введіть будь-яке число для обчислення факторіалу");

  if (isNaN(getNumber)) {
    alert("Ви ввели не число!");
    return;
  }

  const result = letFactorial(getNumber);
  alert(`Факторіал числа ${getNumber} дорівнює ${result}`);
}

calcFactorial();