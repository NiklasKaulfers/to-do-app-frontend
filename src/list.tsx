import {IToDo} from "@/src/todo";

export interface IList {
    id: string;
    name: string;
    toDos: string[];
}

export interface IListWithToDos {
    id: string;
    name: string;
    toDos: IToDo[];
}