import React , { useEffect, useState } from 'react'
// import image1 from '../assets/images/Section service-img-cap1.jpg.png';
// import image2 from '../assets/images/Section home-service-2.jpg.png';
// import image3 from '../assets/images/Section home-service-3.jpg.png';
// import image4 from '../assets/images/Section home-service-4.jpg.png';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Pagination,Navigation,Scrollbar, A11y ,Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import { useMediaQuery } from 'react-responsive';
// import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import axios from 'axios';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

function HomeTreatment() {
    // const isSmallScreen = useMediaQuery({minWidth:576})
    const isMediumScreen = useMediaQuery({minWidth:768})
    const isLargeScreen = useMediaQuery({minWidth:992})
    // const style = isSmallScreen ? {width:"11rem"} : {width:"20rem"}
    const [gallery,setGallery] = useState()
    const fetchgallery = async() => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/gallery/listgallery/`)
            setGallery(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        Aos.init({duration:2000})
        fetchgallery()
    },[])
  return (
    <div className='home-treatment py-5' data-aos='fade-up' >
        {/* <div>
            <p className='header-text-custom1 text-center'>healthy skin and natural</p>
        </div> */}
        <div>
            <p className='header-text-custom2 text-center mb-0'>Gallery</p>
        </div>
        <div className='container mt-3'>
            <div className='row'>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                  spaceBetween={10}
                  slidesPerView={isLargeScreen ? 3 : isMediumScreen ? 2 : 1}
                  autoplay={true}
                  pagination={{ clickable: true }}
                  style={{
                    "--swiper-pagination-color": "#4f1d5f",
                    zIndex: "0",
                    justifyContent:'center',
                  }}
                >
                  {gallery && gallery.map((item) => (
                    <SwiperSlide className='col-sm-6 col-md-6 col-lg-3 px-1' key={item.name}>
                      <div className='package-card mb-5 mt-2 mx-2' data-aos='fade-up'>
                          <Image src={item.img} alt='untitled' className='m-1' style={{ width: "97%", height: '80%'}} />
                        </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default HomeTreatment
