import Operate from './operate';

const Calculate = ((object, btnName) => {
  let { total, next, operation } = object;
  const operator = /[x,+,÷,-]/;
  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '%':
      total = Operate(total, 100, '÷');
      break;
    case operator.includes(btnName):
      if (operation && next) {
        total = Operate(total, next, operation);
      } else {
        operation = btnName;
      }
      break;
    case '.':
      if (operation) {
        next = next ? `${next}.` : '0.';
      } else {
        total = total ? `${total}.` : '0.';
      }
      break;
    case '=':
      if (operation && next) {
        total = Operate(total, next, operation);
      }
      break;
    default:
      if (operation && total) {
        next = next ? next + btnName : btnName;
      } else {
        total = total ? total + btnName : btnName;
      }
      break;
  }
});

export default Calculate;
