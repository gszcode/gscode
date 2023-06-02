import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { updateBlog } from '../slides/blog/blogSlice'

const initialState = {
  title: '',
  description: ''
}

const UpdateBlog = () => {
  const [form, setForm] = useState(initialState)
  const { authAdmin } = useSelector((state) => state)
  const { blogAdmin } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate('')
  const { id } = useParams()

  useEffect(() => {
    if (blogAdmin.isError) {
      Swal.fire({
        text: 'Ocurrio un Error',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    }

    setForm(initialState)
  }, [blogAdmin, dispatch])

  useEffect(() => {
    if (!authAdmin.auth) return navigate('/admin')
  }, [authAdmin, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(updateBlog({ id, form }))
    return navigate('/blogs')
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <>
      {authAdmin.auth && (
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
          <h2 className="w-100 text-center text-primary-color text-2xl my-8 font-bold">
            Actualizar Blog
          </h2>
          <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
            <div className="w-80 h-10 border-b border-shadow lg:w-100">
              <input
                placeholder={`${blogAdmin.oneBlog.title}`}
                type="text"
                className="w-full h-full p-3 outline-none"
                onChange={handleChange}
                name="title"
                value={form.title}
              />
            </div>
            <div className="w-80 h-44 border-b border-shadow lg:w-100">
              <textarea
                placeholder={`${blogAdmin.oneBlog.description}`}
                type="text"
                className="w-full h-full p-3 outline-none resize-none"
                onChange={handleChange}
                name="description"
                value={form.description}
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-demo text-center px-2 py-1 bg-second-color text-white"
            >
              Actualizar
            </button>
          </form>
        </section>
      )}
    </>
  )
}

export default UpdateBlog
