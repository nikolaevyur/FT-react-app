import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/login/login";
import './App.scss'
import { AppRoute } from "./const";
import Users from "./pages/users/users";
import Main from "./pages/main/main";
import TaskForm from "./pages/task-form/task-form";
import Profile from "./pages/profile/profile";
import TaskEdit from "./pages/task-edit/task-edit";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={AppRoute.LOGIN} element={<Login login={users}/>} /> */}
        <Route path={AppRoute.MAIN} element={<Main />} />
        <Route path={AppRoute.USERS} element={<Users />} />
        <Route path={AppRoute.FORM} element={<TaskForm />} />
        <Route path={AppRoute.PROFILE_FORM} element={<Profile />} />
        <Route path={AppRoute.ADD} element={<TaskEdit />} />
        <Route path={AppRoute.EDIT} element={<TaskEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
