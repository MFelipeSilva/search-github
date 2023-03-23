import { QueryKey } from "react-query";

export const createRepositoryKey = (username: string): QueryKey => ["repos", username];
