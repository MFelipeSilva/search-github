import { useQuery, UseQueryOptions } from "react-query";
import client from "../../services/client";

import { createRepositoryKey } from "./keys";

import { Repository } from "../../redux/repositories/types";

export const useRepository = (username: string, options?: UseQueryOptions<Repository[]>) => {
  return useQuery(createRepositoryKey(username), () => client.get<Repository[]>(`${username}/repos?sort=created&per_page=12`).then((response) => response.data),
    options
  )
}