import FormContact from './FormContact'

const Contact = () => {
  return (
    <section id="contact" className="mt-20 w-full h-[700px] relative">
      <div className="background-main background-contact flex flex-col items-center justify-evenly">
        <h2 className="text-grey font-bold text-2xl md:text-3xl">Contacto</h2>
        <div
          className="flex flex-col items-center text-grey md:flex-row md:-my-20"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="text-lg cursor-pointer hover:text-second-color md:ml-4">
            <i className="m-2 fa-brands fa-whatsapp"></i> +54 1128629042
          </p>
          <p className="text-lg cursor-pointer hover:text-second-color md:ml-4">
            <i className="m-2 fa-regular fa-envelope"></i> gszcode@gmail.com
          </p>
          <p className="text-lg cursor-pointer hover:text-second-color md:ml-4">
            <i className="m-2 fa-brands fa-linkedin-in"></i> Gabiel Sanchez
          </p>
        </div>
        <FormContact />
      </div>

      <div className="bg-white break border-none"></div>
    </section>
  )
}

export default Contact
