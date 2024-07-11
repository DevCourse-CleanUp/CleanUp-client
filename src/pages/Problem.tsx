import { styled } from 'styled-components';
import Button from '../components/common/Button';
import InputTextArea from '../components/Problem/InputTextArea';
import { GoChevronLeft, GoChevronRight, GoHeartFill } from 'react-icons/go';
import { FcEmptyTrash, FcLikePlaceholder } from 'react-icons/fc';

const problem = {
  id: 1,
  title: '쓰레기통',
  content:
    '쓰레기들이 쓰레기통 안으로 이동할 수 있도록 도와주세요. 이번에는 아무거나 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다. 쓰레기통 안에 쓰레기를 넣으세요. 쓰레기들이 쓰레기통 안으로 이동할 수 있도록 도와주세요. 이번에는 아무거나 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다. 쓰레기통 안에 쓰레기를 넣으세요. 쓰레기들이 쓰레기통 안으로 이동할 수 있도록 도와주세요. 이번에는 아무거나 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다. 쓰레기통 안에 쓰레기를 넣으세요. ',
  answer: '쓰레기통',
  level: 123,
  score: 9999,
};

export const Problem = () => {
  return (
    <ProblemStyle>
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

        <div className="inputCodeBox">
          <p>#pond &#123;</p>
          <div>
            <p>display: flex;</p>
            <StyledInputBox>{/* <p>{problem.answer}</p> */}</StyledInputBox>
          </div>
          <p>&#125;</p>

          <Button size="medium" scheme="abled">
            다음
          </Button>
        </div>
      </div>

      <div className="moveZone">
        <div>
          <GoHeartFill className="trashItem" />
        </div>
        <div>
          <FcEmptyTrash className="emptyTrash" />
        </div>
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

    .stageButton {
      display: inline-flex;
      width: auto;
      background: #5ef0f9;

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
      padding: 10px;
    }

    .inputCodeBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 5px;
      background: grey;
      padding: 0px 20px;
      color: #fff;

      div {
        width: 93%;
      }

      p {
        align-self: flex-start;
        margin: 10px 0px 10px 0px;
      }

      Button {
        align-self: flex-end;
        margin: 0px 0px 20px 20px;
        background: coral;
        color: #fff;
      }
    }
  }

  .moveZone {
    display: flex;
    justify-content: space-between;
    background: #b6c2b9;

    .trashItem {
      padding: 30px 30px 20px 30px;
      width: 70px;
      height: 70px;
      color: #ffbebc;
    }

    .emptyTrash {
      padding: 20px 30px 20px 30px;
      width: 100px;
      height: 100px;
    }
  }
`;

const StyledInputBox = styled(InputTextArea)`
  display: flex;
  width: 100%;
  padding: 0px;

  box-sizing: border-box; /*요소의 전체 너비와 높이에 패딩과 테두리가 포함되어 있는지 확인*/
`;

export default Problem;
