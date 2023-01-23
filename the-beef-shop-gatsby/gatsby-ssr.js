import React from "react";
import Layout from "./src/components/Layout";
import GlobalStyles from "./src/styles/GlobalStyles";
import Typography from "./src/styles/Typography";
import { OrderProvider } from "./src/components/OrderContext";

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
