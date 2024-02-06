// FormDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid, Typography, useMediaQuery,Button} from '@mui/material'
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Api_url } from './helper';
import Mheader from './Mheader';
import Work from './Images/Work.png'
import Work11 from './Images/Work11.png'
import Slide8 from './Images/Slide8.png'
import Slide6 from './Images/Slide6.png'
import Slide7 from './Images/Slide7.png'
import Agenda from './Images/Agenda.png'
import Agenda1 from './Images/Agenda1.png'
import Agenda2 from './Images/Agenda2.png'
import Agenda3 from './Images/Agenda3.png'
import Agenda4 from './Images/Agenda4.png'
import Agenda5 from './Images/Agenda5.png'
import Trainer from './Images/Trainer.png'
import Slide2 from './Images/Slide2.png'
import Footer from './Footer';
const FormDetails = () => {
  const { workshopName } = useParams();
  const [formData, setFormData] = useState([]);
  const [formData1, setFormData1] = useState(null);
  const mobile = useMediaQuery('(max-width:600px)');
  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await axios.get(`${Api_url}/api/getForm/${workshopName}`);
        setFormData(response.data);
        setFormData1(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, [workshopName]);

  if (!formData) {
    return <p>Loading...</p>;
  }

  return (
    <>
{mobile?<Mheader/>:<Header/>}
 {formData1?   
      <Grid container lg={12}  xs={12} sx={{backgroundColor:'#ECE1C7'}}>
        <Grid container lg={11}  xs={10} sx={{margin:'auto',backgroundImage:mobile?`url(data:image/jpeg;base64,${formData.photos.photo2})`:`url(data:image/jpeg;base64,${formData.photos.photo1})`,backgroundSize: 'cover',borderBottomRightRadius: '26px',borderTopRightRadius: '26px',marginTop:'56px',backgroundSize:mobile?'100%':'100%  454px',backgroundRepeat:'no-repeat', borderBottomLeftRadius: '26px'}}>
            <Grid container lg={12} sx={{textAlign:'center'}}>
                <Grid item lg={12}  sx={{margin:'auto'}}>
            <Typography sx={{fontSize:mobile?'20px':'50px',fontWeight:'700',fontFamily:'Poppins',color:'#fff',marginTop:mobile?'46px':'113px',marginBottom:mobile?'46px':'113px'}}>{formData.workshopName}</Typography>
            </Grid>
            </Grid>
            </Grid>
            <Grid container lg={11} xs={12} sx={{margin:'auto'}}>
            <Grid container lg={12} xs={10} sx={{backgroundColor:'#fff',marginTop:mobile?'36px':'100px',borderRadius:'26px',margin:mobile?'36px auto':''}}>
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
<img src={Slide7} style={{width:mobile?'56px':'76px',height:mobile?'56px':'76px',marginTop:'26px'}}></img>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'16px':'20px',fontWeight:'600',fontFamily:'Poppins',color:'#103648',marginTop:'16px'}}>
  Price
  </Typography>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'26px':'36px',fontWeight:'700',fontFamily:'Poppins',color:'#103648',marginBottom:mobile?'16px':'56px'}}>
  {formData.earlyBirdFee}
  </Typography>
</Grid>
</Grid>

              </Grid>
              <Grid container lg={3.5} xs={12} sx={{backgroundColor:'#F7DAC4',borderRadius:'26px',margin:mobile?'0px':'20px',marginTop:mobile?'16px':''}}>
             
                <Grid item lg={10} xs={10} sx={{margin:'auto',}}>
<Grid item lg={2}  xs={3} sx={{marginLeft:'0px'}}>
<img src={Slide8} style={{width:mobile?'56px':'76px',height:mobile?'56px':'76px',marginTop:'26px'}}></img>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'14px':'20px',fontWeight:'600',fontFamily:'Poppins',color:'#103648',marginTop:'16px'}}>
  Last Date to Apply
  </Typography>
