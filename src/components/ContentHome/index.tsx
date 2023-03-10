import React from "react";

import { Input } from "../Input";
import { Container, Smalls } from "./styles";

import image from "../../assets/exampleimage.png";
import { UserProps } from "../../types/user";
import { FaUsers, FaBookmark, FaPaperPlane} from "react-icons/fa";

interface Props {
  searchUser: (userName: string) => Promise<void>;
  user: UserProps | null;
}

export const ContentHome = ({ searchUser, user }: Props) => {
  return (
    <Container>
      <img src={user?.avatar_url || image} alt={user?.login} />
      <h2>{`@${user?.login || "username"}`}</h2>

      <Smalls>
        <small><FaBookmark />{`${user?.public_repos || 0} repositories`}</small>
        <small><FaUsers /> {`${user?.followers || 0} follower`}</small>
        <small><FaPaperPlane />{`${user?.following || 0} following`}</small>
      </Smalls>

      <Input searchUser={searchUser} />
    </Container>
  );
};
