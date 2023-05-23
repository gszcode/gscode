import blogImg from '../img/header-01.webp'

const ArticleBlog = () => {
  return (
    <article data-aos="fade-up" data-aos-duration="2000">
      <div className="w-full h-40">
        <img className="w-full h-full object-cover" src={blogImg} />
      </div>
      <h3 className="text-lg font-semibold my-3">Lorem ipsum dolor</h3>
      <p className="my-3 text-sm text-second-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis
        minus inventore quaerat distinctio
      </p>
      <button className="font-semibold text-primary-color">Leer más »</button>
    </article>
  )
}

export default ArticleBlog
