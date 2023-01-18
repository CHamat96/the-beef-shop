import { Link } from "gatsby";
import React from "react";

export default function ErrorPage(){
    return (
        <>
            <h2>Page Not Found</h2>
            <p>Return<Link to="/">Home</Link></p>
        </>
    )
}