import { nameTypes } from "./types";

export const addName = (payload: string) => ({
  type: nameTypes.ADD_NAME,
  payload,
});
