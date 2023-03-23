// Boshqa usulda yasab ko'rdim

let elForm = document.querySelector('.form');
let elBtn = document.querySelector('.btn');
let elInput = document.querySelector('.input');
let elList = document.querySelector('.box');

elBtn.addEventListener('click', addTodo);

function addTodo(e) {
	e.preventDefault();
	const div = document.createElement('div');
	div.classList.add('myDiv')
	const newTodo = document.createElement('li');
	newTodo.innerHTML = elInput.value;
	if (!(elInput.value == '')) {
		div.appendChild(newTodo);
	} else {
		alert('Please enter something');
		div.removeChild(btn);
	}
	let btn = document.createElement('button');
	btn.textContent = 'Delete';
	div.appendChild(btn);
	btn.addEventListener('click', () => {
		div.removeChild(newTodo);
		div.removeChild(btn);
	});
	elList.appendChild(div);
	elInput.value = '';
}
