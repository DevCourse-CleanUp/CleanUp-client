import { styled } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const InputCodeBox = ({children}: Props) => {
  return (
    <InputCodeBoxStyle>
      <div>
        {children}
      </div>
    </InputCodeBoxStyle>
  );
}

const InputCodeBoxStyle = styled.div`
display: flex;
jusfify-content: center;
background: #fff;
height: 150px;
`;

export default InputCodeBox;