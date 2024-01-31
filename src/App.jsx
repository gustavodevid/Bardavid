import './App.css'
import './components/Cabecalho'
import './styles/button.css'
import './styles/gallery.css'
import './styles/card.css'
import './vendor/fontawesome-free/css/all.min.css' 
import Cabecalho from './components/Cabecalho'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Habilidades from './components/Habilidades'
import Logos from './components/Logos'
import Projetos from './components/Projetos'
import Footer from './components/Footer'

const logosData = [
    { src: 'assets/html5.png', alt: 'Logo 2', width: '50px' },
    { src: 'assets/css3.png', alt: 'Logo 1', width: '47px' },
    { src: 'assets/java.png', alt: 'Logo 3', width: '80px' },
    { src: 'assets/spring.png', alt: 'Logo 3', width: '80px' },
    { src: 'assets/node.png', alt: 'Logo 3', width: '100px' },
    { src: 'assets/js.png', alt: 'Logo 3', width: '60px' },
  ];

  const projetosWebData = [
    { src: 'assets/Fidelius.png', alt: 'Website/Gamer Site', tipo: 'Software' },
    { src: 'assets/portalifpb.png', alt: 'Redesign/PortalIFPB', tipo: 'Redesign' },
    { src: 'assets/games.png', alt: 'Website/Online Shop', tipo: 'Website' },
  ];

  const projetosMobileData = [
    { src: 'assets/nubank.png', alt: 'Website/Gamer Site', tipo: 'Software' },
    { src: 'assets/buscacep.png', alt: 'Redesign/PortalIFPB', tipo: 'Redesign' },
    { src: 'assets/chester.png', alt: 'Website/Online Shop', tipo: 'Website' },
  ];

function App() {
  return (
    <>
     <Cabecalho/>
     <Navbar/>
     <aside>
        <Profile
        foto = './assets/eu2.jpg'/>
     </aside>
     <a href=" https://wa.me/5583991135073/?text=Oi,+Gustavo!+Quero+solicitar+um+orçamento">
        <h1>Solicitar um orçamento<span className="material-symbols-outlined">
            arrow_outward
            </span></h1>
    </a>
    <Habilidades/>
    <Logos logosData={logosData} />
    <Projetos tipo="Web" imagens={projetosWebData} tamanho='400px' />
    <Projetos tipo="Mobile" imagens={projetosMobileData} tamanho='250px'/>
    <footer>
    <Footer/>

    </footer>
    </>
  )
}

export default App
