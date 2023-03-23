import { useQuery, UseQueryOptions } from "react-query";
import client from "../../services/client";

import { createUserKey } from "./keys";
import { UserDB } from "../../redux/user/types";

export const useUserData = (username: string, options?: UseQueryOptions<UserDB>) => {
  return useQuery(createUserKey(username), () => client.get<UserDB>(username).then((response) => response.data),
    options
  )
}

