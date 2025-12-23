
interface ListProps {
    id: string;
    name: string;
    todos?: string[]
}


export default class List {
    id: string;
    name: string;
    todos: string[];


    constructor(props: ListProps) {
        this.id = props.id;
        this.name = props.name
        this.todos = props.todos ?? [];
    }

    addTodo(todoId: string){
        this.todos.push(todoId);
    }
}