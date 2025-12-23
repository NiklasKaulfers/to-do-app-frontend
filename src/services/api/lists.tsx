export interface GetListsResponse {
    id: string;
    name: string;
    inLists?: string[]
}


export async function getLists(token: string): Promise<GetListsResponse[] | undefined> {
    const response: Response = await fetch(import.meta.env.VITE_API_URL! + "/Lists", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
    console.dir(response)
    if (response.status == 200) {
        return await response.json() as GetListsResponse[]
    }
    return undefined;
}

export function listFromAwsAttrResponse() {

}