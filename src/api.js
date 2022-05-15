const url = 'http://93.95.97.34/api';

const request = async (url, method = 'GET', body) => {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    })
    return await response.json();
}

export const getTasks = () => {
    return request(`${url}/tasks`, 'POST', { "filter": {}, "page": 0, "limit": 0 })
}

export const addTask = (data) => {
    const taskData = {
        ...data,
        timeInMinutes: 0
    }
    return request(`${url}/tasks/createOrEdit`, 'PUT', taskData)
}

export const getTask = (id) => {
    return request(`${url}/tasks/${id}`)
  }

export const getUsers = () => {
    return request(`${url}/users/all`);
}

export const getComments = (id) => {
    return request(`${url}/comments/${id}`)
  }

export const editStatus = (taskId, status) => {
    request(`${url}/tasks/${taskId}/status/${status}`, 'PATCH')
    .then(data => console.log(data))
}