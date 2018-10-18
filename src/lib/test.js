export default function say(name) {
	let parBlock;
	parBlock = document.body;

	let message;
	message = document.createElement('div');
	message.className = 'frame';
	message.innerHTML = `Hello, ${name}!`;
	parBlock.appendChild(message);
};
