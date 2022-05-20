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

// COMMENTS
export const getComments = (id) => {
	return axios.get(`${url}/comments/${id}`)
}


// AXIOS
// const inst = axios.create({
//     baseURL: 'http://93.95.97.34/api'
// })

// export const api = {
//     getAsyncTasks: async () => {
//         try {
//             const res = await inst.post('/tasks', {
//                 filter: {},
//                 page: 0,
//                 limit: 0
//             })
//             return res;
//         } catch (e) {
//         }
//     },}
// // import axios from "axios";



// // export const getTasks = (data) => {
// // 	return (axios.post(`${url}/tasks`))
// // }

// export const getTask = (id) => {
// 	return axios.get(`${url}/tasks/${id}`)
// }

// export const getUsers = () => {
// 	return axios.get(`${url}/users/all`)
// }

// export const getComments = (id) => {
// 	return axios.get(`${url}/comments/${id}`)
// }
// const request = async (url, method = 'GET', body) => {
//     const response = await fetch(url, {
//         method,
//         body: JSON.stringify(body),
//         headers: new Headers({
//             'Content-type': 'application/json'
//         })
//     })
//     return await response.json();
// }

// export const getTasks = () => {
//     return request(`${url}/tasks`, 'POST', { "filter": {}, "page": 0, "limit": 0 })
// }

// export const addTask = (data) => {
//     const taskData = {
//         ...data,
//         timeInMinutes: 0
//     }
//     return request(`${url}/tasks/createOrEdit`, 'PUT', taskData)
// }

// export const login = (data) => {
//     return request(`${url}/users/login`, 'POST', data);
//   }

// export const getTask = (id) => {
//     return request(`${url}/tasks/${id}`)
//   }

// export const getUsers = () => {
//     return request(`${url}/users/all`);
// }

// export const getComments = (id) => {
//     return request(`${url}/comments/${id}`)
//   }

// export const addComment = (data) => {
//     return request(`${url}/comments/createOrEdit`, 'PUT', data)
//   }

// export const editStatus = (taskId, status) => {
//     request(`${url}/tasks/${taskId}/status/${status}`, 'PATCH')
//     .then(data => console.log(data))
// }