export type ProblemIds = number[];

export interface Problem {
  id: number;
  title: string;
  description: string;
  answer: string;
  level: number;
  score: number;
  solved?: boolean;
}
export type ProblemsArray = Problem[];
