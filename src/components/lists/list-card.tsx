import {Button, Card, CardContent, Typography} from "@mui/material";
import type {GetListsResponse} from "../../services/api/lists.tsx";

interface ListCardProps {
    list?: GetListsResponse
}

export default function ListCard({list}: ListCardProps) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom sx={{color: 'text.secondary', fontSize: 14}}>
                    id: {list?.id}
                </Typography>
                <Typography variant="h5" component="div">
                    name: {list?.name}
                </Typography>
            </CardContent>
            <Button variant="contained" color="secondary" href={`/lists/` + list?.id}>
                go to {list?.name}
            </Button>
        </Card>
    )
}