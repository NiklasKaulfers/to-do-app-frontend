import React from "react";
import Link from "next/link";

export function Lists(): React.ReactElement {
    return (
        <>
            <h1>Hello world</h1>
            <Link href="/">back to root</Link>
        </>
    )
}

export default Lists;