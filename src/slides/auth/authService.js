import axios from 'axios'

const loginAdmin = async (dataAdmin) => {
  const response = await axios.post(
    'http://localhost:3000/api/auth/login',
    dataAdmin
  )

  return response.data
}

export const authService = { loginAdmin }
