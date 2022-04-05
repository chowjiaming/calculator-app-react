export const addCommas = (number) =>
  String(number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

export const removeCommas = (number) => number.toString().replace(/,/g, '');

export const calculate = (x, y, operator) => {
  let answer;
  switch (operator) {
    case "+":
      answer = x + y;
      break;
    case "-":
      answer = x - y;
      break;
    case "x":
      answer = x * y;
      break;
    default:
      answer = x / y;
  }
  if (answer.toString().length >= 6) return answer.toExponential(6);
  return answer;
};
