import React, { useEffect, useState } from "react";
import EditForm from "../edit-form/edit-form";
import { Link, useParams } from "react-router-dom";
import { getTask,getUsers } from "../../api";
import { AppRoute } from "../../const";
import AddForm from "../add-form/add-form";
import Title from "../title/title";

const BoardEdit = () => {

  const { id } = useParams();
  const [users, setUsers] = useState(null);
  const [task, setTask] = useState(id ? null : {});

  useEffect(() => {
    getUsers().then(u => setUsers(u));
  }, []);

  useEffect(() => {id &&
    getTask(id).then(t => setTask(t));
  }, [id]);

  if (!users) return null;
  if (!task) return null;
  // console.log(task)
  // if (task === null) {
  //   return <p>Loading...</p>
  // }

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