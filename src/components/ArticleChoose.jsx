const ArticleChoose = ({ title, description, iconClass }) => {
  return (
    <article className="flex flex-col items-center text-center text-grey">
      <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center mb-2">
        <i className={`text-3xl ${iconClass}`}></i>
      </div>
      <h3 className="my-3 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-grey">{description}</p>
    </article>
  )
}

export default ArticleChoose
