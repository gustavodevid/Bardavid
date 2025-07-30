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
import Techstack from '../components/Techstack'
import Gow from '../components/GowDB.tsx'
import Fidelius from '../components/Fidelius.tsx'
import Walkme from '../components/Walkmefront.tsx'
import { ResumeDownload } from '../components/ResumeDownload.jsx'
import { Testimonials } from '../components/Testimonials.jsx'
import { FeedbackSection } from '../components/FeedbakSection.jsx'
import Comentarios from '../components/comentarios.jsx'

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
      <Gow />
      <Fidelius />
      <h2>Some of My Projects</h2>
      <Grid className='projetos' container spacing={1}   
        sx={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            {ProjetosData.map(projeto => (
              <Grid key={projeto.id} item xs={6} sm={6} md={4} lg={3}>
                <CardComponent projeto={projeto} />
              </Grid>
            ))}
      </Grid>
      <a href="https://github.com/gustavobardavid" target='blank'>
        <h1>See All My Projects On GitHub   <span className="fab fa-github"></span></h1>
      </a>
      <Techstack />
        <Logos logosData={logosData}/>  
      <Proposta />
      {/* <FeedbackSection /> */}
      
      <footer>
      <Footer/>
      </footer>
      </>
    )
  }
  
  export default Home