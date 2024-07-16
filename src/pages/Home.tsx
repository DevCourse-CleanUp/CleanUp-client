import React from "react";
import Login from "./Login";
import { loginState } from "../atoms/loginAtom";
import { useRecoilState } from "recoil";
import Ranking from "../components/Ranking/Ranking";
import Button from "../components/common/Button";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
          <Ranking />
      )}
    </>
  );
};

export default Home;
