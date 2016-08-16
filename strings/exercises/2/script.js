alert(checkSpam(prompt('enter string','')));

function checkSpam(str) {
	if (!str) return 'Empty string!';

	if (str.toLowerCase().indexOf('xxx') != -1 
		|| str.toLowerCase().indexOf('viagra') != -1) {
		return 'SPAM Detected!';
	}

	return 'Everything is fine!';
}