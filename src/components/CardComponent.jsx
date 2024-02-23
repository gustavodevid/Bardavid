import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardComponent = ({ projeto }) => {
  return (
    <Card sx={{ maxWidth: 400, 
    backgroundColor: '#fff', 
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
        <Typography gutterBottom variant="h5" fontFamily={'monospace'} component="div">
          {projeto.title}
        </Typography>
        <Typography sx={{margin:1}} variant="body2" fontFamily={'monospace'}>
          {projeto.subtitle}
        </Typography>
        <Button sx={{margin:1}} endIcon={<ArrowForwardIcon />} variant="outlined" href="https://gowdb.vercel.app">
          Ver mais
        </Button>
        <IconButton aria-label="github" href="https://github.com/gustavobardavid">
          <GitHubIcon />
        </IconButton>
        <div style={{ marginTop: '15px' }}>
          <Chip label="TypeScript" />
          <Chip label="React" />
          <Chip label="Vite" />
        </div>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
