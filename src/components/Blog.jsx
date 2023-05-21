import ArticleBlog from './ArticleBlog'

const Blog = () => {
  return (
    <section
      id="blog"
      className="p-4 flex flex-col items-center justify-evenly h-full gap-5"
    >
      <div>
        <h2 className="text-2xl font-bold text-center">Blog</h2>
        <h4 className="text-second-grey mt-4">
          Últimas novedades en nuestro blog
        </h4>
      </div>
      <ArticleBlog />
      <ArticleBlog />
      <ArticleBlog />
    </section>
  )
}

export default Blog
