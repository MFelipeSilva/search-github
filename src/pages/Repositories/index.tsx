import React, { useEffect } from "react";
import * as Styles from "./styles";
import { ContentRepos } from "../../components/ContentRepos";

import { storeRepositories } from "../../redux/repositories/actions";

import { useRepository } from "../../hooks/repos";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";


export const Repositories = () => {
  const dispach = useAppDispatch();
  const { name } = useAppSelector((rootReducer) => rootReducer.nameReducer);

  const { data } = useRepository(name)

  useEffect(() => {
    if(name) {
      dispach(storeRepositories(data));
    }
  })

  return (
    <Styles.Container>
      <ContentRepos />
    </Styles.Container>
  );
};
