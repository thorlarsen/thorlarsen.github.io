class TodoView {
    renderTodoList(todoListElement, todoList) {
        todoList.forEach(todo => {
            todoListElement.appendchild(this.renderOneTodo(todo));
        });
    }

    renderOneTodo(todo) {
        const item = document.createElement('div');
        item.innerHTML = todo.content;
        return item;
    }

}

export default TodoView;