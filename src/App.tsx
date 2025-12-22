import './App.css'
import {Box, Button, Typography} from "@mui/material";
import Navbar from "./components/navbar.tsx";
import {type AuthContextProps, useAuth} from "react-oidc-context";
import AuthHandler from "./services/auth-service.tsx";
import {Route, Routes} from "react-router-dom";
import Todos from "./components/todos.tsx";
import Lists from "./components/lists.tsx";

function App() {

    const auth: AuthContextProps = useAuth();
    AuthHandler.setAuthContext(auth);

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <>
                <Routes>
                    <Route path="/todos" element={<Todos/>}/>
                    <Route path="/lists" element={<Lists/>}/>
                </Routes>
                <Box>
                    <Navbar/>
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
            </>

        );
    }
    return (
        <div>
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
            <button onClick={() => AuthHandler.signOut()}>Sign out</button>
        </div>
    );
}

export default App
