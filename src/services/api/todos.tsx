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

export async function getAllTodos(token: string): Promise<GetToDoResponse[]> {
    const response = await fetch(import.meta.env.VITE_API_URL! + "/ToDos", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
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

export async function deleteTodo(token: string, id: string): Promise<boolean | Error> {
    const response = await fetch(import.meta.env.VITE_API_URL! + "/ToDo/" + id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }
    );
    if (response.status !== 204) {
        console.dir(response);
        return new Error(`Request failed (${response.status})`);
    }
    return true;
}