import { Link } from 'react-router-dom'
import blogImg from '../img/header-01.webp'

const imgs = [
  {
    id: 1,
    img: blogImg,
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis minus inventore quaerat distinctio'
  },
  {
    id: 2,
    img: blogImg,
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis minus inventore quaerat distinctio'
  },
  {
    id: 3,
    img: blogImg,
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis minus inventore quaerat distinctio'
  },
  {
    id: 4,
    img: blogImg,
    title: 'hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis minus inventore quaerat distinctio'
  },
  {
    id: 5,
    img: blogImg,
    title: 'bebe',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis minus inventore quaerat distinctio'
  },
  {
    id: 6,
    img: blogImg,
    title: 'cita',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis minus inventore quaerat distinctio'
  },
  {
    id: 7,
    img: blogImg,
    title: 'asiii',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis minus inventore quaerat distinctio'
  }
]

const ArticleBlog = () => {
  return (
    <>
      {imgs.splice(imgs.length - 3, imgs.length - 1).map((art) => (
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
      ))}
    </>
  )
}

export default ArticleBlog
