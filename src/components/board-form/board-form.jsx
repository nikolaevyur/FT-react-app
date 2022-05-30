import React, { useState, useEffect } from "react";
import InfoTask from "../info-task/info-task";
import { getUsers } from "../../api";

const BoardForm = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers().then(t => setUsers(t));
  }, []);

  if (!users) return null;

  return (
    <InfoTask user={users.data.data} />
  )
}

export default BoardForm;