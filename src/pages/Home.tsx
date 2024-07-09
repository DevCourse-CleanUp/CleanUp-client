import React from 'react'
import Login from './Login'
import useLoginStore from '../store/loginStore'

export const Home = () => {
  const {isLoggedIn} = useLoginStore();
  return (
    <>
      {!isLoggedIn && (<Login />)}
    </>
  )
}
