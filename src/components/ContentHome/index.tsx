import React from "react";

import { Input } from "../Input";
import { Container, Smalls } from "./styles";

import image from "../../assets/exampleimage.png";
import { UserProps } from "../../types/user";
import { FaUsers, FaBookmark, FaPaperPlane} from "react-icons/fa";
import { useAppSelector } from "../../hooks/hooks";

interface Props {
  searchUser: (userName: string) => Promise<void>;
}

export const ContentHome = ({ searchUser }: Props) => {
  const { data }  = useAppSelector(rootReducer => rootReducer.userReducer)

  return (
    <Container>
      <img src={data?.avatar_url || image} alt={data?.login} />
      <h2>{`@${data?.login || "username"}`}</h2>

      <Smalls>
        <small><FaBookmark />{`${data?.public_repos || 0} repositories`}</small>
        <small><FaUsers /> {`${data?.followers || 0} follower`}</small>
        <small><FaPaperPlane />{`${data?.following || 0} following`}</small>
      </Smalls>

      <Input searchUser={searchUser} />
    </Container>
  );
};
