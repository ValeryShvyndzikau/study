var testRange = [0, 100];
var iterationsCount = 10000;
var results = {};
var resultString ='';

for (var i = 0; i < iterationsCount; i++) {
	var randomNum = randomInteger(testRange[0], testRange[1]);

	if (!results[randomNum]) {
		results[randomNum] = 1;
	} else {
		results[randomNum]++;
	}
}

for (var key in results) {
	resultString += 'Number ' + key + ' was genarated ' + results[key] + ' times.<br>';
}

document.getElementById('results').innerHTML = resultString;

function randomInteger(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}