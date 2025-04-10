import { makeAutoObservable } from 'mobx';

class TodoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text) {
        if (text.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false,
            };
            this.todos.push(newTodo);
        }
    }

    toggleTodoCompletion(id) {
        const todo = this.todos.find((item) => item.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    removeTodo(id) {
        this.todos = this.todos.filter((item) => item.id !== id);
    }
}

const todoStore = new TodoStore();

export default todoStore;
