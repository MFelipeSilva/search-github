import React, { useState } from "react";

import { Container } from "./styles";

import { UserProps } from "../../types/user";
import client from "../../services/client";

import { Repositories } from "../Repositories";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { ContentHome } from "../../components/ContentHome";

import { getUserData } from "../../redux/user/actions";
import { useAppDispatch } from "../../hooks/hooks";


export const Home = () => {
  const dispach = useAppDispatch()
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

      dispach(getUserData(userData));

      if (dataRepo) {
        setScroll("scroll");
      }

      setRepos(dataRepo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ContentHome searchUser={searchUser} />
      <Repositories repos={repos} />
      <GlobalStyles SetOverflow={scroll} />
    </Container>
  );
};
