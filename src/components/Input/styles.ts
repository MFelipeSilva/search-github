import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    position: absolute;
    width: 23em;
    min-height: 3em;
    padding: 0 15px;

    color: #fff;
    font-size: 12pt;

    background: none;
    border-radius: 8px;
    border: 2px solid #fff;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5)
  }

  button {
    z-index: 1;
    width: 20px; 

    border: none;
    cursor: pointer;
    background: none;
    margin-left: 300px;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: #fff;
  font-size: 15px;
`;
