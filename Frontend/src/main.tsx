import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./theme.ts";
import Layout from "./Layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <Layout>
            <App />
         </Layout>
      </ChakraProvider>
   </React.StrictMode>,
);
