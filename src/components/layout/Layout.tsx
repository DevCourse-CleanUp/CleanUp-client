import React from "react";
import styled from "styled-components";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import useLoginStore from "../../store/loginStore";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const {isLoggedIn} = useLoginStore();
  return (
    <>
      {isLoggedIn && (<Header />)}
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
    </>
  );
};

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;
