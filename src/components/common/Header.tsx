import { useEffect, useRef, useState } from "react";
import { FcFullTrash } from "react-icons/fc";
import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { headerHeightState } from "../../atoms/heightAtom";
import Button from "./Button";
import { loginState } from "../../atoms/loginAtom";
import Login from "../../pages/Login";
import { MdLogout } from "react-icons/md";

const user = {
  nickname: "김세모",
  total_score: 5889,
};

const Header = () => {
  const headRef = useRef<HTMLHeadElement>(null);
  const setHeaderHeight = useSetRecoilState(headerHeightState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isHovered, setIsHovered] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const handleMouseOver = () => {
      setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setHeaderHeight(headRef.current?.offsetHeight || 0);
  }, []);

  return (
    <HeaderStyle ref={headRef}>
      <div className="left-group">
        <FcFullTrash size="70" />
        <h1>Clean Up</h1>
      </div>
      {isLoggedIn ? (
        <>
          <div className="right-group">
            <div className="userNav">
              <p>{user.nickname}</p>
              <p>{user.total_score}</p>
            </div>
            <Button
              size="medium"
              scheme={isHovered ? "clicked" : "abled"}
              onClick={logoutHandler}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="logoutBtn"
            >
              <MdLogout />
            </Button>
          </div>
        </>
      ) : null}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.thirdary};

  .left-group {
    display: flex;
    justify-content: end;
    padding-left: 10px;
    align-items: center;
  }
  h1 {
    color: ${({ theme }) => theme.headerText.default.color};
    font-size: ${({ theme }) => theme.headerText.default.fontSize};
    font-weight: ${({ theme }) => theme.headerText.default.fontWeight};
    text-shadow: ${({ theme }) => theme.headerText.default.textShadow};
    font-family: cursive;
    margin-left: 20px;
  }

  .right-group {
    display: flex;
    align-items: center;
    gap: 30px;
    padding-right: 25px;

    font-size: 20px;

    .userNav {
      gap: 30px;
      display: flex;
      flex-direction: row;
    }
    
    .logoutBtn {


      svg {
        color: #fff !important;
      }
    }
  }
`;

export default Header;
