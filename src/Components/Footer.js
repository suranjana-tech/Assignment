import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import './footer.css'; // Create this CSS file for styling
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className="footer-container">
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <div>
            <Typography sx={{fontSize:"25px", fontFamily:"Times New Roman"}}>Follow us on</Typography>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Grid item>
            <IconButton href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" sx={{color:"white"}}>
                <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer" sx={{color:"white"}}>
              <TwitterIcon />
            </IconButton>
          </Grid>
            </div>
            
            </div>
          
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
