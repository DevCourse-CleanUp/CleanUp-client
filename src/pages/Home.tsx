import React from 'react'
import Login from './Login'
import { loginState } from '../store/loginStore'
import { useRecoilValue } from 'recoil';

export const Home = () => {
  const isLoggedIn = useRecoilValue(loginState);
  return (
    <>
      {!isLoggedIn && (<Login />)}
    </>
  )
}
