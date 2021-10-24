import {todoList} from "./tasklist.js";

export default class Todos {
    constructor(parentID, listID) {
        this.parentElement = document.getElementById(parentID);
        this.listElement = document.getElementById(listID);
    }

    showTodoList() {
        renderTodoList(this.listElement, todoList);
    }

    
   
} //end class definition


function renderTodoList(listElement, todoList) {
    listElement.innerHTML = '';
    todoList.forEach(todo => renderOneTask(listElement, todo));
}

function renderOneTask(todoElement, todo) {
    let node = document.createElement('DIV');
    let textnode = document.createTextNode(todo.content);
    node.appendChild(textnode);
    node.classList.add("todoCard");
    todoElement.appendChild(node);
}

function genId() {
    const id = Date.now;
    return id;
}

const actionButton = document.getElementById('add-button');
actionButton.addEventListener('click', (e) => {
    e.preventDefault();
    addNewTask();
});
function addNewTask() {
    const newContent = document.getElementById('new-content').value;
    const newId = genId();
    todoList.push({content:newContent,id:newId,completed:false,deleted:false});
    const listElement = document.getElementById('todo-container');
    renderTodoList(listElement, todoList);
}








    