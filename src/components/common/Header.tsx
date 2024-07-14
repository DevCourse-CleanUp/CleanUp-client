import { FcFullTrash } from "react-icons/fc";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <FcFullTrash size="70" />
      <h1>Clean Up</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
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

export default Header;
