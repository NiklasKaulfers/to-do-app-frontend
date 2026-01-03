import {Box, Typography} from "@mui/material";
import type {FormEvent} from "react";

export default function AttachTodoToList() {
    const callApi = async (event: FormEvent) => {
        event.preventDefault();

    }

    return (
        <>
            <Typography
                variant="h4"
            >
                Attach existing todo to list
            </Typography>
            <Box
                component="form"
                onSubmit={callApi}
            >

            </Box>
        </>
    )
}