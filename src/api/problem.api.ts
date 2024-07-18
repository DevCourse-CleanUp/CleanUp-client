import { Problem } from "../models/problem.model";
import { httpClient } from "./http";

interface FetchProblemResponse {
  map(
    arg0: (problem: { id: number }) => { solved: boolean; id: number }
  ): unknown;
  problemset: Problem[];
}

export const fetchProblems = async () => {
  const response = await httpClient.get<FetchProblemResponse>("/problemset");
  return response.data;
};

// export const fetchBook = async (bookId: string) => {
//   const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
//   return response.data;
// };