</Grid>
<Grid item lg={12} xs={10}>
  <Typography sx={{fontSize:mobile?'26px':'36px',fontWeight:'700',fontFamily:'Poppins',color:'#103648',marginBottom:mobile?'16px':'56px'}}>
  {formData.date}
  </Typography>
</Grid>
</Grid>

              </Grid>

    

</Grid>


          </Grid>

    </Grid>

<Grid container lg={12}>
    <Grid container lg={11} xs={10} sx={{margin:'auto'}}>
        <Grid item lg={12} xs={12}>
            <Typography sx={{textAlign:'center',fontSize:mobile?'20px':'56px',fontWeight:mobile?'800':'800',color:'#103648',marginTop:mobile?'36px':'100px',fontFamily:'Poppins'}}>
                Agenda
            </Typography>
        </Grid>

        <Grid container lg={12} sx={{backgroundColor:'#179886',marginTop:mobile?'20px':'56px',borderRadius:'26px'}}>
<Grid container lg={11} sx={{margin:'auto',padding:mobile?'8px':'0px'}}>
<Grid container lg={12} sx={{backgroundColor:'#fff',marginTop:mobile?'16px':'56px',padding:mobile?'8px':'70px',borderRadius:'26px',marginBottom:mobile?'16px':'56px'}}>
<Grid container lg={2}>
  <Grid item lg={12}>

  {mobile?'':<img src={Agenda} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10} xs={10}>
<Grid item lg={12} xs={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',marginTop:mobile?'26px':'0px',padding:mobile?'12px':'0px'}}>
  {formData.agenda.heading1.headinga}
  </Typography>
</Grid>
<Grid item lg={12} xs={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.agenda.heading1.subheading1}</li>
      <li>{formData.agenda.heading1.subheading2}</li>
    </ul>
  </Typography>
</Grid>

</Grid>
<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda1} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.agenda.heading2.headinga}
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.agenda.heading2.subheading3}</li>
      <li>{formData.agenda.heading2.subheading4}</li>
    </ul>
  </Typography>
</Grid>

</Grid>

<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda2} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0x'}}>
  {formData.agenda.heading3.headinga}
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.agenda.heading3.subheading5}</li>
      <li>{formData.agenda.heading3.subheading6}</li>
    </ul>
  </Typography>
</Grid>

</Grid>

<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda3} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.agenda.heading4.headinga}
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize: mobile?'14px':'20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.agenda.heading4.subheading7}</li>
      <li>{formData.agenda.heading4.subheading8}</li>
    </ul>
  </Typography>
</Grid>

</Grid>


<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda4} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.agenda.heading5.headinga}
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.agenda.heading5.subheading9}</li>
      <li>{formData.agenda.heading5.subheading10}</li>
    </ul>
  </Typography>
</Grid>

</Grid>

<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda5} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.agenda.heading6.headinga}
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.agenda.heading6.subheading11}</li>
      <li>{formData.agenda.heading6.subheading12}</li>
    </ul>
  </Typography>
</Grid>

</Grid>
</Grid>
</Grid>
        </Grid>
    </Grid>
</Grid>
<Grid container lg={12} xs={12}>
    <Grid container lg={11}  xs={10} sx={{margin:'auto'}}>
        <Grid item lg={12} xs={12}>
            <Typography sx={{textAlign:'center',fontSize:mobile?'20px':'56px',fontWeight:'800',color:'#103648',marginTop:mobile?'36px':'100px'}}>
            Key Takeaways
            </Typography>
        </Grid>

        <Grid container lg={12} sx={{backgroundColor:'#103648',marginTop:mobile?'20px':'56px',borderRadius:'26px'}}>
<Grid container lg={11} sx={{margin:'auto',padding:mobile?'8px':'0px'}}>
<Grid container lg={12} sx={{backgroundColor:'#fff',marginTop:mobile?'16px':'56px',padding:mobile?'12px':'70px',borderRadius:'26px',marginBottom:mobile?'16px':'56px'}}>
<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10} xs={12}>
<Grid item lg={12} xs={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.keyPoints.heading1.headinga}
  </Typography>
