'use client'
import {FormEvent, useState} from "react";
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Box, Typography,
} from "@mui/material";
import * as uuid from 'uuid';
import {useMediaQuery} from "@mui/system";
import Navbar from "@/app/components/navbar";

export default function ToDo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [checked, setChecked] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    useMediaQuery("(prefers-color-scheme: dark )")

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const id = uuid.v6();

        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response = await fetch("https://3ypk90fn88.execute-api.eu-central-1.amazonaws.com/prod/ToDo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    toDoId: id,
                    title: title,
                    description: description || undefined,
                    isCompleted: checked,
                }),
            });
            console.dir(response);
            if (!response.ok) {
                const message = await response.text();
                throw new Error(message || `Request failed (${response.status})`);
            }

            setSuccess(true);
            setTitle("");
            setDescription("");
            setChecked(false);
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
        <>
            <Box>
                <Navbar/>
            </Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
                <Typography
                    variant="h4"
                    content="create a new todo"
                >
                    create a new todo
                </Typography>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                    }
                    label="is completed"
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2 }}
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
                            successfully created todo
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
            </Box>
        </>
    );
}
