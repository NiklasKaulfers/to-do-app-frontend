import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getLists, type GetListsResponse} from "../../services/api/lists.tsx";
import AuthHandler from "../../services/auth-service.tsx";
import ListCard from "./list-card.tsx";

export default function ViewList() {
    const [lists, setLists] = useState<GetListsResponse[]>([]);

    useEffect(() => {
        (async () => {
            const idToken = AuthHandler.getAuthContext().user?.id_token;
            if (!idToken) {
                console.error("Invalid Auth Token");
                setLists([]);
                return;
            }

            const getListsResponse: GetListsResponse[] | undefined = await getLists(idToken);
            if (!getListsResponse) {
                console.error("No Lists");
                setLists([]);
                return;
            }
            setLists(getListsResponse);
        })();
    }, []);

    return (
        <>
            <Typography
                variant="h4"
            >
                all lists
            </Typography>
            {lists.map((list: GetListsResponse) =>
                (
                    <ListCard
                        key={list.id}
                        list={list} />
                ))
            }
        </>
    )
}