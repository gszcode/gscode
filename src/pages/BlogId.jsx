import { useParams } from 'react-router-dom'

const BlogId = () => {
  const { id } = useParams()
  console.log(id)

  return <section className="min-h-screen">Holia</section>
}

export default BlogId
