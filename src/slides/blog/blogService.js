import axios from 'axios'
const token = localStorage.getItem('token')
const config = {
  headers: { Authorization: `Bearer ${token}` }
}

const addBlog = async (dataBlog) => {
  const response = await axios.post(
    'http://localhost:3000/api/blog/create-blogs',
    dataBlog,
    config
  )

  return response.data
}

export const blogService = {
  addBlog
}
