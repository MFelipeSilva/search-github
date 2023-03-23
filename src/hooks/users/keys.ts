import { QueryKey } from "react-query";

export const createUserKey = (username: string): QueryKey => ["users", username];