//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.submit');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

 
//Add event listeners
document.addEventListener('DOMContentLoaded', gettodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItems);
filterOption.addEventListener('click', filterTodo);

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
    //Save to local
    saveLocalTodos(todoInput.value);

    //Check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //CLear todo input value
    todoInput.value = '';
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

        //Anitmation
        todo.classList.add('fall');
        //Remove from local storage
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    //Check mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
} 

//Flitertodo

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo)  {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                 if(todo.classList.contains("completed")) {
                    todo.style.display = 'flex'; 
                 } else {
                    todo.style.display = 'none';
                 }
                 break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = 'else';
                } else {
                    todo.style.display = "none";
                }
                break;
        }

    });
}


function saveLocalTodos(todo) {
     //Check -- Hey do I already have things in there?
     let todos;
     if(localStorage.getItem ("todos") === null) {
         todos = [];
     } else {
         todos = JSON.parse(localStorage.getItem("todos")); 
     }
     todos.push(todo);
     localStorage.setItem("todos", JSON.stringify(todos));
}

function gettodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos")); 
    }
    todos.forEach(function(todo)
    { 
         //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //Todo li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todoLi');
    todoLi.innerText = todo;
    todoDiv.appendChild(todoLi);

    //Check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
    });
    //Todo div)
}

function removeLocalTodos(todo) {
         //Check -- Hey do I already have things in there?
    let todos;
    if(localStorage.getItem ("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); 
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}