import Todos from "./controls.js";

const myTodos = new Todos("todoApp", "todo-container");
window.addEventListener('load', () => {
    myTodos.showTodoList();
});