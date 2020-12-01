let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Please enter a number');
  if (input === null) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
}
if (numbers.length === 0) {
  alert('Nothing entered');
} else {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
