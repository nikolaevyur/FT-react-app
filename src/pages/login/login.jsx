import React from "react";
import Header from "../../components/header/header";
import Authorization from "../../components/authorization/authorization"
import { observer } from "mobx-react-lite";

const Login = observer (({login}) => {
  return (
    <>
      <Header />
      <Authorization login={login} />
    </>
  )
})

export default Login;

