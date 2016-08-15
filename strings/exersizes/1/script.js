alert(ucFirst(prompt('enter string','')));

function ucFirst(str) {
	if (!str) {
		return 'Empty string!';
	}
	return str[0].toUpperCase() + str.slice(1);
}