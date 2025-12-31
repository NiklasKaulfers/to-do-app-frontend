import {Button, Card, CardContent, Typography} from "@mui/material";
import type {GetListsResponse} from "../../services/api/lists.tsx";
import {useNavigate} from "react-router-dom";

interface ListCardProps {
    list?: GetListsResponse
}

export default function ListCard({list}: Readonly<ListCardProps>) {
    const navigate = useNavigate();
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
                {
                    (list?.inLists) &&
                    <CardContent>
                        {list.inLists.map((listId: string) => {
                            return (
                                <Typography
                                    variant="body1"
                                    onClick={ () => navigate("/todos/" + listId)}
                                >
                                    {listId}
                                </Typography>
                            )
                        })}
                    </CardContent>
                }
        </Card>
    )
}