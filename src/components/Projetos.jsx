import { Grid } from '@mui/material';
import ProjetosData from '../js/projetosData.js';
import CardComponent from './CardComponent.jsx';

const Projetos = () => {
  return (    
    <Grid className='projetos' container spacing={2}   
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
  );
}

export default Projetos;
