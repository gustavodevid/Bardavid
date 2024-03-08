import '../styles/button.css'
import '../styles/gallery.css'
import '../styles/card.css'
import '../vendor/fontawesome-free/css/all.min.css' 
import Cabecalho from '../components/Cabecalho'
import Profile from '../components/Profile'
import Habilidades from '../components/Habilidades'
import Footer from '../components/Footer'
import Proposta from '../components/Proposta.jsx'
import Logos from '../components/Logos.jsx';
import logosData from '../js/logosData.js';
import { Grid } from '@mui/material'
import FotoProfile from '../components/FotoProfile.jsx'
import CardComponent from '../components/CardComponent.jsx';
import ProjetosData from '../js/projetosData.js';

function Home() {
    return (
      <>
       <div className='hello'>
          <Profile
          foto = './assets/eu2.jpg'/>
          </div>
      <br />
       <aside>
          <FotoProfile foto = './assets/eu2.jpg' />
       </aside>
      <Habilidades/>
          <Logos logosData={logosData}/>  
      <Grid className='projetos' container spacing={1}   
        sx={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            {ProjetosData.map(projeto => (
              <Grid key={projeto.id} item xs={6} sm={6} md={4} lg={2}>
                <CardComponent projeto={projeto} />
              </Grid>
            ))}
      </Grid>
      <a href="https://github.com/gustavobardavid" target='blank'>
        <h1>Veja todos os projetos no GitHub <span className="fab fa-github"></span></h1>
      </a>
      <Proposta />
          <Cabecalho />
      <footer>
      <Footer/>
      </footer>
      </>
    )
  }
  
  export default Home