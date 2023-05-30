import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBlogs } from '../slides/blog/blogSlice'

const AllBlogs = () => {
  const { allBlogs } = useSelector((state) => state.blogAdmin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  return (
    <>
      <h2 className="text-2xl font-bold text-center md:text-4xl pt-28">
        Todos nuestros Blogs
      </h2>
      <section className="px-3 min-h-screen flex justify-evenly items-start gap-3 flex-wrap">
        {!allBlogs.length ? (
          <p className="font-semibold text-lg border-b-2 border-black mt-40">
            No hay Blogs
          </p>
        ) : (
          allBlogs.map((art) => (
            <article className="w-[320px] mt-20 shadow-md p-3" key={art.id}>
              <div className="w-full h-56 lg:h-60">
                <img
                  className="w-full h-full object-cover"
                  src={art.image}
                  alt={`${art.title.slice(0, 15)}...`}
                />
              </div>
              <h3 className="text-lg font-semibold my-3 lg:text-2xl">
                {`${art.title.slice(0, 20)}...`}
              </h3>
              <p className="my-3 text-sm text-second-grey lg:text-base">
                {`${art.description.slice(0, 25)}...`}
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
      </section>
    </>
  )
}

export default AllBlogs
