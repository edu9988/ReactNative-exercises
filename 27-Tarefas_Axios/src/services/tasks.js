import axios from 'axios'

const baseURL = 'https://tarefa-backend.onrender.com/tasks'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const post = async (task) => {
  return await axios.post(baseURL, task)
}

const put = async (id, updatedTask) => {
  return await axios.put(
    `${baseURL}/${id}`,
    updatedTask
  )
}

const patch = async (id) => {
  return await axios.patch(
    `${baseURL}/${id}`,
    { finished: true }
  )
}

const deleteById = async (id) => {
  return await axios.delete(`${baseURL}/${id}`)
}

export default { getAll, post, put, patch, deleteById }
