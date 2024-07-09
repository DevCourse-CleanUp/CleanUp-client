import { FcFullTrash } from "react-icons/fc";
import { loginState } from "../../store/loginStore";

import { styled } from "styled-components";
import { useRecoilValue } from "recoil";

export const Header = () => {
  const isLoggedIn = useRecoilValue(loginState);
  return (
    <HeaderStyle>
      {
        isLoggedIn && (
          <>
            <FcFullTrash size="70" />
            <h1>Clean Up</h1>
          </>
        )
      }
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.thirdary};

  h1 {
    color: ${({ theme }) => theme.headerText.default.color};
    font-size: ${({ theme }) => theme.headerText.default.fontSize};
    font-weight: ${({ theme }) => theme.headerText.default.fontWeight};
    text-shadow: ${({ theme }) => theme.headerText.default.textShadow};
    font-family: cursive;
    margin-left: 20px;
  }
`;
