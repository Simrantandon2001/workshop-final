import logo from './logo.svg';
import './App.css';
import { Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useMediaQuery} from '@mui/material';
import Poppins from '@fontsource/poppins';
import Footer from './Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import Star from './Images/star.png'
import Starm from './Images/starm.png'
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});
function Beforef() {
  const mobile=useMediaQuery('(max-width:600px)');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSignUp = () => {
    // Send formData to the backend
    console.log('Sending data to backend:', formData);
    // You can make an API request or perform any other action here
  };
  return (
    <ThemeProvider theme={theme}>
    <Grid container lg={12} xs={12} sx={{background:'#ECE1C7'}}>
      <Grid container lg={12} xs={12} sx={{backgroundImage:mobile?`url(${Starm})`:`url(${Star})`,backgroundRepeat:'no-repeat',backgroundPosition:'Top Right'}}>
      <Grid container lg={11} xs={10} sx={{background:'#103648',margin:'auto',marginTop:mobile?'29px':'70px',marginBottom:mobile?'40px':'60px',padding:'20px',borderRadius:'26px'}}>
        <Grid container lg={4} sx={{marginTop:'36px'}}>
       <Grid item lg={12}>
       <Typography style={{fontFamily:'Poppins',color:'#FFF'}}>Hey Podcast Enthusiats! Ready to step into the spotlight? At Foster Talks, we’re turning up the volume on your stories, ideas and unique perspectives! </Typography>
       </Grid>
       <Grid item lg={12}>
       <Typography style={{fontFamily:'Poppins',color:'#FFF'}}>Ready to Shine? Here’s your Cue! </Typography>
       </Grid>
       <Grid item lg={12}>
       <Typography style={{fontFamily:'Poppins',color:'#FFF'}}>Fill out this form and let the podcasting adventure begin! Your story is the star, Foster talks is the spotlight! </Typography>
       </Grid>
        </Grid>
        <Grid container spacing={2} lg={7.5} xs={12} sx={{ background: '#FFF', borderRadius:'26px',marginTop:'36px',marginLeft:mobile?'0px':'25px' }}>
      <Grid item lg={6} xs={11.2}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          style={{fontFamily:'Poppins'}}
          value={formData.firstName}
          onChange={handleChange('firstName')}
        />
      </Grid>
      <Grid item lg={6} xs={11.2}>
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          value={formData.lastName}
          onChange={handleChange('lastName')}
        />
      </Grid>
      <Grid item  lg={6} xs={11.2}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange('email')}
          inputProps={{ style: { borderRadius: '90px' } }}
        />
      </Grid>
      <Grid item lg={6} xs={11.2}>
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          value={formData.contactNumber}
          onChange={handleChange('contactNumber')} 
          inputProps={{ style: { borderRadius: '90px' } }}
        />
      </Grid>
      <Grid item  lg={12} sx={{justifyContent:'center',display:'flex'}}>
        <Button
          variant="contained"
          onClick={handleSignUp}
          sx={{ bgcolor: '#E9BF5E',borderRadius: '56px',fontWeight:'500',marginTop:mobile?'0px':'36px',textTransform:'none',padding:'12px 24px', color: '#000',fontSize:mobile?'12px': '20px','&:hover': { bgcolor: '#E9BF5E' } }}
        >
          Sign up now
        </Button>
      </Grid>
      <Grid item  lg={12} xs={9} sx={{justifyContent:'center',display:'flex'}}>
        <Stack direction="row" spacing={1}>
          <Typography variant="body2" sx={{color:'#179886',fontSize:'20px',fontWeight:'400',}}>#BondOverBooks</Typography>
        </Stack>
      </Grid>
    </Grid>
      </Grid>
      </Grid>
    </Grid>
  
    </ThemeProvider>
  );
}

export default Beforef;