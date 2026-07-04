import image1 from './assets/images/Section service-img1.jpg.png';
import image2 from './assets/images/Moles.jpg';
import image3 from './assets/images/Section service-3.jpg.png';
import image4 from './assets/images/Antiaging.jpeg.jpg';
import image5 from './assets/images/Section service-5.png';
import image6 from './assets/images/Section service-6.jpg.png';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import NavBarComp from './NavBarComp';
import ComponentHeader from './ComponentHeader';
import Footer from './Footer';

class ServicesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLargeScreen: window.innerWidth >= 992,
      isMediumScreen: window.innerWidth >= 768,
      isSmallScreen: window.innerWidth >= 490,
      packageDetails: [],
    };

    this.header = [
      'Cosmetic Treatment', 'Moles and Skin', 'Medical Treatment', 'Anti Aging Treatment', 
      'Hair Transplantation', "Children's Dermatology"
    ];

    this.description = [
      'Elevate your beauty with our range of cosmetic treatments designed to enhance features and rejuvenate appearance for lasting confidence.',
      'Elevate your beauty with our range of cosmetic treatments designed to enhance features and rejuvenate appearance for lasting confidence.',
      'Experience top-notch medical treatment encompassing hair, skin, and nail care. Our skilled professionals offer personalized solutions for various conditions, ensuring comprehensive care and optimal wellness',
      'Rediscover youthful radiance with our advanced anti-aging treatments. From innovative skincare regimens to rejuvenating procedures, our clinic offers personalized solutions to combat signs of aging effectively, helping you achieve timeless beauty and confidence.',
      'Regain confidence with our hair transplantation services. Our skilled team provides personalized solutions for natural-looking results, ensuring a seamless and successful journey to thicker, fuller hair.',
      'Regain confidence with our hair transplantation services. Our skilled team provides personalized solutions for natural-looking results, ensuring a seamless and successful journey to thicker, fuller hair.'
    ];

    this.images = [image1, image2, image3, image4, image5, image6];
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.fetchPackageDetails();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isLargeScreen: window.innerWidth >= 992,
      isMediumScreen: window.innerWidth >= 768,
      isSmallScreen: window.innerWidth >= 490,
    });
  };

  fetchPackageDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listpackage/`);
      this.setState({ packageDetails: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  Card = ({ header, description, image ,pass_id }) => {
    return (
      <div className='card p-2' style={{ border: "none",height:'100%'}} data-aos='fade-up'>
        <Image src={image} className='card-img-top' style={{ maxHeight: '250px' }} />
        <h1 className='header-text-custom2 pt-2' style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", color: '#4f1d5f', marginTop:'auto'}}>{header}</h1>
        <div className='border-bottom-h' />
        <p className='p-3'>{description}</p>
        <div className='mb-2' style={{marginTop:'auto'}}>
          <Link as={Link} to={`/services/${header}`} state={ pass_id } style={{ textDecoration: "none" }}>
            <button className='navigation-btn display-center mb-5'>
              <FontAwesomeIcon icon={faChevronCircleRight} className='navigation-btn-arrow'></FontAwesomeIcon>
              <p className='mb-0'>View Details</p>
            </button>
          </Link>
        </div>
      </div>
    );
  };

  // PackageCard = ({ packagedetails }) => {
  //   return (
  //     <div className='package-card my-2' data-aos='fade-up'>
  //       <Image src={packagedetails.img2} alt='untitled' className='m-1' style={{ width: "80px", height: '90px', borderRadius: '100px' }} />
  //       <div className="package-card-inner align-center">
  //         <p style={{ textTransform: 'capitalize' }}>{packagedetails.title2}</p>
  //         <h1 className='header-text-custom2' style={{ fontSize: 'clamp(0.5rem,4vw,2rem)' }}>{packagedetails.title1}</h1>
  //       </div>
  //       <div style={{ height: '200px', paddingBlock: '20px' }}>
  //         <p className='text-center pt-3'><FontAwesomeIcon icon={faCheck} /> {packagedetails.c1}</p>
  //         <p className='text-center'><FontAwesomeIcon icon={faCheck} /> {packagedetails.c2}</p>
  //         <p className='text-center'><FontAwesomeIcon icon={faCheck} /> {packagedetails.c3}</p>
  //       </div>
  //       <Link to={'/appointment'} style={{ textDecoration: 'none' }}>
  //         <button className='treatment-btn mb-5'>schedule now</button>
  //       </Link>
  //     </div>
  //   );
  // };

  render() {
    const { isLargeScreen, isMediumScreen, isSmallScreen, packageDetails } = this.state;
    return (
      <div>
        <NavBarComp />
        <ComponentHeader cName="Treatments" bgImage={image2} />
        <div>
          <div className='container display-center py-5'>
            <div className='row'>
              {packageDetails.map((item, index) => (
                <div className='col-sm-12 col-md-6' key={item}>
                  <this.Card header={item.title1} description={item.content} image={item.img1} pass_id={item.id}/>
                </div>
              ))}
            </div>
          </div>
          {/* <div className='container text-center mb-5'>
            <p className='header-text-custom1'>With Best Price</p>
            <h1 className='header-text-custom2'>Our Packages</h1>
            <div className='container'>
              <div className='row'>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  style={{
                    "--swiper-navigation-color": "#d966ff",
                    "--swiper-navigation-size": "26px",
                    "--swiper-pagination-color": "#d966ff",
                    zIndex: "0"
                  }}
                >
                  {packageDetails && packageDetails.map((item) => (
                    <SwiperSlide className='col-sm-6 col-md-6 col-lg-3 px-1' key={item.title1}>
                      <this.PackageCard packagedetails={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ServicesPage;
