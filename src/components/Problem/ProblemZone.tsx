import { styled } from "styled-components";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Button from "../common/Button";

const problem = {
  id: 1,
  title: "쓰레기통",
  content:
    "쓰레기들이 쓰레기통 안으로 이동할 수 있도록 도와주세요. 이번에는 아무거나 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다. 쓰레기통 안에 쓰레기를 넣으세요. 쓰레기들이 쓰레기통 안으로 이동할 수 있도록 도와주세요. 이번에는 아무거나 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다. 쓰레기통 안에 쓰레기를 넣으세요. 쓰레기들이 쓰레기통 안으로 이동할 수 있도록 도와주세요. 이번에는 아무거나 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다. 쓰레기통 안에 쓰레기를 넣으세요. ",
  answer: "쓰레기통",
  level: 123,
  score: 9999,
};

export const ProblemZone = () => {
  return (
    <ProblemZoneStyle>
      <div className="problemZone">
        <div className="title">
          <h2 className="title">{problem.title}</h2>
          <div className="stageButton">
            <Button size="small" scheme="abled">
              <GoChevronLeft />
            </Button>
            <p>&nbsp;&nbsp; 단계 1 of 100 &nbsp;&nbsp;</p>
            <Button size="small" scheme="abled">
              <GoChevronRight />
            </Button>
          </div>
        </div>

        <p className="content">{problem.content}</p>
      </div>
    </ProblemZoneStyle>
  );
};

const ProblemZoneStyle = styled.div`
  .stageButton {
    display: inline-flex;
    width: auto;
    background: #5ef0f9;
    margin-right: 10px;

    p,
    svg {
      display: flex;
      align-items: center;
      margin: 0px;

      background: #5ef0f9;
    }

    p {
      color: grey;
    }

    svg {
      color: #fff;
    }
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      padding-left: 12px;
    }
  }

  .content {
    text-align: justify;
    padding: 10px;
  }
  /* } */
`;

export default ProblemZone;
