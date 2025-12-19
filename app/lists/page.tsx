'use client'
import React from "react";
import Link from "next/link";
import {Box} from "@mui/material";
import Navbar from "@/app/components/navbar";

export function Lists(): React.ReactElement {
    return (
        <>
            <Box>
                <Navbar/>
            </Box>
            <h1>Hello world</h1>
            <Link href={{
                pathname: "/lists/123",
                query: {
                    Id: 123,
                    inLists: [
                        "1",
                        "2"
                    ],
                    isComplete: false,
                    title: "test"
                }
            }}> to list 123 </Link>
            <Link href="/">back to root</Link>
        </>
    )
}

export default Lists;