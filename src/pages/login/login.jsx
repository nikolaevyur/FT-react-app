import React from "react";
import Header from "../../components/header/header";
import Authorization from "../../components/authorization/authorization"

const Login = ({login}) => {
  return (
    <>
      <Header />
      <Authorization login={login} />
    </>
  )
}

export default Login;

