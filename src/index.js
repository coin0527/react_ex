import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyled } from "./style/GlobalStyled";
import _theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Modaldemo } from "./components/Modaldemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <GlobalStyled />
      <App />
      <Modaldemo />
    </ChakraProvider>

    {/* @fontsource/noto-sans-kr 폰트는 이거 설치해줘야함 */}
    {/* npm install @fontsource/noto-sans-kr */}
  </React.StrictMode>
);
