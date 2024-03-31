import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { NewsProvider } from "./context/newsInfoContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <NewsProvider>
          <App />
        </NewsProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
