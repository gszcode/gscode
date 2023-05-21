const Contact = () => {
  return (
    <section id="contact" className="mt-20 w-full h-screen relative">
      <div className="background-main background-contact flex flex-col items-center justify-evenly">
        <div className="p-4 flex flex-col items-center text-grey">
          <h2 className="text-grey font-semibold text-2xl mt-14 mb-6">
            Contacto
          </h2>
          <p className="text-lg cursor-pointer hover:text-second-color">
            <i className="m-2 fa-brands fa-whatsapp"></i> +54 1129629042
          </p>
          <p className="text-lg cursor-pointer hover:text-second-color">
            <i className="m-2 fa-regular fa-envelope"></i> gszcode@gmail.com
          </p>
          <p className="text-lg cursor-pointer hover:text-second-color">
            <i className="m-2 fa-brands fa-linkedin-in"></i> Gabiel Sanchez
          </p>
        </div>
        <form className="flex flex-col gap-2 w-full p-4 text-second-grey">
          <div>
            <input
              className="outline-none w-full h-10 px-3 font-light"
              placeholder="Nombre"
              type="text"
              required
            />
          </div>
          <div>
            <input
              className="outline-none w-full h-10 px-3 font-light"
              placeholder="Teléfono"
              type="tel"
              required
            />
          </div>
          <div>
            <input
              className="outline-none w-full h-10 px-3 font-light"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <div>
            <input
              className="outline-none w-full h-10 px-3 font-light"
              placeholder="Asunto"
              type="text"
              required
            />
          </div>
          <div>
            <textarea
              className="outline-none w-full h-40 resize-none px-3 pt-2 font-light "
              placeholder="Mensaje"
              required
            />
          </div>
          <button className="w-50 self-center text-dark border-2 border-transparent bg-second-color py-2.5 hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
            Enviar <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>

      <div className="bg-white break border-none"></div>
    </section>
  )
}

export default Contact
