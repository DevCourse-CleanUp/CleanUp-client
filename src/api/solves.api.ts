import { ProblemIds } from "../models/problem.model";
import { httpClient } from "./http";

export const fetchSolves = async () => {
  const response = await httpClient.get("/solves");
  const data: ProblemIds = response.data;
  return data;
};