</Grid>
<Grid item lg={12} xs={12}>
  <Typography component="div" sx={{ fontSize: mobile?'14px':'20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.keyPoints.heading1.subheading1}</li>
      <li>{formData.keyPoints.heading1.subheading2}</li>
    </ul>
  </Typography>
</Grid>

</Grid>
<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda1} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10} xs={12}>
<Grid item lg={12} xs={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.keyPoints.heading2.headinga}
  </Typography>
</Grid>
<Grid item lg={12} xs={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.keyPoints.heading2.subheading3}</li>
      <li>{formData.keyPoints.heading2.subheading4}</li>
    </ul>
  </Typography>
</Grid>

</Grid>

<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda2} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.keyPoints.heading3.headinga}
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize: mobile?'14px':'20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.keyPoints.heading3.subheading5}</li>
      <li>{formData.keyPoints.heading3.subheading6}</li>
    </ul>
  </Typography>
</Grid>

</Grid>

<Grid container lg={2}>
  <Grid item lg={12}>
 {mobile?'': <img src={Agenda3} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.keyPoints.heading4.headinga}
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.keyPoints.heading4.subheading7}</li>
      <li>{formData.keyPoints.heading4.subheading8}</li>
    </ul>
  </Typography>
</Grid>

</Grid>







</Grid>
</Grid>
        </Grid>
    </Grid>
</Grid>

<Grid container lg={12} xs={12}>
    <Grid container lg={11}  xs={10} sx={{margin:'auto'}}>
        <Grid item lg={12} xs={12}>
            <Typography sx={{textAlign:'center',fontSize:mobile?'20px':'56px',fontWeight:'800',color:'#103648',marginTop:mobile?'36px':'100px'}}>
            About the Trainer
            </Typography>
        </Grid>

        <Grid container lg={12} xs={12} sx={{backgroundColor:'#E9BF5E',marginTop:mobile?'20px':'56px',borderRadius:'26px'}}>
<Grid container lg={11} xs={12} sx={{margin:'auto',padding:mobile?'8px':'0px'}}>
<Grid container lg={12}  xs={12} sx={{backgroundColor:'#fff',marginTop:mobile?'16px':'56px',padding:mobile?'12px':'70px',borderRadius:'26px',marginBottom:mobile?'16px':'56px'}}>

<Grid container lg={6.5} xs={12} >
              <Grid item lg={10} xs={12} >
              <img src={`data:image/jpeg;base64,${formData.photos.photo2}`} style={{width:mobile?'232px':'448px',height:mobile?'156px':'297px'}}></img>
              </Grid>
              
            </Grid>
            <Grid container lg={5.5} xs={12}>
              <Grid item lg={12} xs={12}>
                <Typography sx={{color:'#103648',fontSize:mobile?'16px':'26px',fontWeight:'600',fontFamily:'Poppins',marginLeft:'15px',marginTop:mobile?'16px':'0px'}}> {formData.aboutTheTrainer.heading1.headinga}</Typography>
              </Grid>
              <Grid item lg={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.aboutTheTrainer.subheading1.subheading1}</li>
      <li>{formData.aboutTheTrainer.subheading2.subheading2}</li>
      <li>{formData.aboutTheTrainer.subheading3.subheading3}</li>
    </ul>
  </Typography>
</Grid>
              </Grid>











</Grid>
</Grid>
        </Grid>
    </Grid>
</Grid>

<Grid container lg={12} xs={12}>
    <Grid container lg={11}  xs={10} sx={{margin:'auto'}}>
        <Grid item lg={12} xs={12}>
            <Typography sx={{textAlign:'center',fontSize:mobile?'20px':'56px',fontWeight:'800',color:'#103648',marginTop:mobile?'36px':'100px'}}>
            Workshop Overview
            </Typography>
        </Grid>

        <Grid container lg={12} sx={{backgroundColor:'#DF6740',marginTop:mobile?'20px':'56px',borderRadius:'26px'}}>
