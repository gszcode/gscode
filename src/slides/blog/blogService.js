import axios from 'axios'
const token = localStorage.getItem('token')
const config = {
  headers: { Authorization: `Bearer ${token}` }
}

const addBlog = async (dataBlog) => {
  const response = await axios.post(
    'http://localhost:3000/api/blog/create-blog',
    dataBlog,
    config
  )

  return response.data
}

const deleteBlog = async (idBlog) => {
  const response = await axios.delete(
    `http://localhost:3000/api/blog/delete-blog/${idBlog}`,
    config
  )

  return response.data
}

export const blogService = {
  addBlog,
  deleteBlog
}
