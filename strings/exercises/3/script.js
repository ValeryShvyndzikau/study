alert(truncate(prompt('Enter long string',''), 20));

function truncate(str, maxLength) {
	if (!str) return 'Empty string';
	if (str.length > maxLength) {
		return str.slice(0, maxLength - 3) + '...';
	} else {
		return str;
	}
}