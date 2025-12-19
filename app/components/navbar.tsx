'use client'
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

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
                    <Button href="/" color="inherit" component={Link} sx={{ flexGrow: 1 }}>
                        <Typography  variant="h6" sx={{ flexGrow: 1 }}>
                            to do app
                        </Typography>
                    </Button>
                    <Button href="/todos" color="inherit">todos</Button>
                    <Button href="/lists" color="inherit">lists</Button>
                    <Button color="inherit">logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}