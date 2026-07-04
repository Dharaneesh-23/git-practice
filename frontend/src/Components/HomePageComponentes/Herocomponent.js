import React , { useEffect, useState} from 'react'
import logo from '../assets/images/Logo-removebg-preview.png'
// import { Image } from 'react-bootstrap';
// import bootstrap from 'bootstrap';
// import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
// import { duration } from '@mui/material';
import axios from 'axios';
// import video1 from '../assets/video/3209828-uhd_3840_2160_25fps.mp4'


function Herocomponent() {
  const [video, setVideo] = useState(null);

    useEffect(() => {
        // Fetch video data from Django backend
        Aos.init({duration:2000});
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/video/listvideo/`);
                response.data.forEach(element => {
                  if(element.toplay){
                    setVideo(element.file)
                    // console.log(element.file);
                    
                  }
                });
                // setVideo(videoData);
            } catch (error) {
                console.error("Error fetching video data:", error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <div style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',backgroundColor:'#f2f2f2'}}>
          {video ? (
            <video style={{width:'100%',height:'auto',maxHeight:'475px',objectFit:'cover'}} loop autoPlay muted src={video}> 
                {/* <source src={video} type="video/mp4" />
                Your browser does not support the video tag. */}
            </video>
          ) : (
            <img src={logo} style={{width:'100%' ,maxWidth:'750px'}}/>
          )}
        </div>
    );





  // useEffect(()=>{
  //   Aos.init({duration:2000});
  // })
  // return (
  //   <div data-aos='fade-up'>
  //     <section className='hero-component'>
  //     <div className='container'>
  //       <div className='row'>
  //         <div className='col-sm-6 justify-center d-flex flex-column ps-5 hero-component-content' style={{}}>
  //           <div className='hero-component-center ps-3' style={{textTransform:"capitalize",letterSpacing:'2px', fontFamily:"monospace"}}>
  //             <p>Advanced skin care</p>
  //           </div>
  //           <div>
  //             <h1>Get the best skin treatments</h1>
  //           </div>
  //           <div 
  //           style={{display:'flex',position:'relative',justifyContent:"center", paddingTop:"10px"}}>
  //             <Link to={'/services'} className='hero-btn ' style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:'none'}}>Services</Link>
  //           </div>
  //         </div>
  //         <div className='col-sm-6' style={{display:'flex',position:'relative',justifyContent:'center',alignItems:"center"}}>
  //           <Image fluid src={skinImage} alt='skin image' className='point-events-none select-none ms-3 mt-3' style={{objectFit:'cover'}}/>
  //         </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // )
}

export default Herocomponent

