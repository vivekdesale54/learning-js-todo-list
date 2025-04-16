// //selectors
// const  button = document.querySelector('.submit');
// const todoList = document .querySelector('.todo-list');
// const todoInput = document.querySelector('.todo-input');
// const filterTodo = document.querySelector('.filter-todo');



// //Event listeners 
// button.addEventListener('click', addTodo);
// todoList.addEventListener('click', DeleteItems);

// //Functions 

// function addTodo(e) {
//     e.preventDefault();
//     //Create Todo div a
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
//     //Create li 
//     const todoLi =document.createElement('li');
//     todoLi.classList.add('todo-item');
//     todoLi.innerText = todoInput.value;
//     todoDiv.appendChild(todoLi);
//     //Check mark button

//     const completebutton = document.createElement('button');
//     completebutton.innerHTML = '<i class="fas fa-check"></i>';
//     completebutton.classList.add('complete-btn');
//     todoDiv.appendChild(completebutton);

//     //check trash button
//     const trashbutton = document.createElement("trashbutton");
//     trashbutton.innerHTML = '<i class = "fas fa-trash"></i>';
//     trashbutton.classList.add('trash-btn');
//     todoDiv.appendChild(trashbutton);

//     //Append to list
//     todoList.appendChild(todoDiv);
//     //Clear todo input value 
//     todoInput.value =  '';
// }

// //Delebuttonte items
// function DeleteItems(e) {
//     const item = e.target;
//      //Delete todo
//     if(item.classList[0] === 'trash-btn') {
//         const todo = item.parentElement;
//         todo.classList.add('fall');
//         todo.addEventListener('transitionend', function() {
//             todo.remove();
//         });
//     }
// }

// //Check mark


//     if(item.classList[0] === 'completebutton') {
//         const todo = item.parentElement;
//         todo.classList.toggle('completed');
//     }

//     function filterTodo(e) {
//         const todos = todoList.childNodes;
//         todos.forEach(function(todo){
//             switch(e.target.value) {
//                 case 'all':
//                     todo.style.display = 'flex';
//                     break;
//                 case 'completed':
//                     if(todo.classList.contains('completed')) {
//                         todo.style.display = 'flex';
//                     }else {
//                         todo.style.display = 'none';
//                     }
//             }
//         } 
            
//         );
//     }

// //Selectors 
// const todoButton = document.querySelector('.submit');
// const todoInput = document.querySelector('.todo-input');
// const todoList = document.querySelector('.todo-list');


// //Event Listners 
// todoButton.addEventListener('click', addTodo);



// //Funtions 

// function addTodo(e){
//     //Prevent default
//     e.preventDefault();
//     //Todo div add 
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
//     todoDiv.innerText = "hey";

//     //Create li 
//     const todoLi = document.createElement('li');
//     todoLi.classList.add('todo-item');
//     todoLi.innerText = todoInput.value;
//     todoDiv.appendChild(todoLi);

//     //Check button 
//     const completeButton = document.createElement('button');
//     completeButton.innerHTML = '<i class="fas fa-check"></i>';
//     completeButton.classList.add('complete-btn');
//     todoDiv.appendChild(completeButton);    
    

// }
 