import {Card, CardContent, Typography} from "@mui/material";
import Todo from "../../services/todo.tsx";


interface TodoCardProps {
    todo: Todo
}

export function TodoCard({todo}: TodoCardProps) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom sx={{color: 'text.secondary', fontSize: 14}}>
                    id: {todo.id}
                </Typography>
                <Typography variant="h5" component="div">
                    title: {todo.title}
                </Typography>
                <Typography sx={{color: 'text.secondary', mb: 1.5}}>adjective</Typography>
                {(todo.description || todo.description !== "")
                    &&
                    <Typography variant="body2">
                        {todo.description}
                    </Typography>
                }
            </CardContent>
        </Card>
    )
}

export default TodoCard;