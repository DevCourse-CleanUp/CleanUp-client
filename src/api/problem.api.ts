import { ProblemsArray } from "../models/problem.model";
import { httpClient } from "./http";

export const fetchProblems = async () => {
  const response = await httpClient.get("/problemset");
  const data: ProblemsArray = response.data;
  return data;
};

// export const fetchBook = async (bookId: string) => {
//   const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
//   return response.data;
// };
