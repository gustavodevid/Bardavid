import { Card, CardContent, Typography } from '@mui/material';

const Work = ({ logo }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Título do Card
        </Typography>
        <img src={logo} alt="" />
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vitae velit nec est vestibulum gravida sit amet vitae lorem.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Work;
