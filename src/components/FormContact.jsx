import CustomInput from './CustomInput'

const FormContact = () => {
  return (
    <form
      className="flex flex-col gap-2 w-full p-4 text-second-grey justify-center md:flex-row md:flex-wrap"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <CustomInput placeholder="Nombre" type="text" />
      <CustomInput placeholder="Teléfono" type="tel" />
      <CustomInput placeholder="Email" type="email" />
      <CustomInput placeholder="Asunto" type="text" />
      <div className="textarea">
        <textarea
          className="outline-none w-full h-40 resize-none px-3 pt-2 font-light md:w-[80vw] lg:w-[63vw]"
          placeholder="Mensaje"
          required
        />
      </div>
      <div className="w-60 flex justify-start md:justify-center lg:w-full btn-contact">
        <button className="md:w-full px-4 self-center text-dark border-2 border-transparent bg-second-color py-2.5 hover:bg-transparent hover:border-2 hover:border-white hover:text-white color">
          Enviar <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </form>
  )
}

export default FormContact
