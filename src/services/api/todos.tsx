
export interface GetTodoResponse {
    "Id": {
        "S": string
    },
    "description": {
        "S": string
    },
    "title": {
        "S": string
    },
    "isCompleted": {
        "BOOL": boolean
    }
}

export async  function getAllTodos(token: string): Promise<GetTodoResponse[]> {
    const response = await fetch(import.meta.env.VITE_API_URL! + "/ToDos",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }
    );
    console.dir(response);
    if (response.status !== 200) {
        const message = await response.text();
        throw new Error(message || `Request failed (${response.status})`);
    }

    return await response.json() as GetTodoResponse[];
}