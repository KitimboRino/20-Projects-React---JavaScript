// Disply function
function display(value) {
  document.getElementById('textarea').value += value;
}

// Function that eavaluates the digit and returns the result.
function calculate() {
  var value = document.getElementById('textarea').value;
  var answer = eval(value);
  document.getElementById('textarea').value = answer;
}

// Function that clears the display
function clr() {
  document.getElementById('textarea').value = '';
}
