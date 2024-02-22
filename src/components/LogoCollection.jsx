import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png  ',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg',
];

const logoStyle = {
  width: '80px',
  height: '60px',
  margin: '0 32px',
  opacity: 0.7,
  color: '#fff'
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="#fff"
      >
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}