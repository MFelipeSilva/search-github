import React, { useState } from "react";

import { Container } from "./styles";

import { UserProps } from "../../types/user";
import { client } from "../../services/client";

import { Repositories } from "../Repositories";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { ContentHome } from "../../components/ContentHome";

interface ScrollProps {
  setScroll: any;
}

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState([]);
  const [scroll, setScroll] = useState("hidden");

  const searchUser = async (userName: string) => {
    try {
      const response = await client.get(userName);
      const resRepositories = await client.get(`${userName}/repos`);

      const data = response.data;
      const dataRepo = resRepositories.data;
      const { avatar_url, login, followers, following, public_repos } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        followers,
        following,
        public_repos,
      };

      if (dataRepo) {
        setScroll("scroll");
      }

      setUser(userData);
      setRepos(dataRepo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ContentHome searchUser={searchUser} user={user} />
      <Repositories repos={repos} />
      <GlobalStyles SetOverflow={scroll} />
    </Container>
  );
};
