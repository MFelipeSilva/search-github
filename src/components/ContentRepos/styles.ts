import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ListOfRepositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 4em 0 4em;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const Repo = styled.div`
  width: 320px;
  height: 390px;

  color: white;
  margin-bottom: 50px;
  padding: 0 20px 0;

  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  border: 2px solid #fff;
  background-color: none;
  box-shadow: rgb(0 0 0 / 15%) 7px 7px 6px;

  h3 {
    color: #fcdc4d;
    margin-bottom: 20px;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 5px;
  }

  button {
    a {
      color: #fff;
      text-decoration: none;
    }

    padding: 10px 35px 10px 35px;
    background: none;

    border-radius: 10px;
    transition: 500ms linear;
    border: 2px solid #ffd400;

    font-size: 11pt;

    &:hover {
      cursor: pointer;
      background: #ffd400;
    }
  }

  &  {
    margin-left: 25px;
    margin-right: 25px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  margin-bottom: 150px;

  p {
    font-size: 11pt;
    color: rgba(255, 255, 255, 0.7);
  }

  p + p {
    margin-left: 10px;
  }
  
`;

