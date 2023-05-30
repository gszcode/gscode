import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const initialState = {
  title: '',
  description: '',
  image: ''
}

const AddBlog = () => {
  const [form, setForm] = useState(initialState)
  const { authAdmin } = useSelector((state) => state)
  const navigate = useNavigate('')

  useEffect(() => {
    if (!authAdmin.auth) return navigate('/admin')
  }, [authAdmin, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(form)
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
            Agregar nuevo Blog
          </h2>
          <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
            <div className="w-80 h-10 border-b border-shadow">
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
            <div className="w-80 h-10 border-b border-shadow">
              <input
                placeholder="Descripcion"
                type="text"
                className="w-full h-full p-3 outline-none"
                required
                onChange={handleChange}
                name="description"
                value={form.description}
              />
            </div>
            <div className="w-100 h-20">
              <input
                type="file"
                className="w-full h-full p-3 outline-none"
                required
                onChange={handleChange}
                name="image"
                value={form.image}
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
