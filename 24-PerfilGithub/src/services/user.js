import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    // 'Authorization': 'ssh-rsa AAA... ' // can't use this in public repo, but it was good for developing since authenticated requests have a much higher rate limit
    'Accept': 'application/vnd.github.v3+json'
  }
})

export default api
