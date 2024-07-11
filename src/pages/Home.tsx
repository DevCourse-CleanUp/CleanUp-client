import React from "react";
import Login from "./Login";
import { loginState } from "../atoms/loginAtom";
import { useRecoilState } from "recoil";
import Lanking from "../components/Lanking/Lanking";
import Button from "../components/common/Button";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <>
          <Lanking />
          <Button size="large" scheme="abled" onClick={logoutHandler}>
            로그아웃
          </Button>
        </>
      )}
    </>
  );
};

export default Home;
