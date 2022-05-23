import axios from "axios"

const url = "http://93.95.97.34/api";

// TASKS
export const getTasks = () => {
	return axios.post(`${url}/tasks`, {
                        filter: {},
                        page: 0,
                        limit: 0
                    })
}

export const getTask = (id) => {
	return axios.get(`${url}/tasks/${id}`)
}
export const addTask = (data) => {
  return axios.put(`${url}/tasks/createOrEdit`, data)
}

// USERS
export const getUsers = () => {
	return axios.post(`${url}/users`, {
        filter: {},
        page: 0,
        limit: 0
    })
}

export const getUser = (id) => {
	return axios.get(`${url}/users/${id}`)
}

export const getLogin = (data) => {
    return axios.post(`${url}/users/login`, data);
  }


// COMMENTS
export const getComments = (id) => {
	return axios.get(`${url}/comments/${id}`)
}

export const addComment = (data) => {
	return axios.put(`${url}/comments/createOrEdit`, data)
}

//PAGINATION
export const getTasksPag = (page) => {
	return axios.post(`${url}/tasks`, {
                        filter: {},
                        page: page,
                        limit: 7
                    })
}