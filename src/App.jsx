import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from './components/Background'
import Layout from './components/Layout'
import About from './components/About'
import ChooseUs from './components/ChooseUs'
import Blog from './components/Blog'
import Methodologies from './components/Methodologies'
import Contact from './components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

function App() {
  return (
    <Layout>
      <Background />
      <Methodologies />
      <About />
      <ChooseUs />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default App
