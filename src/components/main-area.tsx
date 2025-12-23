import {Box, Button, Typography} from "@mui/material";

export function MainArea() {
    return (
        <Box>
            <Box
                className="items-center
            text-center
            flex
            justify-center
            flex-col
            m-24
            gap-2
            "
            >
                <Typography
                    variant="h1"
                    className="m-24"
                >
                    to do app
                </Typography>
                <Button
                    href="/lists"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    lists
                </Button>
                <Button
                    href="/todos"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    todos
                </Button>
            </Box>
        </Box>
    )
}

export default MainArea;