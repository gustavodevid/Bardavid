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
import { Grid, Typography } from '@mui/material'
import FotoProfile from '../components/FotoProfile.jsx'
import CardComponent from '../components/CardComponent.jsx';
import ProjetosData from '../js/projetosData.js';
import ScrollerLogo from '../components/ScrollerLogo.jsx';

function Home() {
    return (
      <>
      <div>
       <Cabecalho />
      </div>
       <Navbar/>
       <div className='hello'>
          <Profile
          foto = './assets/eu2.jpg'/>
          </div>
       <aside>
          <FotoProfile foto = './assets/eu2.jpg' />
       </aside>
         <Logos logosData={logosData}/>
      <Habilidades/>
      
      <h2>Projetos</h2>

      <Grid container spacing={2}   
        sx={{
          alignItems: 'center',
          justifyContent: 'center', marginBottom: 5
        }}>
            {ProjetosData.map(projeto => (
              <Grid key={projeto.id} item xs={12} sm={6} md={4} lg={3}>
              <CardComponent projeto={projeto} />
              </Grid>
            ))}
      </Grid>
      <a href="https://github.com/gustavobardavid" target='blank'>
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