import {React,useState,useEffect} from 'react'
import {Grid,Typography,Button, useMediaQuery} from '@mui/material'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Mheader from './Mheader';
import { Api_url } from './helper';
import '@fontsource/poppins';

import MSlide from './Images/MSlide.png'
import MSlide1 from './Images/MSlide1.png'
import Slide from './Images/Slide.png'
import Image from 'mui-image'
import Slide2 from './Images/Slide2.png'
import Slide3 from './Images/Slide3.png'
import Slide4 from './Images/Slide4.png'
import Slide5 from './Images/Slide5.png'
import Slide6 from './Images/Slide6.png'
import Slide7 from './Images/Slide7.png'
import Slide8 from './Images/Slide8.png'
import Slide9 from './Images/Slide9.png'
import Header from './Header';
import Footer from './Footer';
import Beforef from './Beforef';
const Workshop = () => {
  const mobile = useMediaQuery('(max-width:600px)');
  const [forms, setForms] = useState([]);
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
    <>
    {mobile?<Mheader/>:<Header/>}
   <Grid container  justifyContent="center" lg={12} xs={12} sx={{backgroundColor:'#ECE1C7'}}>
<Grid container lg={11}  xs={10} sx={{margin:'auto',backgroundImage:mobile?`url(${MSlide})`:`url(${Slide})`,backgroundSize: 'cover',borderBottomRightRadius: '26px',borderTopRightRadius: '26px',marginTop:'56px',backgroundSize:'100%  454px',backgroundRepeat:'no-repeat', }}>
  <Grid container lg={10.5}  xs={10} sx={{margin:'auto',padding:mobile?'32px 26px':''}}>
    <Grid item lg={10.6} xs={9.5}>
<Typography  sx={{ color: '#ffffff',  fontSize:mobile?'20px':'56px',fontWeight:mobile?'700':'700',lineHeight:mobile?'normal':'84px',fontFamily:'Poppins' ,marginTop:mobile?'32px':'56px',}}>
Welcome to the Groovy Grove of Foster Reads!
          </Typography>
          </Grid>
          <Grid item lg={8} xs={11.2}>
          <Typography  sx={{ color: '#ffffff',fontFamily:'Poppins',fontWeight:'400' ,fontSize:mobile?'14px':'20px',lineHeight:mobile?'normal':'30px' ,marginTop:mobile?'20px':'0px'}}>
          Hey there bookworms and wordsmiths! We’re thrilled to invite you to embark on a literary adventure like no other! The Foster Reads Workshop Extravaganza!
          </Typography>
          </Grid>
          <Grid item lg={12}>
          <Button  sx={{backgroundColor:'#E9BF5E',width:mobile?'91':'120px',height:mobile?'42px':'54px',color:'#000',borderRadius:'56px',textTransform:'none',marginTop:'36px',marginBottom:'64px',fontSize:mobile?'12':'20px',fontWeight:'500',padding:'12px 20px'}}>Join us</Button>
          </Grid>
          </Grid>

          
          <Grid container lg={12} xs={12} sx={{backgroundColor:'#179886',marginTop:mobile?'36px':'100px',borderRadius:'26px'}}>
            <Grid container lg={12} xs={12} sx={{padding:'36px'}} >
<Grid container lg={6} xs={12} sx={{margin:'auto'}}>
  
<Grid item lg={12} xs={12} >
<Typography sx={{fontFamily:'Poppins',fontWeight:'600',fontSize:mobile?'20px':'32px',color:'#fff',}}>Dive into the Joy of Reading and Writing!</Typography>
</Grid>
<Grid item lg={12} xs={12} >
<Typography sx={{fontFamily:'Poppins',fontWeight:'400',fontsize:mobile?'14px':'20px',color:'#fff',marginTop:'26px'}}>Imagine a place where the pages of your favourite books come to life, where words dance off the page and into your imagination. That's the kind of enchantment we're brewing at Foster Reads! Whether you're a seasoned book lover or a budding wordsmith, there's something for everyone.</Typography>
</Grid>

</Grid>
<Grid container lg={5.5} xs={12}  sx={{display:mobile?'flex':'',justifyContent:mobile?'center':''}}>
  <Grid item lg={12} xs={12} sx={{margin:mobile?'15px':''}} >
{mobile?'':<img src={Slide2} style={{ marginTop: '36px', marginBottom: '36px', display: 'flex', alignItems: 'center',width:'472px',height:'224px' ,display:'flex',justifyContent:'center'}}></img>}

{mobile?<img src={MSlide1} style={{ marginTop: '36px', marginBottom: '0px',width:'226px',height:'142px' ,}}></img>:''}
</Grid>
</Grid>
</Grid>


          </Grid>

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
      <Grid container lg={12} xs={12}  sx={{marginTop:mobile?'20px':'50px',display:'flex',justifyContent:'center',}}>
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
    textDecoration: 'none', // Remove underline
    color: '#179886' // Set text color
  }
}}>
  <Link to={`/form/${form.workshopName}`} >
    {form.workshopName}
  </Link>
