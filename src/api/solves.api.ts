import { httpClient } from "./http";

interface FetchSolvesResponse {
  solvedId: number[];
}

export const fetchSolves = async () => {
  try {
    const response = await httpClient.get<FetchSolvesResponse>("/solves");
    return response.data;
  } catch (error) {
    throw error;
  }
};
