import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

export default function  Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        to do app
                    </Typography>
                    <Button href="/todos" color="inherit">todos</Button>
                    <Button href="/lists" color="inherit">lists</Button>
                    <Button color="inherit">logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}