
interface AddToDoToListProps {
    token: string,
    todoId: string,
    listId: string
}

export async function addToDoToList(props: AddToDoToListProps) {

    const response: Response = await fetch('/lists', {
        body: JSON.stringify({
            listElement: props.listId,
            toDo: props.todoId,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': props.token,
        },
        method: 'POST',
    })
    return response.status === 200;
}