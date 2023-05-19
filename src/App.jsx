import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from './components/Background'
import Layout from './components/Layout'
import WokrkMethodologies from './components/WorkMethodologies'
import SearchMethodologies from './components/SearchMetodologies'

function App() {
  return (
    <Layout>
      <Background />
      <WokrkMethodologies />
      <div className="div" />
      <SearchMethodologies />
    </Layout>
  )
}

export default App
