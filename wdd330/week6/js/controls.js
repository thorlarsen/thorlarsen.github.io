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
  if (!todo.deleted) {
    let node = document.createElement('DIV');
    let textnode = document.createTextNode(todo.content);
    node.appendChild(textnode);
    node.classList.add("todoCard");
    let doneButton = document.createElement('button');
    doneButton.innerHTML = "Done";
    if (todo.completed) { doneButton.classList.add("hiddenbtn","donebtn")}
    else {doneButton.classList.add("donebtn")};
    node.appendChild(doneButton);
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "X";
    if (todo.completed) { deleteButton.classList.add("hiddenbtn","delbtn")}
    else {deleteButton.classList.add("delbtn")};
    node.appendChild(deleteButton);
    todoElement.appendChild(node);
  }
}

function genId() {
    const idNum = Date.now();
    return idNum;
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addNewTask();
});
function addNewTask() {
    const newContent = document.getElementById('new-content').value;
    const newId = genId();
    todoList.push({content:newContent,id:newId,completed:false,deleted:false});
    const listElement = document.getElementById('todo-container');
    renderTodoList(listElement, todoList);
    outputList(todoList);
}
 
function outputList(todoList) {
    const todoJSONstring = JSON.stringify(todoList);
    console.log(todoJSONout);
}








    