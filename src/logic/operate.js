import Big from 'big.js';

export default function Operate(numberOne, numberTwo, operation) {
  let result;
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'X':
      result = num1.times(num2);
      break;
    case '÷':
      result = numberTwo === '0' ? 'Error' : num1.div(num2);
      break;
    case '+/-':
      if (numberOne == null) {
        result = num2.times(-1);
      } else {
        result = num1.times(-1);
      }
      break;
    default:
      break;
  }
  return result.toFixed(3).toString();
}
