import React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
  Button, IconButton, Chip, Stack
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const MobileProjectCard = ({ projeto }) => {
  return (
    <Card
      className='mobile-projeto'
      sx={{
        maxWidth: 300,
        backgroundColor: 'var(--primary)',
        color: 'var(--secondary)',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        sx={{
           width: '100%',
            height: 'auto',
            objectFit: 'contain',  
            objectPosition: 'top',
            backgroundColor: '#000',
        }}
        image={projeto.img}
        alt={projeto.title}
      />

      <CardContent sx={{ padding: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <PhoneIphoneIcon color="secondary" />
          <Typography variant="overline" color="secondary" fontWeight="bold">
            Mobile App
          </Typography>
        </Stack>

        <Typography gutterBottom variant="h5" fontFamily="var(--fonte)">
          {projeto.title}
        </Typography>

        <Typography variant="body2" fontFamily="var(--fonte)" mb={2}>
          {projeto.subtitle}
        </Typography>

        <Stack direction="row" spacing={1} mb={2}>
          {projeto.platforms?.map((platform, idx) => (
            <Chip key={idx} label={platform} color="default" size="small" />
          ))}
        </Stack>

        <Stack direction="row" spacing={1} mb={2}>
          {projeto.tecnologies.map((tech) => (
            <Chip
              key={tech.id}
              label={tech.name}
              color={tech.color}
              size="small"
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}
            endIcon={<ArrowForwardIcon />}
            href={projeto.link}
            target="_blank"
          >
            Ver App
          </Button>

          {projeto.git && (
            <IconButton
              aria-label="GitHub"
              href={projeto.git}
              target="_blank"
              sx={{ color: 'var(--secondary)' }}
            >
              <GitHubIcon />
            </IconButton>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MobileProjectCard;
