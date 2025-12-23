import {Button} from "@mui/material";

export function TodoMain() {
    return (
        <div
        className="flex justify-center gap-5"
        >
            <Button
                variant="contained"
                color="primary"
                href="/todos/new"
            >
                create to do
            </Button>
            <Button
                variant="contained"
                color="primary"
                href="/todos/view"
            >
                view to dos
            </Button>
        </div>
    )
}

export default TodoMain;