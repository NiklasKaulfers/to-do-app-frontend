import {Button, Typography} from "@mui/material";

export function Lists() {
    return (
        <>
            <Typography
                variant="h4"
                component="div"
            >
                lists
            </Typography>
            <Button
                variant="contained"
                color="primary"
                href="/lists/view"
            >
                view lists
            </Button>
            <Button
                variant="contained"
                color="primary"
                href="/lists/new"
            >
                create list
            </Button>
        </>
    )
}

export default Lists;