const paragraph = document.createElement('p');
const toDoList = document.querySelector('ul');
const newToDo = document.createElement('li');
const otherToDo1 = document.createElement('li');
const otherToDo2 = document.createElement('li');
const body = document.querySelector('body');
const anotherToDo = document.createElement('li');


paragraph.style.border = '3px solid red';
paragraph.innerHTML = 'I am a paragraph with <strong>Bold</strong> text.';

body.appendChild(paragraph)

newToDo.textContent = 'Do homework.';
otherToDo1.textContent = 'Fetch Water';
otherToDo2.textContent = 'Mop house.';
anotherToDo.textContent = 'Pay bills.';

toDoList.appendChild(newToDo);
toDoList.appendChild(otherToDo1);
toDoList.appendChild(otherToDo2);
toDoList.insertBefore(anotherToDo, toDoList.firstElementChild);
