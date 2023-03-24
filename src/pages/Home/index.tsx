import React, { useEffect } from "react";
import * as Styles from "./styles";

import { useUserData } from "../../hooks/users";
import { storeUserData } from "../../redux/user/actions";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { Repositories } from "../Repositories";
import { ContentHome } from "../../components/ContentHome";


export const Home = () => {
  const dispach = useAppDispatch();
  const { name } = useAppSelector((rootReducer) => rootReducer.nameReducer);

  const { data } = useUserData(name);
  
  useEffect(() => {
    dispach(storeUserData(data));
  })

  return (
    <Styles.Container>
      <ContentHome />
      <Repositories />
    </Styles.Container>
  );
};
