const todoList = document.querySelector('.todo-list');

const todoInput = document.querySelector('.todo-input');

const todoItems = document.querySelector('.todo-items');

const taskButton = document.getElementById('taskbtn');

// start empty
let tasks = [];

// listen for submit
todoList.addEventListener('submit', function(event) {
  event.preventDefault();
  addTask(todoInput.value); 
});

/* taskButton.addEventListener('click', function(event) {
  event.preventDefault();
  const todoInput = document.querySelector('.todo-input');
  addTask(todoInput.value);
  
}); */

// Let's start adding tasks
function addTask(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    tasks.push(todo);
    addToLocalStorage(tasks); 

    todoInput.value = '';
  }
}

//Render to the screen
function renderTaskList(todos) {
  todoItems.innerHTML = '';

  todos.forEach(function(item) {
    const checked = item.completed ? 'checked': null;
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItems.append(li);
  });

}

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTaskList(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  
  if (reference) {
    
    todos = JSON.parse(reference);
    renderTaskList(todos);
  }
}

function toggle(id) {
  todos.forEach(function(item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

function deleteTodo(id) {
  todos = todos.filter(function(item) {
    return item.id != id;
  });

  addToLocalStorage(todos);
}

getFromLocalStorage();

todoItems.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});