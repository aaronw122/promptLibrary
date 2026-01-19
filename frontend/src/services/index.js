import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL;
console.log('baseURL', baseURL)

const getPrompts = () => {
  const request = axios.get(`${baseURL}/api/prompts`)
  return request.then(response => response.data)
}


export default { getPrompts }
