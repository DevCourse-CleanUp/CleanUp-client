import { useState, useEffect } from "react";
import { Problem } from "../models/problem.model";
import { fetchProblems } from "../api/problem.api";
import { fetchSolves } from "../api/solves.api";

export interface Problemset extends Problem {
  solved: boolean;
}

export const useProblemset = () => {
  const [problemset, setProblemset] = useState<Problemset[]>([]);
  const [solvedId, setSolvedId] = useState<Number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // solvedId를 먼저 가져옴
        const solvesResponse = await fetchSolves();
        setSolvedId(solvesResponse.solvedId);

        // 문제 목록을 가져와서 solvedId를 활용해 solved 속성을 추가
        const problemsResponse = await fetchProblems();
        console.log(solvedId);
        console.log(problemsResponse);
        const temp = problemsResponse.map((problem) => ({
          ...problem,
          solved: solvesResponse.solvedId.includes(problem.id),
        }));

        // 상태를 업데이트
        setProblemset(temp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 두 번째 인자로 전달하여 컴포넌트가 마운트될 때만 실행

  return { problemset };
};
