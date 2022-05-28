import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Main from "./pages/main/main";
import Users from "./pages/users/users";
import TaskForm from "./pages/task-form/task-form";
import Profile from "./pages/profile/profile";
import TaskEdit from "./pages/task-edit/task-edit";
import Login from "../src/pages/login/login";
import { login, tasksFilter, usersFilter } from "./store";
import { AppRoute } from "./const";

import './App.scss';

const App = observer(() => {
  const checkLogin = localStorage.getItem("login");
  console.log(checkLogin)

  return (
    <BrowserRouter>
      <Routes>
        {checkLogin
          ?
          <>
            <Route element={<Navigate path="*" to={AppRoute.MAIN} replace />} />
            <Route path={AppRoute.MAIN} element={<Main tasks={tasksFilter.filtredData}/>} />
            <Route path={AppRoute.USERS} element={<Users users={usersFilter.data}/>} />
            <Route path={AppRoute.FORM} element={<TaskForm />} />
            <Route path={AppRoute.PROFILE_FORM} element={<Profile />} />
            <Route path={AppRoute.ADD} element={<TaskEdit />} />
            <Route path={AppRoute.EDIT} element={<TaskEdit />} />
          </>
          :
          <>
            <Route path={AppRoute.LOGIN} element={<Login login={login} />} />
            <Route element={<Navigate path='*' to={AppRoute.LOGIN} replace />} />
          </>
        }
      </Routes>
    </BrowserRouter>
  )
})

export default App;
