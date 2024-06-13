const isAuthenticated = () => {
  let status = localStorage.getItem('user')
  console.log(status)
  return status !== "null"
}

export default isAuthenticated
