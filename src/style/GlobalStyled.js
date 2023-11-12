import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1d1d1d",
  pointColor: "#F07B22",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        background-color: ${mainColors.blackColor};
        color: white;
        letter-spacing: -1px;
        word-break: break-all;
    }
    ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;
