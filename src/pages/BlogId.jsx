import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteBlog, getBlog, resetState } from '../slides/blog/blogSlice'
import Swal from 'sweetalert2'

const BlogId = () => {
  const { oneBlog, isDeleted } = useSelector((state) => state.blogAdmin)
  const { auth } = useSelector((state) => state.authAdmin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (isDeleted.success) {
      Swal.fire({
        text: isDeleted.message,
        icon: 'success',
        confirmButtonText: 'Cerrar'
      })

      dispatch(resetState())
      navigate('/blogs')
    }
  }, [isDeleted, navigate, dispatch])

  useEffect(() => {
    dispatch(getBlog(id))
  }, [dispatch, id])

  const handleClick = () => {
    dispatch(deleteBlog(id))
  }

  return (
    <section className="min-h-[1000px] flex justify-center">
      <article className="w-[340px] h-[350px] my-40 md:w-[500px] md:h-[500px] lg:w-full mx-20">
        <h3 className="text-lg text-center font-semibold my-3 md:text-3xl lg:text-4xl">
          {oneBlog.title}
        </h3>
        <div className="lg:flex gap-4 my-10">
          <div className="w-full h-full md:h-[450px] lg:min-w-[640px] lg:h-[500px]">
            <img
              className="w-full h-full object-cover"
              src={oneBlog.image}
              alt={oneBlog.title}
            />
          </div>
          <p className="my-3 text-sm text-second-grey md:text-lg lg:text-base">
            {oneBlog.description}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 lg:flex-row lg:justify-start">
          {auth && (
            <Link
              to={`/admin/update-blog/${oneBlog._id}`}
              className="bg-second-color text-center py-2 text-white lg:w-[245px]"
            >
              Editar
            </Link>
          )}
          {auth && (
            <button
              onClick={handleClick}
              className="bg-delete py-2 text-white lg:w-[245px]"
            >
              Eliminar
            </button>
          )}
        </div>
      </article>
    </section>
  )
}

export default BlogId
