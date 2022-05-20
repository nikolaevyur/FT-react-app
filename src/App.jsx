import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/login/login";
import './App.scss'
import { AppRoute } from "./const";
import Users from "./pages/users/users";
import Main from "./pages/main/main";
import TaskForm from "./pages/task-form/task-form";
import Profile from "./pages/profile/profile";
import { observer } from "mobx-react-lite";
// import { tasks, users } from "./store";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={AppRoute.LOGIN} element={<Login login={users}/>} /> */}
        <Route path={AppRoute.MAIN} element={<Main />} />
        <Route path={AppRoute.USERS} element={<Users />} />
        <Route path={AppRoute.FORM} element={<TaskForm />} />
        <Route path={AppRoute.PROFILEFORM} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
})

export default App;
