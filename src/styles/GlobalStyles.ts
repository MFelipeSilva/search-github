import { createGlobalStyle } from "styled-components";

interface PropsOverflow {
  SetOverflow: string
}

export const GlobalStyles = createGlobalStyle<PropsOverflow>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }

  body {
    width: 100%;
    height: 200vh;
    overflow-y: ${( props ) => props.SetOverflow };
    background: linear-gradient(80deg, #261132, #7d387d, #c45baa);
    background-size: 140%;
    background-attachment: fixed;


    @media (max-width: 1135px) {
      height: 100vh;
    }

    @media (max-width: 775px) {
      height: 400vh;
    }
  }

  body::-webkit-scrollbar {
    width: 12px;
    background: #B96AC9;
  }

  body::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;
