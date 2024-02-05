import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import './about.css';

const About = () => {
  const [isZoomed, setZoomed] = useState(false);

  const handleImageClick = () => {
    setZoomed(!isZoomed);
  };

  return (
    <div>
      <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: "20px" }}>
        About Us
      </Typography>

      <Grid container>
        <Card className={isZoomed ? 'zoomed' : ''}>
          <CardMedia
            component="img"
            height="140"
            alt="Team Member 1"
            src="https://img.freepik.com/free-vector/people-working-as-team-background-flat-style_23-2147767891.jpg"
            style={{ height: isZoomed ? '600px' : '400px' }}
            className='zoom-image'
            onClick={handleImageClick}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              We are Kyptronix
            </Typography>
            <Typography variant="body2">
              Kyptronix LLP Is one of the top renowned digital advertising organizations catering to patrons everywhere within the world. Our services are focused on Branding, advertising, and marketing & virtual industrial employer techniques. we've got handpicked over 300 On-frame people who have profound expertise & real-Time experience In all of the additives of digital advertising.
            </Typography>
          </CardContent>
          <Button variant="contained" sx={{ marginBottom: "20px", marginLeft:"20px"}}>Contact Us</Button>
        </Card>
      </Grid>
    </Container>
    </div>
    
  );
};

export default About;
