import React, { useState, KeyboardEvent } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addName } from "../../redux/saveName/actions";

import * as Styles from "./styles";

export const Input = () => {
  const dispach = useAppDispatch()
  const [userName, setUserName] = useState("");
  

  const handleKeyEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      dispach(addName(userName));
    }
  };

  return (
    <Styles.Container>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search user"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyEnter}
      />
      <button
        title="Title"
        onClick={() => dispach(addName(userName))}
      >
        <Styles.SearchIcon />
      </button>
    </Styles.Container>
  );
};
