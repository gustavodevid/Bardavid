import './App.css'
import './components/Cabecalho'
import './styles/button.css'
import './styles/gallery.css'
import './styles/card.css'
import './vendor/fontawesome-free/css/all.min.css' 
import Cabecalho from './components/Cabecalho'
import Profile from './components/Profile'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <Cabecalho/>
     <Navbar/>
     <aside>
        <Profile
        foto = './assets/eu2.jpg'/>
     </aside>
    </>
  )
}

export default App
