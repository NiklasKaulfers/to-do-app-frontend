import Todo from "../todo.tsx";

export interface GetToDoResponse {
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

export interface GetTodosResponse {
    "Id": string
    "description": string
    "title": string
    "isCompleted": boolean
}

export async  function getAllTodos(token: string): Promise<GetToDoResponse[]> {
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

    return await response.json() as GetToDoResponse[];
}

export async function getTodo(token: string, id: string): Promise<Todo> {
    const response = await fetch(import.meta.env.VITE_API_URL! + "/ToDo/" + id,
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

    const responseJson = await response.json();

    return new Todo({
        id: responseJson.Id!,
        title: responseJson.title!,
        isCompleted: responseJson.isCompleted!,
        description: responseJson.description!,
    });
}