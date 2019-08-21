export function setDisplayNumber(prev, buttonVal, isReadyForOperation) {
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

export function setSign(value) {
  return value === "0" || value.includes("-")
    ? value.replace("-", "")
    : "-" + value;
}
export function calculate(obj, buttonValue) {
  console.log(obj);

  switch (buttonValue) {
    case "/":
    case "*":
    case "+":
    case "-":
      return {
        total: obj.total,
        currentValue: obj.currentValue,
        operator: buttonValue,
        readyForOperation: true
      };
    case "=":
      return {
        total: operate(obj.total, obj.currentValue, obj.operator),
        currentValue: obj.total,
        operator: "",
        readyForOperation: false
      };
    case "CE":
    case "C":
      return {
        total: "0",
        currentValue: "0",
        operator: "",
        readyForOperation: false
      };
    default:
      return {
        total: setDisplayNumber(obj.total, buttonValue, obj.readyForOperation),
        currentValue: obj.total,
        operator: obj.operator,
        readyForOperation: false
      };
  }
}
export function operate(totalValue, currentVal, button) {
  switch (button) {
    case "/":
      if (totalValue === "0") {
        alert("Dividing by zero is Forbidden");
        return "0";
      } else if (currentVal === "0" && totalValue === "0") {
        alert("Result is Undefined");
        return "0";
      } else {
        let cValue = parseInt(currentVal);
        let tValue = parseInt(totalValue);
        let ct = cValue / tValue;
        return ct.toFixed(8).toString();
      }
    case "*":
    //   let cValue = parseInt(currentVal);
    //   let tValue = parseInt(totalValue);
    //   let ct = cValue / tValue;
    let ct = parseFloat(currentVal) * parseFloat(totalValue)
    console.log(parseFloat(currentVal))
      return ct.toString();
    case "+":
      let cValue1 = parseInt(currentVal);
      let tValue1 = parseInt(totalValue);
      let ct1 = cValue1 / tValue1;
      return ct1.toFixed(8).toString();
    case "-":
      let cValue2 = parseInt(currentVal);
      let tValue2 = parseInt(totalValue);
      let ct2 = cValue2 / tValue2;
      return ct2.toFixed(8).toString();
    default:
      return totalValue;
  }
}
