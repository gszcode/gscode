import axios from 'axios'
const token = localStorage.getItem('token')

const config = {
  headers: { Authorization: `Bearer ${token}` }
}

const addBlog = async (dataBlog) => {
  console.log(dataBlog)
  const response = await axios.post(
    'https://blog-server-w573.onrender.com/api/blog/create-blog',
    dataBlog,
    config
  )

  return response.data
}

const deleteBlog = async (idBlog) => {
  const response = await axios.delete(
    `https://blog-server-w573.onrender.com/api/blog/delete-blog/${idBlog}`,
    config
  )

  return response.data
}

const updateBlog = async ({ id, form }) => {
  const response = await axios.put(
    `https://blog-server-w573.onrender.com/api/blog/update-blog/${id}`,
    form,
    config
  )

  return response.data
}

export const blogService = {
  addBlog,
  deleteBlog,
  updateBlog
}
