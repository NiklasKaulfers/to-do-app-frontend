import {useNavigate, useParams} from "react-router-dom";
import {type FormEvent, useEffect, useState} from "react";
import {deleteTodo, getTodo} from "../../services/api/todos.tsx";
import Todo from "../../services/todo.tsx";
import AuthHandler from "../../services/auth-service.tsx";
import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";

export default function TodoDetails() {
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();
    const [todo, setTodo] = useState<Todo>();

    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        (async () => {
            const idToken = AuthHandler.getAuthContext().user?.id_token;
            if (!idToken) {
                console.error("Invalid Auth Token");
                return;
            }

            if (!id) return;

            const getTodoResponse: Todo = await getTodo(idToken, id);

            setTodo(getTodoResponse);
            setTitle(getTodoResponse.title);
            setDescription(getTodoResponse.description);
            setIsCompleted(getTodoResponse.isCompleted);
        })();
    }, [id])

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        const idToken: string | undefined = AuthHandler.getAuthContext().user?.id_token;

        if (!idToken) {
            setError("Value faulty");
            return;
        }

        const toDoId: string | undefined = todo?.id;

        if (!toDoId) {
            return;
        }

        const response = await fetch(import.meta.env.VITE_API_URL! + "/ToDo/" + toDoId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": idToken
            },
            body: JSON.stringify({
                title: title,
                description: description || undefined,
                isCompleted: isCompleted,
            }),
        });

        if (!response.ok) {
            setError("Response was not successfully saved!");
            setLoading(false);
            return;
        }
        setLoading(false);
        setError("");
        setSuccess(true);
    }

    const handleDelete = async () => {
        const idToken: string | undefined = AuthHandler.getAuthContext().user?.id_token;

        if (!idToken) {
            return;
        }

        if (!id) {
            return;
        }

        const response = await deleteTodo(idToken, id);
        if (response instanceof Error) {
            return;
        } else {
            navigate("/todos/view")
        }
    }

    return (

        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{maxWidth: 400, mx: "auto", mt: 4}}>
            <Typography
                variant="h4"
                content="create a new todo"
            >
                update an existing todo
            </Typography>
            <Typography variant="body2">
                {todo?.id}
            </Typography>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
                margin="normal"
            />

            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={3}
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={isCompleted}
                        onChange={(e) => setIsCompleted(e.target.checked)}
                    />
                }
                label="is completed"
            />

            <Button
                type="submit"
                variant="contained"
                sx={{mt: 2}}
                disabled={!title}
            >
                update
            </Button>
            {
                success && (
                    <Typography
                        variant="body1"
                        component="p"
                        className="text-green-500"
                    >
                        successfully updated todo
                    </Typography>
                )
            }
            {
                error && (
                    <Typography
                        variant="body1"
                        component="p"
                        className="text-red-600"
                    >
                        an error happened during update
                    </Typography>
                )
            }
            {
                loading && (
                    <Typography
                        variant="body1"
                        component="p"
                        className="text-orange-600"
                    >
                        loading...
                    </Typography>
                )
            }
            <Button
            variant="contained"
            color="secondary"
            sx={{mt: 2}}
            href="/todos/view"
            >
                back to view
            </Button>
            <Button
            variant="contained"
            color="error"
            sx={{mt: 2}}
            onClick={handleDelete}
            >
                delete
            </Button>
        </Box>

    )
}