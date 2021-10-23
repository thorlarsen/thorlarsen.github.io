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








    