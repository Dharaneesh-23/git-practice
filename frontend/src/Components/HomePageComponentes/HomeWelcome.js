import React ,{ useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import image1 from '../assets/images/Welcome1.jpg';
// import image2 from '../assets/images/Welcome2.jpg';
// import image3 from '../assets/images/Welcome3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'

function HomeWelcome() {
    useEffect(()=>{
        Aos.init({duration:1500})
    })
    const isMediumScreen = useMediaQuery({minWidth: 768});
    const imgstyle = isMediumScreen? {
            display:"flex",
            positon:"relative",
            objectFit:'fill',
            width:"30vw",
            height:"700px"
        }:{
            display:"none"
        }
    const welcomestyle = isMediumScreen ? 'home-welcome-content' : 'home-welcome-content2'
    const overstyle = isMediumScreen ? {width:"70%"} : {width:'100%'}

  return (
    <div className='home-welcome mx-0' data-aos='fade-up'>
      <div className='container-fluid mx-0 my -5'>
            <div className='row'>
            {/* <div className='col-12 mt-5' style={{display:"flex",positon:'relative',alignItems:'center',justifyContent:"center"}}>
                <div style={{display:"flex",positon:'relative',alignItems:'center',justifyContent:"center"}} className='home-welcome-content2'>
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{width:'100%',height:'100%'}}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={image3} className="d-block" alt="..." style={{width:"100%",height:"500px",objectFit:"fill"}}/>
                            </div>
                            <div className="carousel-item">
                            <img src={image1} className="d-block" alt="..." style={{width:"100%",height:"500px"}}/>
                            </div>
                            <div className="carousel-item">
                            <img src={image2} className="d-block" alt="..." style={{width:"100%",height:"500px",objectFit:"fill"}}/>
                            </div>
                            <div className="carousel-item">
                            <img src={image1} className="d-block" alt="..." style={{width:"100%",height:"500px"}}/>
                            </div>
                            <div className="carousel-item">
                            <img src={image2} className="d-block" alt="..." style={{width:"100%",height:"500px",objectFit:"fill"}}/>
                            </div>
                            <div className="carousel-item active">
                            <img src={image3} className="d-block" alt="..." style={{width:"100%",height:"500px",objectFit:"fill"}}/>
                            </div>
                            <div className="carousel-item">
                            <img src={image2} className="d-block" alt="..." style={{width:"100%",height:"500px",objectFit:"fill"}}/>
                            </div>
                            <div className="carousel-item active">
                            <img src={image3} className="d-block" alt="..." style={{width:"100%",height:"500px",objectFit:"fill"}}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div> */}
            <div className='col-12'>
                <div className="home-welcome-content">
                    <p className='header-text-custom1 display-center'>welcome to our clinic</p>
                    <p className='header-text-custom2 pt-0 px-5'>extensive procedures to our patients</p>
                    <p className='common-p-text mb-5 px-5' style={overstyle}>Welcome to Aramm Skin Clinic, where beauty meets expertise. Our skin clinic is dedicated to providing you with personalized, cutting-edge treatments to enhance and rejuvenate your skin. With a team of highly skilled dermatologists and aestheticians, we offer a comprehensive range of services tailored to address your unique skincare needs. From advanced medical procedures to luxurious spa treatments, we strive to deliver exceptional results in a warm and welcoming environment. Whether you're seeking to combat aging, treat acne, or simply pamper yourself, trust Aramm Skin Clinic to help you achieve radiant, healthy skin that you'll love to show off. Your journey to glowing skin starts here.</p>
                     <Link to={'/about'} className="btn-welcome-hover mb-3" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                                more about us
                                <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>
                    </Link>
                </div>
            </div>
        </div>


      </div>

    </div>
  )
}

export default HomeWelcome
