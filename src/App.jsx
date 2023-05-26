import './App.css'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout'
import AOS from 'aos'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BlogId from './pages/BlogId'
import AllBlogs from './pages/AllBlogs'
AOS.init()

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/blog/:id" element={<BlogId />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
