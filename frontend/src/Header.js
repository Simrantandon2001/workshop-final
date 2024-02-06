import {React,useState} from 'react'
import { Grid ,Typography,Button} from '@mui/material'
import Flogo from './Images/Flogo.png'
// import { Link } from 'react-router-dom';
import {Link} from '@mui/material'



const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
<Grid container lg={12} sx={{backgroundColor:'#ECE1C7'}}>
<Grid container lg={11} sx={{margin:'auto',backgroundColor:'#fff',borderRadius:'56px',padding:'12px',marginTop:'56px'}}>
<Grid container lg={2.8}>
<Grid item lg={12}>
<img src={Flogo} style={{width:'157px',height:'54px'}}>

</img>
</Grid>
</Grid>
<Grid container lg={9.2}  sx={{alignItems:'center',display:'flex',justifyContent:'center'}}>

     
      <Grid item  lg={1.2}>
        <Link href='https://fosterreads.com/' sx={{ textDecoration: 'none' }}>
        <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Poppins',color:'#000'}} >
        Home
        </Typography>
        </Link>
      </Grid>
      <Grid item lg={2}>
      <Link href='https://fosterreads.com/fostertalks/' sx={{ textDecoration: 'none' }}>
        <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Poppins',color:'#000',textDecoration:'none'}}>
        Foster Talks
        </Typography>
        </Link>
      </Grid>
      <Grid item lg={1.3}>
      <Link href='https://fosterreads.com/' sx={{ textDecoration: 'none' }}>
        <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Poppins',color:'#000',}}>
        Events
        </Typography>
        </Link>
      </Grid>
      <Grid item lg={1.8}>
        <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Poppins',color:'#179886' }} >
        Workshops
        </Typography>
      </Grid>
      <Grid item lg={1.8}>
      <Link href='https://fosterreads.com/contact-us/' sx={{ textDecoration: 'none' }}>
        <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Poppins',color:'#000'}}>
         Contact Us
        </Typography>
        </Link>
      </Grid>

      <Grid item lg={3.8} sx={{display:'flex',justifyContent:'flex-end'}}>
        <Button sx={{fontSize:'20px',fontWeight:'800',fontFamily:'Poppins',color:'#000',backgroundColor:'#E9BF5E',textTransform:'none',borderRadius:'56px',padding:'12px 24px'}} >
        Join our community
        </Button>
      </Grid>

    </Grid>
</Grid>
</Grid>


    </>
  )
}

export default Header