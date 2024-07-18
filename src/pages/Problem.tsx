import { styled } from "styled-components";
import ProblemZone from "../components/Problem/ProblemZone";
import CodeBoxZone from "../components/Problem/CodeBoxZone";
import TrashMoveZone from "../components/Problem/TrashMoveZone";

export const Problem = () => {
  return (
    <ProblemStyle>
      <div className="problemZone">
        <ProblemZone />
        <CodeBoxZone />
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
`;

export default Problem;
