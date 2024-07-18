import { styled } from "styled-components";
import ProblemZone from "../components/Problem/ProblemZone";
import CodeBoxZone from "../components/Problem/CodeBoxZone";
import TrashMoveZone from "../components/Problem/TrashMoveZone";
import Button from "../components/common/Button";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { solveAtom } from "../atoms/problemAtom";

export const Problem = () => {
  const solve = useRecoilValue(solveAtom);

  return (
    <ProblemStyle>
      <div className="problemZone">
        <ProblemZone />
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
