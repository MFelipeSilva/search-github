import React, { useState } from "react";

import * as Styles from "./styles";

import { UserProps } from "../../types/user";
import client from "../../services/client";

import { Repositories } from "../Repositories";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { ContentHome } from "../../components/ContentHome";

import { getUserData } from "../../redux/user/actions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getRepositories } from "../../redux/repositories/actions";

export const Home = () => {
  const dispach = useAppDispatch();
  const [scroll, setScroll] = useState("hidden");
  const { name } = useAppSelector((rootReducer) => rootReducer.nameReducer);

  const searchUser = async () => {
    try {
      const response = await client.get(name);
      const resRepositories = await client.get(`${name}/repos`);

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
      dispach(getRepositories(dataRepo));

      if (dataRepo) {
        setScroll("scroll");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (name) {
    searchUser();
  }

  return (
    <Styles.Container>
      <ContentHome />
      <Repositories />
      <GlobalStyles SetOverflow={scroll} />
    </Styles.Container>
  );
};
