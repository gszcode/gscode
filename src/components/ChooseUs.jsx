import ArticleChoose from './ArticleChoose'

const ChooseUs = () => {
  return (
    <section id="chooseus" className="w-full relative my-28">
      <div className="p-4 background-main background-choose">
        <h3 className="text-2xl text-white font-semibold text-center mb-10 md:mb-0 md:text-3xl lg:text-4xl">
          ¿Por qué elegirnos?
        </h3>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:py-20">
          <ArticleChoose
            title="Búsquedas a éxito"
            iconClass="fa-solid fa-trophy"
            description="Realizamos las búsquedas 100% a riesgo, nuestro foco está en primero
                        cubrir la necesidad del cliente."
          />
          <ArticleChoose
            title="Garantía"
            iconClass="fa-sharp fa-solid fa-circle-check"
            description="Nuestro servicio cuenta con un plazo de cobertura sin costos adicionales, para garantizar la correcta adaptación del candidato."
          />
          <ArticleChoose
            title="Ganar - Ganar"
            iconClass="fa-solid fa-handshake"
            description="Apostamos a ser un socio estratégico de nuestros clientes, fomentando relaciones largas y duraderas."
          />
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
