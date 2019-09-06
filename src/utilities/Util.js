function setDisplayNumber(prev, buttonVal, isReadyForOperation) {
  if (isReadyForOperation) {
    return buttonVal;
  }
  if (buttonVal === "±") {
    return setSign(prev);
  }
  if (buttonVal === "." && prev.includes(".")) {
    return prev;
  } else if (prev === "0") {
    if (buttonVal !== ".") {
      return buttonVal;
    } else {
      return prev + buttonVal;
    }
  } else {
    return prev + buttonVal;
  }
}

function setSign(value) {
  return value === "0" || value.includes("-")
    ? value.replace("-", "")
    : "-" + value;
}

function operate(totalValue, currentVal, button) {
  switch (button) {
    case "/":
      if (totalValue === "0") {
        return "Cannot divide by zero";
      } else if (currentVal === "0" && totalValue === "0") {
        return "Result is Undefined";
      } else {
        return parseFloat(currentVal / totalValue).toString();
      }
    case "*":
      return parseFloat(currentVal * totalValue).toString();
    case "+":
      let result = parseFloat(currentVal) + parseFloat(totalValue);
      return result.toString();
    case "-":
      return parseFloat(currentVal - totalValue).toString();
    default:
      return totalValue;
  }
}

function removeLetter(letter) {
  return letter.length === 1 ||
    (letter.length === 2 && letter.charAt(0) === "-")
    ? "0"
    : letter.slice(0, -1);
}
function isValidValue(curValue) {
  return curValue === "0" || isNaN(Number(curValue));
}

export function calculate(obj, buttonValue, rate = 0) {
  // console.log(obj);

  switch (buttonValue) {
    case "/":
    case "*":
    case "+":
    case "-":
      return {
        total: obj.total,
        currentValue:
          obj.operator !== ""
            ? operate(obj.total, obj.currentValue, obj.operator)
            : obj.total,
        operator: buttonValue,
        readyForOperation: true
      };
    case "=":
      return {
        total: operate(obj.total, obj.currentValue, obj.operator),
        currentValue: "0",
        operator: "",
        readyForOperation: true
      };
    case "⬅":
      return {
        total: removeLetter(obj.total),
        currentValue: obj.currentValue,
        operator: obj.operator,
        readyForOperation: obj.isReadyForOperation
      };
    case "CE":
      return {
        total: "0",
        currentValue: obj.currentValue,
        operator: obj.operator,
        readyForOperation: obj.isReadyForOperation
      };
    case "C":
      return {
        total: "0",
        currentValue: "0",
        operator: "",
        readyForOperation: false
      };
    case "€":
      return {
        total: isValidValue(obj.currentValue)
          ? rate * Number(obj.total)
          : rate * Number(obj.currentValue),
        currentValue: isValidValue(obj.currentValue)
          ? obj.total
          : obj.currentValue,
        operator: "",
        readyForOperation: true
      };

    default:
      return {
        total: setDisplayNumber(obj.total, buttonValue, obj.readyForOperation),
        currentValue: obj.currentValue,
        operator: obj.operator,
        readyForOperation: false
      };
  }
}
