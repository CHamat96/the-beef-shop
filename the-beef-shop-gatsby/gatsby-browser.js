import React from "react";
import Layout from "./src/components/Layout";
import GlobalStyles from "./src/styles/GlobalStyles";
import Typography from "./src/styles/Typography";

export function wrapPageElement({ element, props }) {
    return (
        <Layout {...props}>
            <GlobalStyles />
            <Typography />
            {element}
        </Layout>
    );
}
