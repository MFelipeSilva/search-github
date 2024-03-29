import React from "react";

import { Input } from "../Input";
import * as Styles from "./styles";
import image from "../../assets/exampleimage.png";

import { useAppSelector } from "../../hooks/hooks";

import { FaUsers, FaBookmark, FaPaperPlane} from "react-icons/fa";


export const ContentHome = () => {
  const { data }  = useAppSelector(rootReducer => rootReducer.userReducer)

  return (
    <Styles.Container>
      <img src={data?.avatar_url || image} alt="imagem"/>
      <h2>{`@${data?.login || "username"}`}</h2>

      <Styles.Smalls>
        <small><FaBookmark />{`${data?.public_repos || 0} repositories`}</small>
        <small><FaUsers /> {`${data?.followers || 0} follower`}</small>
        <small><FaPaperPlane />{`${data?.following || 0} following`}</small>
      </Styles.Smalls>

      <Input />
    </Styles.Container>
  );
};