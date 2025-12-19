'use client'
import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Box, Typography} from "@mui/material";
import Navbar from "@/app/components/navbar";

interface IListWithToDos {
    id: string;
    name: string;
}

function List(params: IListWithToDos): React.ReactElement {
    return (
        <>
            <Box>
                <Navbar/>
            </Box>
            <Typography variant="h4" component="div">{params.name}</Typography>
            <Typography variant="overline">{params.id}</Typography>
            <DataGrid
                columns={[{field: "id"},{ field: "title" }, {field: "description"}, {field: "isCompleted"} ]}
                rows={[]}
                sx={{ '--DataGrid-overlayHeight': '300px' }}
            >
            </DataGrid>
        </>
    )
}


export default List;