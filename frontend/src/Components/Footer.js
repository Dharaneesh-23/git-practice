import React ,{ useEffect , useState} from 'react'
import formBackgroundimg from './assets/images/Logo-removebg-preview.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faAngleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import aramm_logo from './assets/images/Logo-removebg-preview.png'
import { Image } from 'react-bootstrap';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});


function Footer() {
    useEffect(()=>{
        Aos.init({duration:2000})
      })

      const [formData, setFormData] = useState({
        name: '',
        subject: 'Mail From Feedback section of your website',
        mailid: '',
        message: '',
      });

      const sendmail = async() => {
        try{
            // const data = new FormData();
            // console.log(formData)
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/sendemail/`,formData)
            alert(`We received your Feedback\n Thankyou for your time`)
        }catch(error){
            alert(`Couldn't receive your Feedback. Try again after sometime`)
        }
      }

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.mailid || !formData.message) {
          alert('Please fill out all fields.');
          return;
        }
    
        if (!/\S+@\S+\.\S+/.test(formData.mailid)) {
          alert('Please enter a valid email address.');
          return;
        }
        // Alert the form data
        sendmail();
        // alert(`Name: ${formData.userName}\nEmail: ${formData.email}\nMessage: ${formData.message} \nSubject: ${formData.subject}`);
      };

  return (
    <div className='footer' data-aos='fade-out'>
        <div className='container-fluid mx-0'>
            {/* <div className='row'> */}
                {/* <div className='col-md-4 px-0 order-2'> */}
                  <div className='container-fluid row'>
                    {/* <div className='col-md-3'> */}
                      {/* <Image src={aramm_logo}/> */}
                    {/* </div> */}
                    <div className='col-md-4'>
                      <h2 className='display-center mt-5'>Follow us on</h2>
                      <div className='container' style={{display:'flex',position:'relative',justifyContent:'space-between',width:'140px'}}>
                              <a href={process.env.REACT_APP_INSTAGRAM_URL}><FontAwesomeIcon icon={faInstagram} className='header-btn-hover'/></a>
                              <a href={process.env.REACT_APP_FACEBOOK_URL}><FontAwesomeIcon icon={faFacebook} className='header-btn-hover'/></a>
                              <a href={process.env.REACT_APP_LINKEDIN_URL}><FontAwesomeIcon icon={faLinkedin} className='header-btn-hover'/></a>
                              <a href={process.env.REACT_APP_LOCATION_URL}><FontAwesomeIcon icon={faMapMarkerAlt} className='header-btn-hover'/></a>
                      </div>
                    </div>
                    <div className='col-md-7 p-0'>
                      <h2 className='display-center mt-5'>Site map</h2>
                      <div className='site-map-container'>
                        <Link as={Link} to={'/'} className='site-map pe-3'>Home</Link>
							          <Link as={Link} to={'/about'} className='site-map pe-3'>About</Link>
							          <Link as={Link} to={'/services'} className='site-map pe-3'>Treatment</Link>
							          <Link as={Link} to={'/contact'} className='site-map pe-3'>Contact</Link>
							          <a href={process.env.REACT_APP_BOOKING_PAGE_URL} className='site-map'>Consult us</a>
                      </div>
                    </div>
                  </div>
                  <div className='my-3' style={{display:'flex',position:'relative',flexDirection:'row',alignItems:'center'}}>
							          {/* <Link as={Link} to={'/contact'} className='site-map ps-4'><FontAwesomeIcon icon={faAngleRight}/>Contact</Link> */}
                  </div>
                  {/* <div className='container mt-5'>
                    <h2 className='footer-text pb-2 display-center'>working hours</h2>
                    <p className='footer-text display-center'>mon-sat 5pm to 10pm</p>
                  </div>     */}
                  {/* <div className='container' style={{width:'350px',position:'relative',display:'flex',justifyContent:'center'}}>
                    <Link as={Link} to={'/'} className='site-map'><FontAwesomeIcon icon={faAngleRight}/>Home</Link>
                    <Link as={Link} to={'/services'} className='site-map'><FontAwesomeIcon icon={faAngleRight}/>Treatment</Link>
                  </div>
                  <div className='container' style={{width:'350px',position:'relative',display:'flex',justifyContent:'center'}}>
                      <Link as={Link} to={'/about'} className='site-map'><FontAwesomeIcon icon={faAngleRight}/>About</Link>
                      <Link as={Link} to={'/appointment'} className='site-map'><FontAwesomeIcon icon={faAngleRight}/>Book Appointment</Link>     
                  </div>
                  <div className='container' style={{width:'350px',position:'relative',display:'flex',justifyContent:'start'}}>
                      <Link as={Link} to={'/contact'} className='site-map'><FontAwesomeIcon icon={faAngleRight}/>Contact</Link>
                  </div> */}
                </div>
                {/* <div className='col-md-8 px-0 order-1'>
                    <div className='display-center'>
                        <img src={formBackgroundimg} style={{width:"130px",height:"80px",objectFit:"contain"}} />
                    </div>
                    <div className='card-fluid mx-1'>
                        <p className='header-text-custom1 display-center mb-0 pt-3' style={{fontSize:'clamp(1rem,2vw,1.5rem'}}>We appreciate your feedback</p>
                        <p className='header-text-custom2 display-center text-center' style={{fontSize:'clamp(2rem,4vw,2.5rem'}}>Any Feedback?</p>
                        <div className='container pb-4' style={{width:'70%'}}>
                        <form onSubmit={handleSubmit}>
                          <div className='row'>
                            <div className='col-md-6 pb-3'>
                              <input
                                type='text'
                                placeholder='Name'
                                id='name'
                                value={formData.userName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className='col-md-6 pb-3'>
                              <input
                                type='email'
                                placeholder='example@123.com'
                                id='mailid'
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <textarea
                            rows='4'
                            placeholder='Your message'
                            id='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                          <div className='display-center mt-4'>
                            <button type='submit' className='treatment-btn'>Submit</button>
                          </div>
                        </form>
                        </div>
                    </div> */}
                    
                {/* </div>     */}
    </div>
            // {/* <div className='credits text-center pt-3'><p>developed by RPD-23</p></div> */}
        // </div>
    // </div>
  )
}

export default Footer
