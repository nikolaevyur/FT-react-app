import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../edit-form/edit-form";
import AddForm from "../add-form/add-form";
import { getTask, getUsers } from "../../api";
import { AppRoute } from "../../const";

const BoardEdit = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);
  const [task, setTask] = useState(id ? null : {});

  useEffect(() => {
    getUsers().then(u => setUsers(u));
  }, []);

  useEffect(() => {
    id &&
    getTask(id).then(t => setTask(t));
  }, [id]);

  if (!users) return null;
  if (!task) return null;

  return (
    <>
      {id && <EditForm
        task={task}
        users={users.data.data}
      />}
      {window.location.pathname === AppRoute.ADD && <AddForm users={users.data.data} />}
    </>
  )
}

export default BoardEdit;