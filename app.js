//selectors
const  button = document.querySelector('.submit');
const todoList = document .querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');




//Event listeners 
button.addEventListener('click', addTodo);
todoList.addEventListener('click', DeleteItems);

//Functions 

function addTodo(e) {
    e.preventDefault();
    //Create Todo div a
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li 
    const todoLi =document.createElement('li');
    todoLi.classList.add('todo-item');
    todoLi.innerText = todoInput.value;
    todoDiv.appendChild(todoLi);
    //Check mark button

    const completebutton = document.createElement('button');
    completebutton.innerHTML = '<i class="fas fa-check"></i>';
    completebutton.classList.add('complete-btn');
    todoDiv.appendChild(completebutton);

    //check trash button
    const trashbutton = document.createElement("trashbutton");
    trashbutton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashbutton.classList.add('trash-btn');
    todoDiv.appendChild(trashbutton);

    //Append to list
    todoList.appendChild(todoDiv);
    //Clear todo input value 
    todoInput.value =  '';
}

//Delebuttonte items
function DeleteItems(event) {
    const item = event.target;
     //Delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
}

//Check mark


    if(item.classList[0] === 'completebutton') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
