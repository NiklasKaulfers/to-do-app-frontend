import {getAllTodos, type GetTodoResponse} from "../../services/api/todos.tsx";
import {useEffect, useState} from "react";
import {toDoFromGetTodoResponse} from "../../services/todo.tsx";
import {Typography} from "@mui/material";
import TodoCard from "./todo-card.tsx";
import AuthHandler from "../../services/auth-service.tsx";

export function GetTodos() {
    const [todos, setTodos] = useState<GetTodoResponse[]>([]);

    useEffect(() => {
        (async () => {
            const idToken = AuthHandler.getAuthContext().user?.id_token;
            if (!idToken) {
                console.error("Invalid Auth Token");
                setTodos([]);
                return;
            }

            const getTodosResponse = await getAllTodos(idToken);
            setTodos(getTodosResponse);
        })();
    }, []);


    return (
        <>
            <Typography variant="h4"
                        color="textPrimary">
                all todos
            </Typography>
            {todos.map((todo: GetTodoResponse) =>
                (
                    <TodoCard
                        key={todo.Id.S}
                        todo={toDoFromGetTodoResponse(todo)} />
                ))
            }
        </>
    )
}

export default GetTodos;