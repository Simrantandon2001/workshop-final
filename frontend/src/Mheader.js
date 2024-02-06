import React, { useState } from 'react';
import { Grid, Typography, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Mlogo from './Images/Mlogo.png'
import CloseIcon from '@mui/icons-material/Close';
const Mheader = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
     <Grid container lg={12}  alignItems="center" sx={{ backgroundColor: '#ECE1C7' }}>
      <Grid container lg={10} xs={10} sx={{ margin: 'auto', backgroundColor: '#fff', borderRadius: '56px', padding: ' 6px 12px',marginTop:'26px' }}>
        <Grid container lg={4} xs={10} >
          <Grid item xs={12}>
           
             
              <img src={Mlogo} alt="Logo" style={{ height: '40px' }} />
            
          </Grid>
        </Grid>
       
          <Grid item xs={2} sx={{justifyContent:'flex-end'}}>
        
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Grid>
      
      </Grid>
    </Grid>

   
      <Drawer  open={isDrawerOpen} onClose={toggleDrawer}>
   
      <Grid item lg={12} xs={12} style={{ width: '100%' }}>
          <IconButton style={{ float: 'right',width:'32px',height:'32px',color:'#333335',marginTop:'26px' }} onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
          <Grid container lg={10} xs={12} sx={{margin:'20px'}}>
          <Grid item lg={10} xs={12}>
          <Typography sx={{fontSize:'16px',fontWeight:'400',fontFamily:'Poppins',color:'#000',lineHeight:'12px',marginTop:'74px'}} >Home</Typography>
          </Grid>
          <Grid item lg={10} xs={12}>
          <Typography sx={{fontSize:'16px',fontWeight:'400',fontFamily:'Poppins',color:'#000',lineHeight:'12px',marginTop:'26px'}} >Foster Talks</Typography>
          </Grid>
          <Grid item lg={10} xs={12}>
          <Typography sx={{fontSize:'16px',fontWeight:'400',fontFamily:'Poppins',color:'#000',lineHeight:'12px',marginTop:'26px'}}>Events</Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
          <Typography sx={{fontSize:'16px',fontWeight:'400',fontFamily:'Poppins',color:'#000',lineHeight:'12px',marginTop:'26px'}} >Workshops</Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
          <Typography sx={{fontSize:'16px',fontWeight:'400',fontFamily:'Poppins',color:'#000',lineHeight:'12px',marginTop:'26px'}} >Contact Us</Typography>
          </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default Mheader;
