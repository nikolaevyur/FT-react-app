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
import { tasks, users } from "./store";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.MAIN} element={<Main tasks={tasks.data} users={users.data}/>} />
        <Route path={AppRoute.USERS} element={<Users tasks={tasks.data} users={users.data}/>} />
        <Route path={AppRoute.FORM} element={<TaskForm users={users.data}/>} />
        <Route path={AppRoute.PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
})

export default App;
