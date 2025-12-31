import {type FormEvent, useState} from "react";
import {useMediaQuery} from "@mui/system";
import * as uuid from "uuid";
import AuthHandler from "../../services/auth-service.tsx";
import AuthError from "../../errors/auth-error.tsx";
import {Box, Button, TextField, Typography} from "@mui/material";

export default function CreateList() {
    const [title, setTitle] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    useMediaQuery("(prefers-color-scheme: dark )")

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const id: string = uuid.v6();

        const idToken: string | undefined = AuthHandler.getAuthContext().user?.id_token;

        if (!idToken) throw new AuthError("Invalid Auth Token");

        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response: Response = await fetch(import.meta.env.VITE_API_URL! + "/List", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": idToken
                },
                body: JSON.stringify({
                    list: id,
                    name: title,
                }),
            });
            console.dir(response);
            if (!response.ok) {
                const message = await response.text();
                throw new Error(message || `Request failed (${response.status})`);
            }

            setSuccess(true);
            setTitle("");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError("Something went wrong")
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{maxWidth: 400, mx: "auto", mt: 4}}>
            <Typography
                variant="h4"
                content="create a new list"
            >
                create a new list
            </Typography>
            <TextField
                label="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
                margin="normal"
            />

            <Button
                type="submit"
                variant="contained"
                sx={{mt: 2}}
                disabled={!title}
            >
                Submit
            </Button>
            {
                success && (
                    <Typography
                        variant="body1"
                        component="p"
                        className="text-green-500"
                    >
                        successfully created list
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
                        an error happened during creation
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
        </Box>
    );
}