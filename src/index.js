// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".calculator"),
  result = form.querySelector(".result");

const CLASS_NUM = "btn-number";
const CLASS_OPER = "btn-oper";

let first_number = 0,
  operator = "",
  bool_f = false,
  bool_s = false;

function Reset() {
  first_number = 0;
  operator = "";
  bool_f = false;
  bool_s = false;
}

function calculator(number) {
  // console.log(operator);
  let res;
  if (operator === "*") {
    res = first_number * parseFloat(number);
    console.log(res);
  } else if (operator === "/") {
    res = first_number / parseFloat(number);
  } else if (operator === "-") {
    res = first_number - parseFloat(number);
  } else if (operator === "+") {
    res = first_number + parseFloat(number);
  } else if (operator === "") {
    res = first_number * 10 + parseInt(number, 10);
    result.innerHTML = res;
  }
  operator = "";
  first_number = res;
}

function input(event) {
  const target = event.target;
  const className = target.className;
  if (className.indexOf(CLASS_NUM) !== -1) {
    result.innerHTML = target.value;
    if (bool_f) {
      calculator(target.value);
    } else {
      first_number = parseInt(target.value, 10);
      bool_f = true;
    }
  } else if (className.indexOf(CLASS_OPER) !== -1) {
    const oper = target.value;
    if (oper === "C") {
      Reset();
      result.innerHTML = first_number;
    } else if (oper === "=") {
      result.innerHTML = first_number;
    } else {
      if (bool_s) {
        result.innerHTML = first_number;
        operator = oper;
      } else {
        operator = oper;
        result.innerHTML = oper;
        bool_s = true;
      }
    }
  }
  console.log(first_number, bool_f, bool_s);
}

function init() {
  form.addEventListener("click", input);
}
init();
