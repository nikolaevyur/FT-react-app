import React from "react";
import { observer } from "mobx-react-lite";

import Header from "../../components/header/header";
import Authorization from "../../components/authorization/authorization";

const Login = observer (({login}) => {
  return (
    <>
      <Header />
      <Authorization login={login} />
    </>
  )
})

export default Login;

