const ArticleChoose = ({ title, description, iconClass }) => {
  return (
    <article
      className="flex flex-col items-center text-center text-grey lg:w-[45%]"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center mb-2 lg:w-20 lg:h-20">
        <i className={`text-3xl ${iconClass} lg:text-4xl`}></i>
      </div>
      <h3 className="my-3 text-xl font-semibold lg:text-2xl">{title}</h3>
      <p className="text-sm text-grey lg:text-base">{description}</p>
    </article>
  )
}

export default ArticleChoose
