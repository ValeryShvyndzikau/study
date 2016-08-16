alert(fibBinet(prompt('Enter n','77')));

function fibBinet(n) {
	var phi = (1 + Math.sqrt(5)) / 2;
	return Math.pow(phi, +n) / Math.sqrt(5);
}