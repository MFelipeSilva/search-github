import React from "react";

import { Container, ListOfRepositories, Repo } from "./styles";
import { FaBook, FaCodeBranch, FaRegEye, FaStar } from "react-icons/fa";

interface Props {
  repositories: any[];
}

export const ContentRepos = ({ repositories }: Props) => {
  return (
    <Container>
      <ListOfRepositories >
        {repositories.slice(0, 12).map((repo) => (
          <Repo key={repo.id}>
            <h3>{repo?.name}</h3>
            { repo.language && <p><FaBook /> {repo?.language}</p>}
            <div>
              <p>
                <FaStar /> {repo?.stargazers_count} stars
              </p>
              <p>
                <FaRegEye /> {repo?.watchers} watching
              </p>
              <p>
                <FaCodeBranch /> {repo?.forks} forks
              </p>
            </div>

            <button key={repo.id}><a href={repo.html_url} target="_blank">see code</a></button>
          </Repo>
        ))}
      </ListOfRepositories>
    </Container>
  );
};
