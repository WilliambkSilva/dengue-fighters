import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3333"})
const postEvent = async (userObject) => {
  const response = await api.post('/createevent', userObject)
  return response
}

export {
postEvent,
  api
}