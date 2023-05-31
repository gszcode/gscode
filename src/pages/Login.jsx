import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin, resetState } from '../slides/auth/authSlide'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const initialState = {
  email: 'admin@gmail.com',
  password: 'adminpassword'
}

const Login = () => {
  const [form, setForm] = useState(initialState)
  const { authAdmin } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate('')

  useEffect(() => {
    if (authAdmin.auth) {
      localStorage.setItem('token', authAdmin.auth)
      return navigate('/')
    } else {
      return navigate('/admin')
    }
  }, [authAdmin, navigate])

  useEffect(() => {
    if (authAdmin.isError[0]) {
      Swal.fire({
        text: authAdmin.isError[1],
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })

      dispatch(resetState())
    }

    setForm(initialState)
  }, [authAdmin, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginAdmin(form))
  }

  const handleChange = (e) => {
    const { value, name } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="w-100 text-center text-primary-color text-2xl my-8 font-bold">
        ¡Bienvenido @Admin!
      </h2>
      <h3 className="text-center text-lg mb-8">Inicia sesíon para continuar</h3>
      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            placeholder="Email"
            type="email"
            className="w-full h-full p-3 outline-none"
            value={form.email}
            required
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            placeholder="Contraseña"
            type="password"
            className="w-full h-full p-3 outline-none"
            value={form.password}
            required
            onChange={handleChange}
            name="password"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-demo text-center px-2 py-1 bg-second-color text-white"
        >
          Ingresar
        </button>
      </form>
    </section>
  )
}

export default Login
