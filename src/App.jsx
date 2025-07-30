import './App.css'
import { Seo } from './components/Seo'
import Home from './router/Home'
function App() {
  return (
    <>
    <Seo title="Gustavo David - Desenvolvedor Web" description="Portfólio de Gustavo David com projetos de front-end e fullstack." />
     <Home />
    </>
  )
}

export default App
