import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    padding: 10px;
    border-radius: 50%;
    border: 3px solid #fff;

    width: 280px;
    height: 280px;
  }

  h2 {
    color: rgba(255, 255, 255, 0.9);
    margin: 20px 0 10px;
  }
`;

export const Smalls = styled.div`
  display: flex;
  margin: 0 0 40px;
  align-items: center;
  flex-direction: row;

  small {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
  }

  svg {
    margin-right: 5px;
  }

  small + small {
    margin-left: 30px;
  }
`;
