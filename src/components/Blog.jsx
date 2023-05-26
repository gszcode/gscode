import { Link } from 'react-router-dom'
import ArticleBlog from './ArticleBlog'

const Blog = () => {
  return (
    <section id="blog">
      <div className="block">
        <h2 className="text-2xl font-bold text-center md:text-4xl">Blog</h2>
        <h4 className="text-second-grey mt-4 text-center md:text-lg">
          Últimas novedades en nuestro blog{' '}
          <Link to="/blogs" className="text-sm text-second-color">
            (<span className="line">Ver todos los Blogs</span>)
          </Link>
        </h4>
      </div>
      <div className="p-4 flex flex-col items-center justify-evenly h-full gap-5 md:flex-row">
        <ArticleBlog />
      </div>
    </section>
  )
}

export default Blog
