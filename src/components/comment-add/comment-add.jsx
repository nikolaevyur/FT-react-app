import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addComment, addTask, getComments, getTask,getUsers } from "../../api";
import { AppRoute } from "../../const";


const CommentAdd = (props) => {
  const userData = JSON.parse(localStorage.getItem("loginUser"))
  const [form, setForm] = useState( 
      {
        taskId: props.taskId,
        userId: userData.id,
        text: "",
      });

  const handleFieldChange = (event) => {
      const { name, value } = event.target
      setForm({ ...form, [name]: value })
    }

  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(form);
      addComment(form);
      window.location.reload()
    }

  return (
      <form onSubmit={handleSubmit}>
				<textarea 
          placeholder="Текст комментария"
          name="text" 
          onChange={handleFieldChange} 
          required
        >
        </textarea>
				<button type="submit" className="btn btn-success">Добавить комментарий</button>
			</form>
  )
  }

  export default CommentAdd;