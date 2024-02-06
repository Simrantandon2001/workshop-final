
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Mheader from './Mheader';
import Footer from './Footer';
import { Api_url } from './helper';
import {Grid,Button,Typography,useMediaQuery} from '@mui/material'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slide9 from './Images/Slide9.png'
import Slide3 from './Images/Slide3.png'
const FormList = () => {
  const [forms, setForms] = useState([]);
  const mobile = useMediaQuery('(max-width:600px)');
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(`${Api_url}/api/getAllForms`);
        setForms(response.data);
        console.log(response.data,'data')
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchForms();
  }, []);

  return (
	  <div>
		  {mobile?<Mheader/>:<Header/>}
		  <Grid container lg={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#ECE1C7' }}>
		  <Grid container lg={8} xs={10} justifyContent="center"  >

<Grid item lg={10} xs={10}>
<Typography sx={{ textAlign: 'center', color: '#103648', fontFamily: 'Poppins', fontSize:mobile?'20px': '56px', marginTop:mobile?'36px': '100px', fontWeight:mobile?'800': '800' }}>
Upcoming Workshops
</Typography>
</Grid>

<Grid item lg={2} xs={11} sx={{display:mobile?'flex':'',justifyContent:mobile?'flex-end':'',marginTop:mobile?'-10px':'',}}>
<img src={Slide9}  style={{ width:mobile?'31px': '124px', height:mobile?'26px': '103px',marginTop:mobile?'0px':'91px' }} />
</Grid>



</Grid>
      <Grid container lg={11} xs={10}  sx={{marginTop:mobile?'20px':'50px',display:'flex',justifyContent:'center',}}>
        {forms.map((form) => (
          < >
          
 
 <Grid container key={form._id} lg={4} xs={12} sx={{padding:mobile?'0px':'20px',marginBottom:mobile?'20px':""}}  >
   <Grid item  lg={12} xs={12} sx={{backgroundColor:'#fff',borderRadius:'16px'}}>
     
       <img
         src={`data:image/jpeg;base64,${form.photos.photo2}`}
        style={{width:'100%'}}
        
       />
       <Grid item lg={12} xs={12} sx={{backgroundColor:'#fff',borderRadius:'16px'}}>
         <Grid item lg={10} xs={10} sx={{margin:'auto'}}>
         <Typography sx={{
  color: '#179886',
  fontSize: mobile ? '16px' : '24px',
  fontWeight: mobile ? '600' : '700',
  fontFamily: 'Poppins',
  marginTop: '16px',
  '& a': {
    textDecoration: 'none', 
    color: '#179886' 
  }
}}>
  <Link to={`/form/${form.workshopName}`}>
    {form.workshopName}
  </Link>
</Typography>


       
       
       <Typography sx={{color:'#103648',fontSize:mobile?'14px':'20px',fontWeight:'500',fontFamily:'Poppins',marginTop:'8px'}}>Date:{form.date}</Typography>
       
								<Typography sx={{ color: '#103648', fontSize: mobile ? '14px' : '20px', fontWeight: '500', fontFamily: 'Poppins' }}>Time:{form.time}</Typography>
               <Typography sx={{color:'#103648',fontSize:mobile?'14px':'20px',fontWeight:'500',fontFamily:'Poppins'}}>EarlyBird Fee:{form.earlyBirdFee}</Typography>
               <Typography sx={{color:'#103648',fontSize:mobile?'14px':'20px',fontWeight:'500',fontFamily:'Poppins'}}>Regular Fee:{form.regularFee}</Typography>
               </Grid>
               <Grid item lg={12}>
               <Button
   fullWidth
   sx={{
     width:mobile?'106px': '145px',
     padding:'12px 24px',
     textTransform: 'none',
     borderRadius: '56px',
     backgroundColor: '#E9BF5E',
     color: '#000',
     fontSize: mobile?'12px':'20px',
     fontWeight: '500',
     marginTop:'25px',
     marginLeft:'200px',
     marginBottom:'20px', '&:hover': {
       backgroundColor: '#E9BF5E', // Set the hover color to be the same as the initial background color
     },
   }}
 >
   Book now
 </Button>
 </Grid>
 
   </Grid>
 </Grid>
 
 </Grid>
  
 
 
   
   
 
            
          </>
        ))}
      </Grid>
     
         



		  </Grid>
		  <Footer/>
    </div>
  );
};
export default FormList