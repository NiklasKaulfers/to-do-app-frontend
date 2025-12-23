import type {GetToDoResponse} from "./api/todos.tsx";

interface TodoProps {
    title: string;
    description: string;
    id: string;
    isCompleted: boolean;
    inListsId?: string[];
}


export default class Todo {
    title: string;
    description: string;
    id: string;
    isCompleted: boolean;
    inLists: string[]

    constructor(props: TodoProps) {
        this.title = props.title;
        this.description = props.description;
        this.id = props.id;
        this.isCompleted = props.isCompleted;
        this.inLists = props.inListsId ?? []
    }

    protected addToList(list: string) {
        this.inLists.push(list);
    }
}

export function toDoFromGetTodoResponse(getTodoResponse: GetToDoResponse): Todo {
    return new Todo({
        id: getTodoResponse.Id.S,
        description: getTodoResponse.description.S,
        title: getTodoResponse.title.S,
        isCompleted: getTodoResponse.isCompleted.BOOL
    })
}