import React, { useEffect } from 'react'
// import { Component } from 'react';
// import TopScrollButton from './TopScrollButton'
import Footer from './Footer'
import ComponentHeader from './ComponentHeader'

import ImageInfo from './assets/images/Abinesh-img.png';
import { useMediaQuery } from 'react-responsive';
// import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import FImage from './assets/images/whatsapp1-removebg-preview.png';
import BTImage from './assets/images/whatsapp2-removebg-preview.png';
import BrestImage from './assets/images/whatsapp3-removebg-preview.png';
import MTImage from './assets/images/whatsapp4-removebg-preview.png';
import HairImage from './assets/images/whatsapp5-removebg-preview.png';
import NImage from './assets/images/whatsapp6-removebg-preview.png';
import {AboutCardComponent,AboutTestimonial} from './AboutCardComponent';
// import { Link } from 'react-router-dom';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,Scrollbar, A11y ,Autoplay } from 'swiper/modules';
import NavBarComp from './NavBarComp';
import Aos from 'aos';
import 'aos/dist/aos.css'


import profileImg1 from './assets/images/instructor-1.jpeg'
import profileImg2 from './assets/images/instructor-3.jpeg'
import backgroundimage from './assets/images/CosmeticImage.jpg'
import zIndex from '@mui/material/styles/zIndex';

