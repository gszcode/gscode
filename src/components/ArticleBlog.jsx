import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBlogs } from '../slides/blog/blogSlice'

const ArticleBlog = () => {
  const { allBlogs } = useSelector((state) => state.blogAdmin)
  const dispatch = useDispatch()

  const blogs =
    allBlogs.length > 3
      ? allBlogs.slice(allBlogs.length - 3, allBlogs.length - 1 + 1)
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
          <article
            key={art.id}
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-[250px] md:w-[300px] py-2 px-3 shadow-sm"
          >
            <div className="w-full h-56 lg:h-60">
              <img
                className="w-full h-full object-cover"
                src={art.image}
                alt={`${art.title.slice(0, 10)}...`}
              />
            </div>
            <h3 className="text-lg font-semibold my-3 lg:text-2xl">
              {`${art.title.slice(0, 15)}...`}
            </h3>
            <p className="my-3 text-sm text-second-grey lg:text-base ">
              {`${art.description.slice(0, 20)}...`}
            </p>
            <Link
              to={`/blog/${art._id}`}
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
