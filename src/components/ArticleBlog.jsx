import blogImg from '../img/header-01.webp'

const ArticleBlog = () => {
  return (
    <article data-aos="fade-up" data-aos-duration="2000">
      <div className="w-full h-40 lg:h-60">
        <img className="w-full h-full object-cover" src={blogImg} />
      </div>
      <h3 className="text-lg font-semibold my-3 lg:text-2xl">
        Lorem ipsum dolor
      </h3>
      <p className="my-3 text-sm text-second-grey lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis
        minus inventore quaerat distinctio
      </p>
      <button className="font-semibold text-primary-color lg:text-lg">
        Leer más »
      </button>
    </article>
  )
}

export default ArticleBlog