function AboutPage () {
  useEffect(()=>{
    Aos.init({duration:1500})
  })
  const isMediumScreen = useMediaQuery({minWidth:768})
  const isLargeScreen = useMediaQuery({minWidth:992})
  const nameStyle = isMediumScreen ? {display:'flex',position:'relative',justifyContent:'end',alignItems:'start'} : {display:'flex',position:'relative',justifyContent:'center',alignItems:'center'}
  const testimonialContent = [{
    "profileImg":profileImg1,
    "starCount":5,
    "review":"Aramm clinic took the time to thoroughly understand my skin concerns and medial history. They were patient, attentive, and genuinely listened to my issues, which made me feel valued as a patient.",
    "userName":"Thahseen A S"
  },{ 
    "profileImg":profileImg1,
    "starCount":5,
    "review":"Very good service and excellent hospitality.",
    "userName":"Siva kumar"
  },{
    "profileImg":profileImg2,
    "starCount":5,
    "review":"Overall excellent experience in this hospital and very kind nurse and doctor explaining out dieases very clear.",
    "userName":"Ambica"
  },{
    "profileImg":profileImg1,
    "starCount":5,
    "review":"I had a fantastic experience undergoing a GFC procedure at this clinic. The clinic is aesthetic and spotless, and the staff were friendly and informative. Dr.Abhinesh was polite, patient and explained everything clearly. He made the procedure painless with music and a massager. I highly recommend this clinic for anyone looking for top-notch and affordable dermatology care.",
    "userName":"Rishi Rajeshsekhar"
  },{
    "profileImg":profileImg1,
    "starCount":5,
    "review":"I Visited 10 days back and my skin problem got cured!!!! Thank u for courteous service by the staff members working in the clinic.",
    "userName":"Arvindh Subramanian"
  }]


    return (
      <div>
        <NavBarComp />
        {/* <ComponentHeader cName='About' bgImage={backgroundimage}/> */}
        <div className='about-info display-center' data-aos='fade-up'>
          <div className='container' style={{maxWidth:"1300px",border:'none'}}>
            <div className='row'>
              <div className='col-md-4 px-2' style={nameStyle}>
                <img src={ImageInfo} alt='skin' className='select-none about-image mt-3' />
              </div>
              <div className='col-md-8 pe-0' style={{position:'relative',alignItems:'top'}}>
                <p className='about-name ps-4'>Dr.Abhinesh N <span style={{fontWeight:"lighter",textTransform:"uppercase",fontSize:"clamp(0.5rem,4vw,1rem)"}}>mbbs.,md (dermatology)</span></p>
                <div className='about-info-rgcontainer mb-5 px-4 ms-2'><p>Dr. Abhinesh N. is a distinguished dermatologist with extensive training and experience in both medical and aesthetic dermatology.His dedication to excellence is reflected in his comprehensive education and specialized training.<br/>
                  <span>MD in Dermatology, Venereology, and Leprosy (MD DVL):</span> A rigorous medical degree that forms the foundation of his expertise in dermatology.
                  <br/><span>Fellowship in Laser, Aesthetic Dermatology, and Dermatosurgery:</span> Completed under the esteemed mentorship of Dr. Yogesh M. Bhingradia, a highly respected figure in dermatology renowned for his contributions to laser and aesthetic dermatology.
                  <br/><span>Diploma in Non-Surgical Aesthetic Procedures:</span> Earned in Dubai Anatomy, focusing on cutting-edge techniques and innovations in non-surgical aesthetics.
                  <br/><span>Training in Dermal Fillers:</span> Acquired under the guidance of renowned experts Dr. Gulhima Arora and Dr. Sandeep Arora, ensuring expertise in the latest dermal filler techniques.<br/>
                  <br/><span style={{fontWeight:'bold',textDecoration:'underline'}}>Philosophy and Approach</span><br/>
                  Dr. Abhinesh N. believes in a patient-centered approach to skincare, emphasizing personalized care and advanced techniques. His philosophy includes:
                  <br/><span>Customized Treatments:</span> Tailoring each treatment plan to address individual skin concerns and aesthetic goals, ensuring optimal results.
                  <br/><span>Innovative Techniques:</span> Utilizing the latest advancements and technologies in dermatology and aesthetics to provide the most effective solutions.
                  <br/><span>Patient Education:</span> Empowering patients with knowledge about their skin conditions and treatment options, facilitating informed decisions.<br/>
                  <br/><span style={{fontWeight:'bold',textDecoration:'underline'}}>Areas of Expertise</span><br/>
                  Dr. Abhinesh N. specializes in a wide range of dermatological and aesthetic treatments, including:</p>
                  <ul>
                    <li><p><span>Laser Treatments:</span> For skin resurfacing, pigmentation, and more.</p></li>
                    <li><p><span>Aesthetic Dermatology:</span> Including advanced non-surgical rejuvenation techniques.</p></li>
                    <li><p><span>Dermal Fillers:</span> Enhancing facial volume and contours.</p></li>
                    <li><p><span>Pigmentation Treatments:</span> Addressing uneven skin tone and dark spots.</p></li>
                    <li><p><span>Acne and Scar Treatments:</span> Providing solutions for acne and post-acne scars.</p></li>
                    <li><p><span>Vitiligo Surgery:</span> Specialized surgical interventions to treat vitiligo and restore skin pigmentation.</p></li>
                  </ul>

                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid' data-aos='fade-up'>
          <div className='row'>
            <div className='col-md-7 display-center'>
              <div className='about-container m-5 p-0'>
                <p className='header-text-custom1 p-0 m-0' style={{fontSize:"clamp(0.25rem,4vw,0.8rem)",}}>from our best Dermatologist</p>
                <h1 className='header-text-custom2 py-2'style={{fontSize:"clamp(1rem,4vw,2rem)"}}>What We Treat</h1>
                <p className='p-3 pe-5'>We offer a comprehensive range of skincare services tailored to your needs. From advanced cosmetic treatments to medical dermatology, our clinic specializes in enhancing and maintaining skin health. Our services include mole removal, laser therapy, anti-aging treatments, hair restoration, and pediatric dermatology. With state-of-the-art technology and a team of expert professionals, we provide personalized care to help you achieve your skincare goals.</p>
                <div className='container list-container'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <ul>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Acne Scarring</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Body Contoring</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Age Spots</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Brest Birth Marks</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>   Allergics</p></li>
                      </ul>
                    </div>
                    <div className='col-lg-6'>
                      <ul>  
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Scar Removels</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Hair Treatment</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Facial Redness</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Double Chin</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Angiofibromans</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-md-5 py-5' style={{backgroundColor:"#c3c3c3"}}>
              <div className='row display-center'>
              <AboutCardComponent image={BTImage} title={'Hair Treatment'}/>
              <AboutCardComponent image={FImage} title={'Dermatosurgery'}/>
              </div>
              <div className='row display-center'>
              <AboutCardComponent image={BrestImage} title={'Aesthetics'}/>
              <AboutCardComponent image={MTImage} title={'Skin growth'}/>
              </div>
              <div className='row display-center'>
              <AboutCardComponent image={HairImage} title={'Pigmentation'}/>
              <AboutCardComponent image={NImage} title={'Acne & Acne Scars'}/>
              </div>
            </div>
          </div>
        </div>
        <div className='testimonial-container mt-5'>
          <h1 className='header-text-custom2'>Testimonial</h1>
          <div className='p-0'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
              spaceBetween={1}
              slidesPerView={1}
              autoplay
              pagination={{ clickable: true }}
              style={{
                "--swiper-pagination-color": "#4f1d5f",
                zIndex: "0",
                justifyContent:'center',
              }}>
              {testimonialContent && testimonialContent.map((item) => (
                <SwiperSlide key={item.userName} className='m-0 p-0'>
                  <div style={{display:'flex',position:'relative',justifyContent:'center'}}>
                    <AboutTestimonial profileImg={item.profileImg} starCount={item.starCount} review={item.review} userName={item.userName}/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>          
          </div>
          <div className="clinic-name me-5">
            <h5 className='display-center'>
              ARAMM SKIN CLINIC
            </h5>
            <p className='testimonial-container-p display-center'>SKIN | HAIR | NAIL | LASER</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }


export default AboutPage
