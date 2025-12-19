'use client'
import Navbar from "@/app/components/navbar";
import {Box, Button, Typography} from "@mui/material";

export default function Home() {
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
