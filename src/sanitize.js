export default function sanitize (text) {
	let words = text.split('-');
	let result = words[0];
	for (let i = 1; i < words.length; i++) {
		let word = words[i];
		let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
		result += capitalizedWord;
	}
	return result;
};
