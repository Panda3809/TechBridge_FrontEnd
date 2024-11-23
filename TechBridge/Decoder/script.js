const encodedMessageInput = document.getElementById('encoded-message');
const shiftValueInput = document.getElementById('shift-value');
const decodeBtn = document.getElementById('decode-btn');
const decodedMessagePara = document.getElementById('decoded-message');

decodeBtn.addEventListener('click', () => {
	const encodedMessage = encodedMessageInput.value;
	const shiftValue = parseInt(shiftValueInput.value);
	const decodedMessage = decodeMessage(encodedMessage, shiftValue);
	decodedMessagePara.innerText = decodedMessage;
});

function decodeMessage(encodedMessage, shiftValue) {
	let decodedMessage = '';
	for (let i = 0; i < encodedMessage.length; i++) {
		const charCode = encodedMessage.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			decodedMessage += String.fromCharCode((charCode - 65 - shiftValue + 26) % 26 + 65);
		} else if (charCode >= 97 && charCode <= 122) {
			decodedMessage += String.fromCharCode((charCode - 97 - shiftValue + 26) % 26 + 97);
		} else {
			decodedMessage += encodedMessage[i];
		}
	}
	return decodedMessage;
}