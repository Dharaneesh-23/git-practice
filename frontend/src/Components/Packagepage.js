// // ||-------------------------------------------------------------------------------------------------------------------------||
// // ||  This component was initially created for separate package section. But after it was used for Before After image page   || 
// // ||-------------------------------------------------------------------------------------------------------------------------||


import React, { useEffect, useState } from 'react'
import NavBarComp from './NavBarComp'
import ComponentHeader from './ComponentHeader'
import Footer from './Footer'
import axios from 'axios'
import Aos from 'aos'
import { Image } from 'react-bootstrap'
import './assets/style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BACard = ({pName,image,pass_id}) => (
  <div className=' ba-card p-2 pb-0 row' style={{height:'100%'}} data-aos='fade-up'>
        <Link as={Link} to={`/before&after/${pName}`} state={pass_id} style={{textDecoration:'none'}}>
        <Image src={image} className='card-img-top col-12' style={{ height:'150px'}} />
          <p className='p-3 text-center col-12' style={{marginTop:'auto'}}>{pName}&ensp;<FontAwesomeIcon icon={faAngleRight} /></p>
        </Link>
      </div>
)

function Packagepage() {
  //variable Declaration
  const [baImages,setBaImages] = useState()
  // const [packagenames,setPackagenames] = useState()

  //Function Declaration
  const fetchBAimages= async()=>{
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listBAimage/`)
      const uniqueDataMap = new Map();

      response.data.forEach(item => {
        if (!uniqueDataMap.has(item.package_id)) {
          uniqueDataMap.set(item.package_id, item);
        }
      });
      // Convert the Map back to an array
      const uniqueData = Array.from(uniqueDataMap.values());
      setBaImages(uniqueData)
      console.log(uniqueData);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    fetchBAimages()
    Aos.init({duration:1500})
  },[])

  //Return Statement
  return (
    <React.Fragment>
      <NavBarComp />
      <ComponentHeader cName="Before & After" />
      <div className='container'>
        <div className='row' style={{display:'flex',justifyContent:'center'}}>
          {baImages && baImages.map((item,key)=>(
            <div className='col-sm-4 m-4' key={key}>
              <BACard pName={item.name} image={item.BAimage} pass_id={item.package_id}/>
            </div>
          ))}
          {/* <div className='col-sm-3'>
            <BACard pName="package 1" image={'hellow'}/>
          </div>
          <div className='col-sm-3'>
            <BACard pName="package 1" image={'hellow'}/>
          </div> */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Packagepage



























// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import ComponentHeader from './ComponentHeader';
// import NavBarComp from './NavBarComp';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import axios from 'axios';

// class PackagePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       packageDetails: [],
//       isMediumScreen: window.innerWidth >= 768
//     };
//   }

//   componentDidMount() {
//     this.fetchPackageDetails();
//     Aos.init({ duration: 2000 });
//     window.addEventListener('resize', this.handleResize);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }

//   handleResize = () => {
//     this.setState({
//       isMediumScreen: window.innerWidth >= 768
//     });
//   };

//   fetchPackageDetails = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listpackage/`);
//       this.setState({ packageDetails: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   CustomCard1 = ({ packageDetails }) => {
//     return (
//       <div className='container display-center' data-aos='fade-up'>
//         <div className='card mb-5' style={{ width: '85%', backgroundColor: '#f2f2f2' }}>
//           <div className='row'>
//             <div className='col-md-6'>
//               <img src={packageDetails.img1} className='card-md-image-top' style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
//             </div>
//             <div className='col-md-6'>
//               <h2 className='header-text-custom2 text-center mt-3' style={{ fontSize: 'clamp(1.85rem,4vw,2.5rem)' }}>{packageDetails.title1}</h2>
//               <p className='header-text-custom1 text-center pt-0' style={{ fontSize: 'clamp(0.5rem,4vw,1rem)' }}>{packageDetails.title2}</p>
//               <p className='text-center p-3'>{packageDetails.content}</p>
//               <div className='d-inline display-center'>
//                 <p className='text-center pt-4 px-5' style={{ fontWeight: 'lighter' }}>
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c1}</span> &nbsp;&nbsp;&nbsp;
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c2} </span> &nbsp;&nbsp;&nbsp;
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c3} </span>
//                 </p>
//               </div>
//               <div className='display-center my-4'>
//                 <Link to={'/services'} className="pkg-btn" style={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
//                   view Services
//                   <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{ fontSize: 'small' }} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   CustomCard2 = ({ packageDetails }) => {
//     const { isMediumScreen } = this.state;
//     const content = (
//       <div className='container display-center' data-aos='fade-up'>
//         <div className='card mb-5' style={{ width: '85%', backgroundColor: '#f2f2f2' }}>
//           <div className='row'>
//             <div className='col-md-6'>
//               <h2 className='header-text-custom2 text-center mt-3' style={{ fontSize: 'clamp(1.85rem,4vw,2.5rem)' }}>{packageDetails.title1}</h2>
//               <p className='header-text-custom1 text-center pt-0' style={{ fontSize: 'clamp(0.5rem,4vw,1rem)' }}>{packageDetails.title2}</p>
//               <p className='text-center p-3'>{packageDetails.content}</p>
//               <div className='d-inline display-center'>
//                 <p className='text-center pt-3 px-5' style={{ fontWeight: 'lighter' }}>
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c1}</span> &nbsp;&nbsp;&nbsp;
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c2} </span> &nbsp;&nbsp;&nbsp;
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c3} </span>
//                 </p>
//               </div>
//               <div className='display-center my-4'>
//                 <Link to={'/services'} className="pkg-btn" style={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
//                   view Services
//                   <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{ fontSize: 'small' }} />
//                 </Link>
//               </div>
//             </div>
//             <div className='col-md-6'>
//               <img src={packageDetails.img1} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );

