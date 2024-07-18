import { styled } from "styled-components";
import ProblemZone from "../components/Problem/ProblemZone";
import CodeBoxZone from "../components/Problem/CodeBoxZone";
import TrashMoveZone from "../components/Problem/TrashMoveZone";
import Button from "../components/common/Button";
import { fetchProblem } from "../api/problem.api";
import { useParams } from "react-router-dom";
import { Problem as IProblem, ProblemDetail} from "../models/problem.model";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { answerAtom } from "../atoms/problemAtom";
import { solveAtom } from "../atoms/problemAtom";

export const Problem = () => {
  const problemId = Number(useParams().id);
  let [problem, setProblem] = useState<ProblemDetail>();
  const setAnswer = useSetRecoilState(answerAtom);
  const getAnswer = useRecoilState(answerAtom);
  const solve = useRecoilValue(solveAtom);
  
  useEffect(() => {
    fetchProblem(problemId).then((res) => {
      setProblem(res);
      setAnswer(res.answer);
    });
  }, [problemId, setAnswer]);

  if (!problem) return null;

  return (
    <ProblemStyle>
      <div className="problemZone">
        <ProblemZone title={problem.title} description={problem.description} />
        <CodeBoxZone />
        <div className="buttonPosition">
          <Button
            size="medium"
            scheme={solve ? "clicked" : "abled"}
            borderRadius="round"
          >
            성공
          </Button>
        </div>
      </div>
      <div className="moveZone">
        <TrashMoveZone />
      </div>
    </ProblemStyle>
  );
};

const ProblemStyle = styled.div`
  display: flex;
  height: 100vh;

  .problemZone,
  .moveZone {
    flex: 1;
  }

  .problemZone {
    background: #ffbebc;
    padding: 20px;
  }

  .moveZone {
    background: #d7e1d9;
  }

  .buttonPosition {
    display: flex;
    justify-content: end;
    margin-top: 10px;
    padding: 10px;
  }
`;

export default Problem;
