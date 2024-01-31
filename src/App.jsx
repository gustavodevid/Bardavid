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
    { src: 'assets/Fidelius.png', alt: 'Software', tipo: 'Software/Semiologia' },
    { src: 'assets/portalifpb.png', alt: 'Redesign/PortalIFPB', tipo: 'Redesign/PortalIFPB' },
    { src: 'assets/games.png', alt: 'Website/Online Shop', tipo: 'Website/Loja de Games' },
  ];

  const projetosMobileData = [
    { src: 'assets/nubank.png', alt: 'Redesign', tipo: 'Redesign/Nubank' },
    { src: 'assets/buscacep.png', alt: 'APP', tipo: 'App/BuscaCEP' },
    { src: 'assets/chester.png', alt: 'App', tipo: 'App/Barbearia' },
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
    <a href="https://github.com/gustavobardavid">
      <h1>Veja todos os projetos no GitHub <span className="fab fa-github"></span></h1>
    </a>
    <footer>
    <Footer/>
    </footer>
    </>
  )
}

export default App
