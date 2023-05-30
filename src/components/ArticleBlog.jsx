import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBlogs } from '../slides/blog/blogSlice'

const ArticleBlog = () => {
  const { allBlogs } = useSelector((state) => state.blogAdmin)
  const dispatch = useDispatch()

  const blogs =
    allBlogs.length > 3
      ? allBlogs.splice(allBlogs.length - 3, allBlogs.length - 1)
      : allBlogs

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  return (
    <>
      {!allBlogs.length ? (
        <p className="font-semibold text-lg border-b-2 border-black">
          No hay Blogs
        </p>
      ) : (
        blogs.map((art) => (
          <article key={art.id} data-aos="fade-up" data-aos-duration="2000">
            <div className="w-full h-56 lg:h-60">
              <img
                className="w-full h-full object-cover"
                src={art.img}
                alt={art.title}
              />
            </div>
            <h3 className="text-lg font-semibold my-3 lg:text-2xl">
              {art.title}
            </h3>
            <p className="my-3 text-sm text-second-grey lg:text-base">
              {art.description}
            </p>
            <Link
              to={`/blog/${art.id}`}
              className="font-semibold text-primary-color lg:text-lg"
            >
              Leer más »
            </Link>
          </article>
        ))
      )}
    </>
  )
}

export default ArticleBlog
