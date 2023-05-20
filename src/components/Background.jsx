import { useEffect } from 'react'
import { preloadImages } from '../utils/preloadImages'

const Background = () => {
  useEffect(() => {
    preloadImages()
  }, [])

  return (
    <main className="w-full h-screen">
      <div className="background-main flex items-center absolute top-0 left-0">
        <div className="w-full flex flex-col justify-center items-start gap-3 p-3">
          <h1 className="text-white tracking-widest text-xl font-thin">
            HEADHUNTER INDUSTRIAL
          </h1>
          <h2 className="font-bold text-white text-4xl">Magna Consulting</h2>
          <p className="text-grey">
            Nos especializamos en cubrir las necesidades de nuestros clientes.
          </p>
          <button className="border-2 border-transparent bg-second-color px-7 py-2.5 hover:bg-transparent hover:border-2 hover:text-white hover:border-white">
            Saber más <i className="fa-solid fa-arrow-down-long ml-2"></i>
          </button>
        </div>
      </div>
      <div className="bg-white break"></div>
    </main>
  )
}

export default Background
