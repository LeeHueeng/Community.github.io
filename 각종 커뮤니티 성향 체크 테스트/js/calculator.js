function add(char) {
  var display = document.getElementById('display');
  display.value = display.value + char;
}

function calculate() {
  var display = document.getElementById('display');
  var result = eval(display.value);
  document.getElementById('result').value = result;

}

function reset() {
  document.getElementById('display').value = "";
  document.getElementById('result').value = "";
}


var numberClicked = false;

function add(char) {
  if (numberClicked == false) {
    if (isNaN(char) == true) {

    } else {
      document.getElementById('display').value += char;
    }
  } else {
    document.getElementById('display').value += char;
  }

  if (isNaN(char) == true) {
    numberClicked = false;
  } else {
    numberClicked = true;
  }
}
