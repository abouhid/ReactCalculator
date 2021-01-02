import Big from 'big.js';

export default function Operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const dnum2 = Big(numberTwo);
  let result;
  switch (operation) {
    case '*':
      result = num1.times(dnum2);
      break;
    case '÷':
      result = num1.div(dnum2);
      break;
    case '+':
      result = num1.plus(dnum2);
      break;
    case '-':
      result = num1.minus(dnum2);
      break;
    default:
      break;
  }
  return result;
}