//     const contentReverse = (
//       <div className='container display-center' data-aos='fade-up'>
//         <div className='card mb-5' style={{ width: '85%', backgroundColor: '#f2f2f2' }}>
//           <div className='row'>
//             <div className='col-md-6'>
//               <img src={packageDetails.img1} className='card-image-top' style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
//             </div>
//             <div className='col-md-6'>
//               <h2 className='header-text-custom2 text-center mt-3' style={{ fontSize: 'clamp(1.85rem,4vw,2.5rem)' }}>{packageDetails.title1}</h2>
//               <p className='header-text-custom1 text-center pt-0' style={{ fontSize: 'clamp(0.5rem,4vw,1rem)' }}>{packageDetails.title2}</p>
//               <p className='text-center p-3'>{packageDetails.content}</p>
//               <div className='d-inline display-center'>
//                 <p className='text-center pt-3 px-5' style={{ fontWeight: 'lighter' }}>
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c1}</span> &nbsp;&nbsp;&nbsp;
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c2} </span> &nbsp;&nbsp;&nbsp;
//                   <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {packageDetails.c3} </span>
//                 </p>
//               </div>
//               <div className='display-center my-4'>
//                 <Link to={'/services'} className="pkg-btn" style={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
//                   view Services
//                   <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{ fontSize: 'small' }} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );

//     return isMediumScreen ? content : contentReverse;
//   };

//   render() {
//     const { packageDetails } = this.state;
//     return (
//       <div>
//         <NavBarComp />
//         <ComponentHeader cName='Packages' />
//         <div className='container mt-3'>
//           <h1 className='header-text-custom2 display-center mb-3'>our Packages</h1>
//           <p className='display-center mb-5'>we offer a various set of skin care Packages in concerns for your skin</p>
//         </div>
//         {packageDetails && packageDetails.map((item, index) => {
//           if (index % 2 === 0) {
//             return <this.CustomCard1 packageDetails={item} key={item.title1} />;
//           } else {
//             return <this.CustomCard2 packageDetails={item} key={item.title1} />;
//           }
//         })}
//         <Footer />
//       </div>
//     );
//   }
// }

// export default PackagePage;
 