import '../styles/button.css'
import '../styles/gallery.css'
import '../styles/card.css'
import '../vendor/fontawesome-free/css/all.min.css' 
import Cabecalho from '../components/Cabecalho'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import Habilidades from '../components/Habilidades'
import Projetos from '../components/Projetos'
import Footer from '../components/Footer'
import projetosMobileData from '../js/projetosMobileData.js'
import projetosWebData from '../js/projetosWebData.js'
import Proposta from '../components/Proposta.jsx'
import LogoCollection from '../components/LogoCollection.jsx'
import Logos from '../components/Logos.jsx';
import logosData from '../js/logosData.js';
import { Typography } from '@mui/material'

function Home() {
    return (
      <>
      <div>
       <Cabecalho />
      </div>
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
      <Logos logosData={logosData}/>
      <Projetos tipo="Web" imagens={projetosWebData} tamanho='400px' />
      <LogoCollection />
      <Projetos tipo="Mobile" imagens={projetosMobileData} tamanho='250px'/>
      <a href="https://github.com/gustavobardavid">
        <h1>Veja todos os projetos no GitHub <span className="fab fa-github"></span></h1>
      </a>
      <Proposta />
      <footer>
      <Footer/>
      </footer>
      </>
    )
  }
  
  export default Home