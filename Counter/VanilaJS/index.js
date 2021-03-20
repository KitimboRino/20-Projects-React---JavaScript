// Addition
function addition() {
  var number = Number(document.getElementById('number').innerHTML);
  document.getElementById('number').innerHTML = number + 1;
}

// Subtraction
function subtraction() {
  var number = Number(document.getElementById('number').innerHTML);
  document.getElementById('number').innerHTML = number - 1;
}

// Reset
function reset() {
  document.getElementById('number').innerHTML = 0;
}
