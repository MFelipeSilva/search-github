import React from "react";
import { Container } from "./styles";
import { ContentRepos } from "../../components/ContentRepos";

interface Props {
  repos: any[];
}

export const Repositories = ({ repos }: Props) => {
  return (
    <Container>
      <ContentRepos repositories={repos} />
    </Container>
  );
};
