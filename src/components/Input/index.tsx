import React, { useState, KeyboardEvent } from "react";

import * as Styles from "./styles";

interface Props {
  searchUser: (userName: string) => Promise<void>;
}

export const Input = ({ searchUser }: Props) => {
  const [userName, setUserName] = useState("");

  const handleKeyEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      searchUser(userName);
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
        onClick={() => searchUser(userName)}
      >
        <Styles.SearchIcon />
      </button>
    </Styles.Container>
  );
};