</Typography>

       
       
       <Typography sx={{color:'#103648',fontSize:mobile?'14px':'20px',fontWeight:'500',fontFamily:'Poppins',marginTop:'8px'}}>Date:{form.date}</Typography>
       
								<Typography sx={{ color: '#103648', fontSize: mobile ? '14px' : '20px', fontWeight: '500', fontFamily: 'Poppins' }}>Time:{form.time}</Typography>
               <Typography sx={{color:'#103648',fontSize:mobile?'14px':'20px',fontWeight:'500',fontFamily:'Poppins'}}>EarlyBird Fee:{form.earlyBirdFee}</Typography>
               <Typography sx={{color:'#103648',fontSize:mobile?'14px':'20px',fontWeight:'500',fontFamily:'Poppins'}}>Regular Fee:{form.regularFee}</Typography>
               </Grid>
               <Grid item lg={12} xs={12}>
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


          <Grid container lg={12} justifyContent="center" alignItems="center" >
            
          <Grid item lg={10} sx={{ justifyContent: 'center', display: 'flex' }}>
  <Link to="/form" style={{ textDecoration: 'none' }}>
    <Button
      sx={{
        color: '#103648',
        fontWeight: '900',
        fontFamily: 'Poppins',
        fontSize: mobile ? '12px' : '20px',
        marginTop: mobile ? '40px' : '100px',
        backgroundColor: '#E9BF5E',
        color: '#000',
        borderRadius: '56px',
        textTransform: 'none',
        padding: '12px 24px',
        '&:hover': {
          backgroundColor: '#E9BF5E',
          color: '#000',
        },
      }}
    >
      More Workshop
    </Button>
  </Link>
</Grid>

</Grid>
<Grid container lg={12} xs={12} sx={{backgroundColor:'#103648',marginTop:mobile?'36px':'100px',borderRadius:'26px'}}>
            <Grid container lg={12} xs={12}  sx={{margin:'auto',padding:mobile?'20px':'36px'}}>
           {mobile?'': <Grid container lg={5.5} >
  <Grid item lg={12}>
<Image src={Slide4} style={{ marginTop: '36px', marginBottom: '36px', display: 'flex', alignItems: 'center',width:mobile?'226px':'472px',height:mobile?'142px':'312px',borderRadius:'16px' }}></Image>
</Grid>
</Grid>}
<Grid container lg={6}  xs={11} >

<Grid item lg={12} xs={10} sx={{margin:'auto'}}  >
<Typography sx={{fontFamily:'Poppins',fontWeight:'600',fontSize:mobile?'20px':'32px',color:'#fff',marginTop:'36px'}}>Why Foster Reads? Because our Credibility Speaks Volumes!</Typography>
</Grid>
<Grid item lg={12} xs={12} >
<Grid item lg={12} xs={12} >
<Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '20px', color: '#fff' }}>
<ul style={{ fontSize:mobile?'14px': '16px' }}>
    <li>Masterclass with Literary Maestros</li>
  </ul>
