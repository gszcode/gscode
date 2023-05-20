import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from './components/Background'
import Layout from './components/Layout'
import WokrkMethodologies from './components/WorkMethodologies'
import SearchMethodologies from './components/SearchMetodologies'
import About from './components/About'
import ChooseUs from './components/ChooseUs'

function App() {
  return (
    <Layout>
      <Background />
      <WokrkMethodologies />
      <div className="div" />
      <SearchMethodologies />
      <About />
      <ChooseUs />
    </Layout>
  )
}

export default App
