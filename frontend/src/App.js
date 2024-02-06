import logo from './logo.svg';
import './App.css';
import { Routes, Route, Form } from 'react-router-dom';
import Workshop from './Workshop';
import Header from './Header';
import Mheader from './Mheader';

import FormList from './GetAll';
import FormDetails from './FormDetails';
import Footer from './Footer';
import Instagram from './Instagram';
import Spotify from './Spotify';
function App() {
  return (
    <>
    <Routes>
 <Route path='/work'element={<Workshop/>}/>
 <Route path='/header'element={<Header/>}/>
 <Route path='/Mheader'element={<Mheader/>}/>
 <Route path='/form'element={<FormList/>}/>
 <Route  path="/" element={<Workshop/>} />
        <Route path="/form/:workshopName" element={<FormDetails/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/Instagram" element={<Instagram/>} />
        <Route path="/Spotify" element={<Spotify/>} />

 </Routes>
    </>
  
  );
}

export default App;
