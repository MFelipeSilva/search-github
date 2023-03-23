import React from "react";
import * as Styles from "./styles";

import { FaBook, FaCodeBranch, FaRegEye, FaStar } from "react-icons/fa";
import { useAppSelector } from "../../hooks/hooks";

import { Repository } from "../../redux/repositories/types";

export const ContentRepos = () => {
  const { dataRepository } = useAppSelector(rootReducer => rootReducer.repoReducer);

  return (
    <Styles.Container>
      <Styles.ListOfRepositories >
        {dataRepository?.map((repo: Repository) => (
          <Styles.Repo key={repo.id}>
            <h3>{repo?.name}</h3>
            { repo.language && <p><FaBook /> {repo?.language}</p>}

            <Styles.Card>
              <p>
                <FaStar /> {repo?.stargazers_count} stars
              </p>
              <p>
                <FaRegEye /> {repo?.watchers} watching
              </p>
              <p>
                <FaCodeBranch /> {repo?.forks} forks
              </p>
            </Styles.Card>

            <button key={repo.id}><a href={repo.html_url} target="_blank">see code</a></button>
          </Styles.Repo>
        ))}
      </Styles.ListOfRepositories>
    </Styles.Container>
  );
};