</Typography>
</Grid>
<Grid item lg={12} xs={12} >
<Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '20px', color: '#fff',marginTop:'-10px' }}>
<ul style={{ fontSize:mobile?'14px': '16px' }}>
    <li>Ink and Wisdom Partnerships</li>
  </ul>

</Typography>
</Grid>
<Grid item lg={12} xs={12}>
<Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '20px', color: '#fff',marginTop:'-10px' }}>
<ul style={{ fontSize:mobile?'14px': '16px' }}>
    <li> Whispers from Wordsmits : One-on-One Author Insights</li>
  </ul>

</Typography>
</Grid>
<Grid item lg={12} xs={12}>
<Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '20px', color: '#fff',marginTop:'-10px' }}>
<ul style={{ fontSize:mobile?'14px': '16px' }}>
    <li>Publishing Prowess Collaboration</li>
  </ul>

</Typography>
</Grid>
<Grid item lg={12} xs={12}>
<Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '20px', color: '#fff',marginTop:'-10px' }}>
<ul style={{ fontSize:mobile?'14px': '16px' }}>
    <li>Page-Turner Partnerships</li>
  </ul>

</Typography>
</Grid>
<Grid item lg={12} xs={12}>
<Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '20px', color: '#fff' ,marginTop:'-10px'}}>
<ul style={{ fontSize:mobile?'14px': '16px' }}>
    <li>The Pinnacle of Expertise</li>
  </ul>

</Typography>
</Grid>
</Grid>
</Grid>
{mobile?<Grid container lg={5.5} xs={12} >
  <Grid item lg={12} xs={12}>
<Image src={Slide4} style={{ marginTop: '16px', marginBottom: '36px', display: 'flex', alignItems: 'center',width:mobile?'226px':'472px',height:mobile?'142px':'312px',borderRadius:'16px' }}></Image>
</Grid>
</Grid>:''}
</Grid>


          </Grid>
          <Grid container lg={12} sx={{backgroundColor:'#179886',marginTop:mobile?'36px':'100px',borderRadius:'26px'}}>
            <Grid container lg={12}  sx={{margin:'auto',padding:mobile?'26px':'36px'}}>
            <Grid container lg={6} xs={10}>

<Grid item lg={12} xs={12} sx={{margin:'auto'}}  >
<Typography sx={{fontFamily:'Poppins',fontWeight:'600',fontSize:mobile?'20px':'32px',color:'#fff',marginTop:mobile?'26px':'36px',}}>Ready to Embark on your Literary Odyssey?</Typography>
</Grid>
<Grid item lg={12} xs={12} >
<Grid item lg={12} xs={12} >
<Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', fontSize:mobile?'14px': '20px', color: '#fff',marginTop:mobile?'8px':'' }}>

The Foster Reads Workshop is not just an event; it's an experience waiting to unfold. Grab your quills, dust off your reading glasses, and prepare to be enchanted!
  
</Typography>
</Grid>

</Grid>
</Grid>
            <Grid container lg={6} xs={12} >
  <Grid item lg={12} xs={12} sx={{display:mobile?'':'flex',justifyContent:mobile?'':'flex-end'}}>
<img src={Slide5} style={{ marginTop:mobile?'25px': '36px', marginBottom:mobile?'16px': '36px', display: 'flex', alignItems: 'center',width:mobile?'256px':'472px',height:mobile?'142px':'312px',borderRadius:'16px' }}></img>
</Grid>
</Grid>

</Grid>


          </Grid>
          <Grid container lg={12} xs={12} sx={{backgroundColor:'#fff',marginTop:mobile?'36px':'100px',borderRadius:'26px'}}>
            <Grid container lg={12} xs={12}  sx={{margin:'auto',padding:mobile?'16px':'36px'}}>
              <Grid container lg={3.5} xs={12} sx={{backgroundColor:'#C0F2EB',borderRadius:'26px',margin:mobile?'0px':'20px'}}>
                <Grid item lg={10} xs={10} sx={{margin:'auto',}}>
