const Login = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="w-100 text-center text-primary-color text-2xl my-8 font-bold">
        ¡Bienvenido @Admin!
      </h2>
      <h3 className="text-center text-lg mb-8">Inicia sesíon para continuar</h3>
      <form className="flex flex-col gap-16">
        <div className="w-80 h-10 border-b border-shadow">
          <input
            placeholder="Email"
            type="email"
            className="w-full h-full p-3 outline-none"
          />
        </div>
        <div className="w-80 h-10 border-b border-shadow">
          <input
            placeholder="Contraseña"
            type="password"
            className="w-full h-full p-3 outline-none"
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
