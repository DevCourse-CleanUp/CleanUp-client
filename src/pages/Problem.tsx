import { styled } from 'styled-components';
import InputCodeBox from '../components/Problem/InputCodeBox';

const problem = {
  id: 1,
  title: '아 배고프다',
  content:
    '배고프다 집가서 어제 사뒀던 돈까스덮밥 상추에 싸먹고싶다 그것도 아니면 김밥 싸서 먹고싶다 아 배고프다 집가서 어제 사뒀던 돈까스덮밥 상추에 싸먹고싶다 그것도 아니면 김밥 싸서 먹고싶다 아 배고프다 집가서 어제 사뒀던 돈까스덮밥 상추에 싸먹고싶다 그것도 아니면 김밥 싸서 먹고싶다 아 배고프다 집가서 어제 사뒀던 돈까스덮밥 상추에 싸먹고싶다 그것도 아니면 김밥 싸서 먹고싶다 아 배고프다 집가서 어제 사뒀던 돈까스덮밥 상추에 싸먹고싶다 그것도 아니면 김밥 싸서 먹고싶다 아',
  answer: '돈까스덮밥',
  level: 123,
  score: 9999,
};

export const Problem = () => {
  return (
    <ProblemStyle>
      <div className="problemZone">
        <h2 className="title">{problem.title}</h2>
        <p className="content">{problem.content}</p>
        <InputCodeBox>{problem.answer}</InputCodeBox>
      </div>
      <div className="moveZone">
        <p>사아자카타</p>
      </div>
    </ProblemStyle>
  );
};

const ProblemStyle = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 0;
  padding-bottom: 0;

  .problemZone, .moveZone {
    flex: 1;
  }

  .problemZone {
    background: coral;

    P, h2 {
      padding: 20px;
    }
  }

  .moveZone {
    background: blue;
  }
`;

export default Problem;
