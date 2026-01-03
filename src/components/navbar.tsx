import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import AuthHandler from "../services/auth-service.tsx";

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
                    <Button href="/" color="inherit" sx={{ flexGrow: 1 }}>
                        <Typography  variant="h6" sx={{ flexGrow: 1 }}>
                            to do app
                        </Typography>
                    </Button>
                    <Button href="/todos" color="inherit">todos</Button>
                    <Button href="/lists" color="inherit">lists</Button>
                    <Button href="/attach" color="inherit">attach</Button>
                    <Button color="inherit" onClick={AuthHandler.signOut}>logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}