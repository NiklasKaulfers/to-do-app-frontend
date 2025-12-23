import type {GetTodoResponse} from "./api/todos.tsx";

interface TodoProps {
    title: string;
    description: string;
    id: string;
    isCompleted: boolean;
}


export default class Todo {
    title: string;
    description: string;
    id: string;
    isCompleted: boolean;

    constructor(props: TodoProps) {
        this.title = props.title;
        this.description = props.description;
        this.id = props.id;
        this.isCompleted = props.isCompleted;
    }



}

export function toDoFromGetTodoResponse(getTodoResponse: GetTodoResponse): Todo {
    return new Todo({
        id: getTodoResponse.Id.S,
        description: getTodoResponse.description.S,
        title: getTodoResponse.title.S,
        isCompleted: getTodoResponse.isCompleted.BOOL
    })
}