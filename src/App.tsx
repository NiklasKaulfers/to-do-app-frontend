import './App.css'
import {Box, Button, Typography} from "@mui/material";
import Navbar from "./components/navbar.tsx";
import {type AuthContextProps, useAuth} from "react-oidc-context";

function App() {

    const auth: AuthContextProps = useAuth();

    const signOutRedirect = () => {
        const clientId = "74f06735fgqvbmqpt9g8t4f4p2";
        const logoutUri = import.meta.env.VITE_REDIRECT_URL!;
        const cognitoDomain = "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_W75hDAqdT";
        globalThis.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
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
        );
    }
    return (
        <div>
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
            <button onClick={() => signOutRedirect()}>Sign out</button>
        </div>
    );
}

export default App
