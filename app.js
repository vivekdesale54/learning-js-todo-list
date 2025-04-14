//Selectors
const button = document.querySelector('.submit');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');


//Event Listeners
button.addEventListener('click', addTodo);


//Functions

function addTodo(event) {
    event.preventDefault();
    //Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
     
//Create li 
    const newitem = document.createElement('li');
    newitem.innerText = 'hey';
    newitem.classList.add('todo-item');
    todoDiv.appendChild(newitem);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; 
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
   
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-check"></i>'; 
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

}
