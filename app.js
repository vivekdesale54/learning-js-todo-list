//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.submit');
const todoList = document.querySelector('.todo-list');


//Add event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItems);

//Funtions

function addTodo(event) {
    //Prevent defaultw
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //Todo li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todoLi');
    todoLi.innerText = todoInput.value;
    todoDiv.appendChild(todoLi);

    //Check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
};


// //Delebuttonte items
function DeleteItems(e) {
    const item = e.target;
     //Delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    };
};
//delete todo

function deleteItems(e) {
    const item = e.target;
    //Delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    };
};

