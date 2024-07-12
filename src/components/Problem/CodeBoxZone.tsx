import { styled } from 'styled-components';
import InputTextArea from '../common/InputTextArea';
import Button from '../common/Button';

export const CodeBoxZone= () => {
  return (
    <CodeBoxZoneStyle>
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
    </CodeBoxZoneStyle>
  );
}

const CodeBoxZoneStyle = styled.div`
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
`;

const StyledInputBox = styled(InputTextArea)`
  display: flex;
  width: 100%;
  padding: 0px;

  box-sizing: border-box; /*요소의 전체 너비와 높이에 패딩과 테두리가 포함되어 있는지 확인*/
`;

export default CodeBoxZone;