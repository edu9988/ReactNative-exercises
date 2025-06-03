import axios from 'axios'

const baseURL = 'https://economia.awesomeapi.com.br/json/last'

const get = async (from, to) => {
  const response = await axios.get(`${baseURL}/${from}-${to}`)
  return response.data
}

export default { get }
