import * as React from 'react';
import { IconButton, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Walkme() {
  return (
    <>
    <div className='content'>
        <div className='gow-background'></div>
        <div className='hero'>
            <Box
        id="hero"
        sx={({ 
          width: '100%',
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 1, sm:  15 },
            pb: { xs: 22, sm: 12 }
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
                component="span"
                variant="h2"
                sx={{
                  color: 'var(--secondary)',
                  fontFamily: 'Poppins',
                  fontWeight:'bold'
                }}
              >#Gow DB
              </Typography>
              <Typography
                component="span"
                variant="h4"
                sx={{
                  color: 'var(--secondary)',
                  fontFamily: 'Poppins'
                }}
              >
              A God of War Database
              </Typography>
            <Typography variant="body2" textAlign="center" color='var(--secondary)' style={{ fontFamily: 'Poppins' }}>
                Rest API of GOW Universe. 
                <Button sx={{margin:1, backgroundColor:'var(--secondary)', color:'var(--primary)'}} endIcon={<ArrowForwardIcon />} variant="contained" href="https://gowdb.vercel.app" target='blank'>
                  See More
              </Button>
                <IconButton aria-label="github" href="https://github.com/gustavobardavid/gow-db/" target='blank'>
                  <GitHubIcon />
                </IconButton>
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' }, fontFamily: 'Poppins' }}
            >
            </Stack>
          </Stack>
        </Container>
        </Box>
      </div>
      </div>
    </>
  );
}