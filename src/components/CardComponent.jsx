import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardComponent = ({ projeto }) => {
  return (
    <Card sx={{ maxWidth: 400, 
    backgroundColor: 'var(--primary)', 
    color: 'var(--secondary)',
    borderRadius: '5px',  
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    }}>
      <CardMedia
        component="img"
        style={{ objectPosition: 'center top', height: 'auto', width: '100%', objectFit: 'cover' }}
        image={projeto.img}
        alt="Image"
      />
      <CardContent sx={{padding:4, gap: '5px', lineHeight: 1.5}}>
        <Typography gutterBottom variant="h5" fontFamily={'var(--fonte)'}  component="div">
          {projeto.title}
        </Typography>
        <Typography sx={{margin:1}} variant="body2" fontFamily={'var(--fonte)'}>
          {projeto.subtitle}
        </Typography>
        <Button sx={{margin:1}} endIcon={<ArrowForwardIcon />} variant="outlined" href={projeto.link} target='blank'>
          Ver mais
        </Button>
        <IconButton aria-label="github" href={projeto.git} target='blank'>
          <GitHubIcon />
        </IconButton>
        <div style={{ marginTop: '15px', display: 'grid', gridTemplateColumns:'repeat(3,1fr)', gap: '5px' }}>
        {projeto.tecnologies.map(tecnologie => (
          <div key={tecnologie.id}>
            <Chip color={tecnologie.color} label={tecnologie.name} />
          </div>
          ))}
          </div>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
