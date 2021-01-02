import Big from 'big.js';

export default function Operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result;
  switch (operation) {
    case '*':
      result = num1.times(num2);
      break;
    case '÷':
      result = num1.div(num2);
      break;
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    default:
      break;
  }
  return result;
}
