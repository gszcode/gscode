import axios from 'axios'

const getBlogs = async () => {
  const response = await axios('http://localhost:3000/api/blog/get-blogs')

  return response.data
}

export const blogService = {
  getBlogs
}
