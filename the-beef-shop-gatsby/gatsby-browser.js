import React from "react";
import Layout from "./src/components/Layout";
import { OrderProvider } from "./src/components/OrderContext";
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

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
