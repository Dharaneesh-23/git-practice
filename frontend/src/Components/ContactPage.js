import React, { useEffect ,useState } from 'react'
import Footer from './Footer'
import ComponentHeader from './ComponentHeader';
import NavBarComp from './NavBarComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
// import image1 from './assets/images/Figure women-with-ipad.jpg.png';
// import { Image } from 'react-bootstrap';
import { FormControl, TextField, Select } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
// import { Link } from 'react-router-dom';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Aos from 'aos';
import 'aos/dist/aos.css'
import axios from 'axios';

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMediaQuery } from 'react-responsive';
import { customTheme , Textarea2 } from "./theme";
// import { height, width } from '@fortawesome/free-solid-svg-icons/faAngleRight';
// import zIndex from '@mui/material/styles/zIndex';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});
// const position = [12.970361, 80.147611];    //Co-ordinates to display the location [lattitude,longitude]

// const blue = {
//   100: '#DAECFF',
//   200: '#b6daff',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   900: '#003A75',
// };

function ContactPage (){
  const outerTheme = useTheme();
  // const [treatmentType, setTreatmentType] = React.useState('');
  const [formData, setFormData] = useState({
    name: '',
    mailid: '',
    message: '',
    phoneno: '',
    gender: '',
  });
  const isMediumScreen = useMediaQuery({minWidth:'768px'})
  // const mapStyle = isMediumScreen?{ height: '80%', width: '100%',zIndex:0,maxHeight:'800px'}:{height:'400px',width:'100%',zIndex:0}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/sendemail/`, formData);
      alert('Email sent successfully!');
      setFormData({
        name: '',
        subject: 'Contact Form feedback',
        mailid: '',
        message: '',
        phoneno: '',
        gender: '',
      });
    } catch (error) {
      alert(`Could able to submit the Form`)
    }
  };

  useEffect(()=>{
    Aos.init({duration:2000})
  })

    return (
      <div>
        <NavBarComp />
        <ComponentHeader cName="contact" />
        <div className='container-fluid' data-aos="fade-up" style={{maxWidth:'1800px'}}>
          <h1 className='header-text-custom2 text-center p-3'>Contact Form</h1>
          <p className='text-center' style={{letterSpacing:"2px", fontSize:"clamp(0.2rem,2vw,1rem)"}}>We encourage your queries, please feel free to send us a message using the following contact form</p>
          <div className='container-fluid display-center'>
            <ThemeProvider theme={customTheme(outerTheme)}>
            <form onSubmit={handleSubmit} style={{width:'100%'}} className='display-center'>
            <div className='row mx-4 display-center' style={{width:'100%',maxWidth:'1000px'}}>
                <div className='col-sm-6 pt-4'>
                  <TextField
                    variant='standard'
                    id='contactName'
                    name='name'
                    label="Username"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='col-sm-6 pt-4'>
                  <TextField
                    variant='standard'
                    type='tel'
                    id='contactNumber'
                    name='phoneno'
                    label="Phone Number"
                    fullWidth
                    value={formData.phoneno}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='col-sm-6 pt-4'>
                  <TextField
                    variant='standard'
                    type='email'
                    id='contactMail'
                    name='mailid'
                    label="Mail ID"
                    fullWidth
                    value={formData.mailid}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='col-sm-6 pt-4'>
                  <FormControl variant='standard' fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">Gender *</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Gender"
                      name="gender"
                      value={formData.servicetype}
                      onChange={handleChange}
                      className='input-field'
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Male'}>Male</MenuItem>
                      <MenuItem value={'Female'}>Female</MenuItem>
                      <MenuItem value={'Others'}>Others</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className='col-sm-12 pt-4'>
                  <Textarea2
                    aria-label="empty textarea"
                    minRows={5}
                    name='message'
                    placeholder='Your message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='display-center mb-5' style={{ maxWidth: "200px" }}>
                <button className='navigation-btn display-center my-5' style={{maxWidth:"200px"}}>
                  <FontAwesomeIcon icon={faChevronCircleRight} className='navigation-btn-arrow'></FontAwesomeIcon>
                  <p className='mb-0'>Submit</p>
                </button>
                </div>
                </div>
              </form>
            </ThemeProvider>
          </div>
        </div>  
        {/* <div className='container-fluid' data-aos="fade-up" style={{maxWidth:"2300px"}}>
          <div className='row'>
            <div className='col-md-5 display-center'>
              <Image src={image1} className="m-5" style={{width:"80%",height:"80%"}}/>
            </div>
            <div className='col-md-7 display-center' style={{flexDirection:'column'}}>
              <h1 className='header-text-custom2 text-center py-2'>Book an appointment</h1>
              <p>To schedule an appointment please contact us using the provided contact number. For general information please complete the form below and it will be directed to the appropriate individual within our office</p>
              <span>We want you to be happiest and most beautiful person you can be, both inside and out. we look forward to hearing from you</span>
              <a href={process.env.REACT_APP_BOOKING_PAGE_URL} style={{textDecoration:"none"}}>
                <button className='navigation-btn display-center my-5'>
                    <FontAwesomeIcon icon={faChevronCircleRight} className='navigation-btn-arrow'></FontAwesomeIcon>
                    <p className='mb-0'>Book Appointment</p>
                </button>
              </a>
            </div>
          </div>
        </div>   */}
        <div className='container my-3' style={{
                width:'70%',
                height:'auto',
                justifyContent:'center',
                display:'flex',
                position:'relative',
            }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0261856451716!2d80.14761709999999!3d12.9701762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fc177fef55d%3A0x111cab7207190a53!2sARAMM%20SKIN%20CLINIC!5e0!3m2!1sen!2sin!4v1723446112182!5m2!1sen!2sin" height={450} style={{border:'0',width:'100%'}} allowFullScreen loading='lazy' referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* <MapContainer center={position} zoom={20} style={mapStyle}>
                  <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                      <Popup>
                        ARAMM Clinic
                      </Popup>
                    </Marker>
                </MapContainer> */}
            </div>  
        <Footer />
      </div>
    )
  }


export default ContactPage


