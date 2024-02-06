import React from 'react'
import { Grid, Typography } from '@mui/material';
import logofooter from './Images/logofooter.png'
import YoutubeIcon from './Youtube';
import InstaIcon from './Instagram';
import SpotifyIcon from './Spotify';
import {useMediaQuery} from '@mui/material';
import {IconButton} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
  });
const Footer = () => {
    const mobile=useMediaQuery('(max-width:600px)');
  return (
    <ThemeProvider theme={theme}>
        <Grid container lg={12} sx={{background:'#ECE1C7'}}>
            <Grid container lg={11} xs={10} sx={{background:'#103648',borderRadius:'26px',margin:'auto',padding:mobile?'16px':'54px 54px 20px 54px',marginBottom:'56px'}}>
            <Grid item lg={2.5}>
                <img src={logofooter}  style={{ width: mobile ? '88px' : '175px' }}/>
            </Grid>
            <Grid item xs={12} lg={2}>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:600,lineHeight:'24px',color:'#fff'}}>
            Menu
          </Typography>
          <Typography variant="h6" gutterBottom  style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
            Home
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
            Bookstores
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
            Events
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
            Workshops
          </Typography>
          {/* Add your menu items here */}
        </Grid>

        {/* Second Column: Contact */}
        <Grid item xs={12} lg={3}>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:600,lineHeight:'24px',color:'#fff'}}>
            Contact
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
          connect@fosterreads.com
          </Typography>
          {/* Add contact information here */}
        </Grid>

        {/* Third Column: Address */}
        <Grid item xs={12} lg={2.5}>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:600,lineHeight:'24px',color:'#fff'}}>
            Address
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff',marginRight:'25px'}}>
          Unit-125, First floor, Vipul Trade Centre,
Sector-48,
Gurugram,
India
          </Typography>
          {/* Add address information here */}
        </Grid>

        {/* Fourth Column: More Section */}
        <Grid item xs={12} lg={2}>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:600,lineHeight:'24px',color:'#fff'}}>
            More Section
          </Typography>
          <Typography variant="h6" gutterBottom  style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
            Gallery
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
            Testimonials
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
          Join Our Book Club
          </Typography>
          <Typography variant="h6" gutterBottom style={{fontSize:mobile?'12px':'18px',fontWeight:400,lineHeight:mobile?'18px':'24px',color:'#fff'}}>
           Inquiries
          </Typography>
          {/* Add more section information here */}
        </Grid>
        <Grid item lg={10} xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <IconButton color="primary">
          <InstaIcon/>
          </IconButton>
          <IconButton color="primary">
          <SpotifyIcon/>
          </IconButton>
          <IconButton color="primary">
          <YoutubeIcon/>
          </IconButton>
        </Grid>
        <Grid item lg={2} xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Typography variant="body2" color="textSecondary" style={{fontSize:'16px',fontWeight:400,lineHeight:'24px',color:'#D9D9D9'}}>
            © {new Date().getFullYear()} By Fosterreads
          </Typography>
        </Grid>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default Footer