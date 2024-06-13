import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3333"})
const postUser = async (userObject) => {
  const response = await api.post('/createuser', userObject)
  return response
}

export {
  postUser,
  api
}