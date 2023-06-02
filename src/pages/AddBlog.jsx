import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog, resetState } from '../slides/blog/blogSlice'
import Swal from 'sweetalert2'
import UploadImage from '../components/uploadImage/UploadImage'

const initialState = {
  title: '',
  description: ''
}

const AddBlog = () => {
  const [form, setForm] = useState(initialState)
  const { authAdmin } = useSelector((state) => state)
  const { blogAdmin } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate('')
  const urlImage = localStorage.getItem('urlImage')

  useEffect(() => {
    if (blogAdmin.isCreated.success) {
      Swal.fire({
        text: blogAdmin.isCreated.message,
        icon: 'success',
        confirmButtonText: 'Cerrar'
      })

      dispatch(resetState())
      navigate('/blogs')
    }

    setForm(initialState)
  }, [blogAdmin, navigate, dispatch])

  useEffect(() => {
    if (blogAdmin.isError) {
      Swal.fire({
        text: 'Ocurrio un Error',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })

      dispatch(resetState())
    }
  }, [blogAdmin, dispatch])

  useEffect(() => {
    if (!authAdmin.auth) return navigate('/admin')
  }, [authAdmin, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    setForm((form.image = urlImage))
    dispatch(addBlog(form))

    localStorage.removeItem('urlImage')
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value,
      ['image']: urlImage
    })
  }

  return (
    <>
      {authAdmin.auth && (
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
          <h2 className="w-100 text-center text-primary-color text-2xl my-8 font-bold">
            Agregar nuevo Blog
          </h2>
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="w-80 h-60 lg:w-100">
              <UploadImage />
            </div>
            <div className="w-80 h-10 border-b border-shadow lg:w-100">
              <input
                placeholder="Titulo"
                type="text"
                className="w-full h-full p-3 outline-none"
                required
                onChange={handleChange}
                name="title"
                value={form.title}
              />
            </div>
            <div className="w-80 h-44 border-b border-shadow lg:w-100">
              <textarea
                placeholder="Descripcion"
                type="text"
                className="w-full h-full p-3 outline-none resize-none"
                required
                onChange={handleChange}
                name="description"
                value={form.description}
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-demo text-center px-2 py-1 bg-second-color text-white"
            >
              Agregar
            </button>
          </form>
        </section>
      )}
    </>
  )
}

export default AddBlog
