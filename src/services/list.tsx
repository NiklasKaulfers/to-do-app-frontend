import type Todo from "./todo.tsx";


interface ListProps {
    id: string;
    name: string;
    todos?: Todo[]
}


export default class List {
    id: string;
    name: string;
    todos: Todo[];


    constructor(props: ListProps) {
        this.id = props.id;
        this.name = props.name
        this.todos = props.todos ?? [];
    }

    addTodo(todo: Todo){
        this.todos.push(todo);
    }
}