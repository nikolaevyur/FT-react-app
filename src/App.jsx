import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/login/login";
import './App.scss'
import { AppRoute } from "./const";
import Users from "./pages/users/users";
import Main from "./pages/main/main";
import TaskForm from "./pages/task-form/task-form";
import Profile from "./pages/profile/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.MAIN} element={<Main />} />
        <Route path={AppRoute.USERS} element={<Users />} />
        <Route path={AppRoute.TASK} element={<TaskForm />} />
        <Route path={AppRoute.PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
