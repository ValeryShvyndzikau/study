var a = prompt('Enter first number','');
var b = prompt('Enter second number','');

if (isNumeric(a) && isNumeric(b)) {
	alert(parseFloat(a)+parseFloat(b));
} else {
	alert('Error!');
}

function isNumeric(n) {
	alert(parseFloat(n));
  return !isNaN(parseFloat(n)) && isFinite(parseFloat(n));
}