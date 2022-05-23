import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/login/login";
import './App.scss'
import { AppRoute } from "./const";
import Users from "./pages/users/users";
import Main from "./pages/main/main";
import TaskForm from "./pages/task-form/task-form";
import Profile from "./pages/profile/profile";
import TaskEdit from "./pages/task-edit/task-edit";
import { observer } from "mobx-react-lite";
import { login } from "./store";



const App = observer(() => {

  const checkLogin = localStorage.getItem("login");

  return (
    <BrowserRouter>
      <Routes>
        {checkLogin
          ?
          <>
            <Route element={<Navigate to={AppRoute.MAIN} replace />} />
            <Route path={AppRoute.MAIN} element={<Main login={login} />} />
            <Route path={AppRoute.USERS} element={<Users />} />
            <Route path={AppRoute.FORM} element={<TaskForm />} />
            <Route path={AppRoute.PROFILE_FORM} element={<Profile />} />
            <Route path={AppRoute.ADD} element={<TaskEdit />} />
            <Route path={AppRoute.EDIT} element={<TaskEdit />} />
          </>
          :
          <>
            <Route path={AppRoute.LOGIN} element={<Login login={login} />} />
            <Route element={<Navigate to={AppRoute.LOGIN} replace />} />
          </>
        }
      </Routes>
    </BrowserRouter>
  )
})

export default App;
