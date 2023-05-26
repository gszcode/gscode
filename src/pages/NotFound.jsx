import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-semibold">Página no Encontrada</h2>
      <Link
        to="/"
        className="border-b-2 hover:border-second-color hover:text-second-color"
      >
        Volver al Inicio
      </Link>
    </section>
  )
}

export default NotFound
