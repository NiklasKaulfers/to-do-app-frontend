import React from "react";
import Link from "next/link";

export function Lists(): React.ReactElement {
    return (
        <>
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