<Grid container lg={11} sx={{margin:'auto',padding:mobile?'8px':'0px'}}>
<Grid container lg={12} sx={{backgroundColor:'#fff',marginTop:mobile?'16px':'56px',padding:mobile?'12px':'70px',borderRadius:'26px',marginBottom:mobile?'16px':'56px'}}>
<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10} xs={12}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.workshopoverview.heading1.heading1}
  </Typography>
</Grid>
<Grid item lg={12} xs={12}>
  <Typography component="div" sx={{ fontSize: mobile?'14px':'20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
    <li>{formData.workshopoverview.subheading1.subheading1}</li>
    
    </ul>
  </Typography>
</Grid>

</Grid>
<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda1} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10} xs={12}>
<Grid item lg={12} xs={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
 {formData.workshopoverview.heading2.heading2} 
  </Typography>
</Grid>
<Grid item lg={12} xs={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
   <li> {formData.workshopoverview.subheading2.subheading2}</li>
    
    </ul>
  </Typography>
</Grid>

</Grid>

<Grid container lg={2}>
  <Grid item lg={12}>
  {mobile?'':<img src={Agenda2} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

</Grid>
<Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.workshopoverview.heading3.heading3} 
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize: mobile?'14px':'20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
      <li>{formData.workshopoverview.subheading3.subheading3}</li>
     
    </ul>
  </Typography>
</Grid>

</Grid>

<Grid container lg={2}>
  <Grid item lg={12}>
 {mobile?'': <img src={Agenda3} sx={{width:'100px',height:'100px'}}>

</img>}
  </Grid>

									  </Grid>
									  <Grid container lg={10}>
<Grid item lg={12}>
  <Typography sx={{fontSize:mobile?'16px':'26px',fontWeight:'600',color:'#103648',fontFamily:'Poppins',padding:mobile?'12px':'0px'}}>
  {formData.workshopoverview.heading4.heading4} 
  </Typography>
</Grid>
<Grid item lg={12}>
  <Typography component="div" sx={{ fontSize:mobile?'14px': '20px', fontWeight: '400', color: '#103648', fontFamily: 'Poppins' }}>
    <ul>
   <li>{formData.workshopoverview.subheading4.subheading4} </li> 
     
    </ul>
  </Typography>
</Grid>

</Grid>







</Grid>
</Grid>
        </Grid>
    </Grid>
</Grid>

<Grid container lg={11} xs={10} sx={{margin:'auto'}}>
            <Grid container lg={12} xs={12} sx={{backgroundColor:'#fff',marginTop:mobile?'36px':'100px',marginBottom:'70px',borderRadius:'26px'}}>
            <Grid container lg={12} xs={12}  sx={{margin:'auto',padding:mobile?'23px':'36px'}}>
             
           
            <Grid container lg={6} xs={12}>
<Grid item lg={12} xs={12}>
  <Typography sx={{color:'#103648',fontSize:mobile?'14px':'24px',fontWeight:'400',fontWeight:'Poppins',}}>
  Don't miss this opportunity to elevate your character creation skills and connect with a community of passionate writers! Join us for an inspiring and informative workshop on Crafting Compelling Characters.
  </Typography>
</Grid>
<Grid item lg={12}>
<Button sx={{backgroundColor:'#E9BF5E',textTransform:'none',color:'#000',fontSize:mobile?'12px':'20px',fontWeight:'500',fontWeight:'Poppins',padding:'12px 24px',borderRadius:'56px',marginTop:mobile?'16px':'0px'}}>
Join our community
</Button>


</Grid>
</Grid>
<Grid container lg={6} xs={10}>
      <Grid item lg={12} sx={{display:'flex',justifyContent:'end'}}>
    <img src={Slide2} style={{   width:mobile?'226px':'462px',height:mobile?'142px':'290px' ,marginTop:mobile?'20px':'0px'}}></img>
    </Grid>
</Grid>
    

</Grid>


          </Grid>

    </Grid>



      </Grid>:''}
       

    


      <Footer/>
       
    </>
  );
};

export default FormDetails;
