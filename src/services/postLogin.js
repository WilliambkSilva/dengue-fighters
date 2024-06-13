// import axios from "axios";
import {api} from './createUser.js'

const postLogin = async (userObject) => {
  const response = await api.post('/login', userObject)
  return response
}

export {
  postLogin
}