<Grid item lg={2}  xs={10} sx={{marginLeft:'0px'}}>
<img src={Slide6} style={{width:mobile?'56px':'76px',height:mobile?'56px':'76px',marginTop:'26px'}}></img>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'16px':'20px',fontWeight:'600',fontFamily:'Poppins',color:'#103648',marginTop:'16px'}}>
  Available Spots
  </Typography>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'26px':'36px',fontWeight:'700',fontFamily:'Poppins',color:'#103648',marginBottom:mobile?'16px':'56px'}}>
  36
  </Typography>
</Grid>
</Grid>
              </Grid>
              <Grid container lg={3.5} xs={12} sx={{backgroundColor:'#C2E4F5',borderRadius:'26px',margin:mobile?'0px':'20px',marginTop:mobile?'16px':''}}>
                
                <Grid item lg={10} xs={10} sx={{margin:'auto',}}>
<Grid item lg={2} xs={3} sx={{marginLeft:'0px'}}>
<Image src={Slide7} style={{width:mobile?'56px':'76px',height:mobile?'56px':'76px',marginTop:'26px'}}></Image>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'16px':'20px',fontWeight:'600',fontFamily:'Poppins',color:'#103648',marginTop:'16px'}}>
  Price
  </Typography>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'26px':'36px',fontWeight:'700',fontFamily:'Poppins',color:'#103648',marginBottom:mobile?'16px':'56px'}}>
  ₹499/-
  </Typography>
</Grid>
</Grid>

              </Grid>
              <Grid container lg={3.5} xs={12} sx={{backgroundColor:'#F7DAC4',borderRadius:'26px',margin:mobile?'0px':'20px',marginTop:mobile?'16px':''}}>
             
                <Grid item lg={10} xs={10} sx={{margin:'auto',}}>
<Grid item lg={2}  xs={3} sx={{marginLeft:'0px'}}>
<Image src={Slide8} style={{width:mobile?'56px':'76px',height:mobile?'56px':'76px',marginTop:'26px'}}></Image>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'14px':'20px',fontWeight:'600',fontFamily:'Poppins',color:'#103648',marginTop:'16px'}}>
  Last Date to Apply
  </Typography>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'26px':'36px',fontWeight:'700',fontFamily:'Poppins',color:'#103648',marginBottom:mobile?'16px':'56px'}}>
  12 Jan’ 2024
  </Typography>
</Grid>
</Grid>

              </Grid>

    

</Grid>


          </Grid>

          <Grid container lg={12} xs={12} sx={{backgroundColor:'#179886',marginTop:mobile?'36px':'100px',borderRadius:'26px'}}>
            <Grid container lg={12} xs={12}  sx={{margin:'auto',padding:'36px'}}>
  
           <Grid item lg={12} xs={12}>
            <Typography sx={{fontSize:mobile?'20px':'56px',fontFamily:'Poppins',color:'#fff',fontWeight:'700',marginTop:mobile?'26px':'56px'}}>
            Claim your seat in the workshop
            </Typography>
            <Typography sx={{fontSize:mobile?'14px':'24px',fontFamily:'Poppins',color:'#D9D9D9',fontWeight:'400'}}>
            Fill out the form and claim your seat
            </Typography>
            <Button sx={{color:'#000',fontSize:'20px',fontWeight:'900',textTransform:'none',backgroundColor:'#E9BF5E',borderRadius:'56px',marginTop:mobile?'16px':'56px',fontFamily:'Poppins',marginBottom:mobile?'16px':'56px',padding:'12px 24px'}}>
            Find form here
            </Button>
           </Grid>

</Grid>


          </Grid>

        
</Grid>
<Grid item lg={6.9} xs={10}>
        <Typography sx={{ textAlign: 'center', color: '#103648', fontFamily: 'Poppins', fontSize:mobile?'20px': '56px', marginTop:mobile?'36px': '100px', fontWeight:mobile?'800': '800' }}>
        Featuring on Foster Talks is just a form away!
        </Typography>
      </Grid>
<Beforef/> 
   </Grid>
   <Footer/>
    </>
  )
}

export default Workshop