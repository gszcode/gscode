import axios from 'axios'

const loginAdmin = async (dataAdmin) => {
  const response = await axios.post(
    'https://blog-server-w573.onrender.com/api/auth/login',
    dataAdmin
  )

  return response.data
}

export const authService = { loginAdmin }
