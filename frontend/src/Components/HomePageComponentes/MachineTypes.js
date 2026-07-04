import React from 'react';
// import image2 from '../assets/images/HIFU-removebg-preview.png';
// import image1 from '../assets/images/iris_bluetoning-removebg-preview.png';
// import image3 from '../assets/images/iris-removebg-preview.png'
import { useMediaQuery } from 'react-responsive';
import { useState,useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
// import { duration } from '@mui/material';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function HomeTreatmentTypes() {
    useEffect(()=> {
        Aos.init({duration:2000});
    })
    const [subscriberMailID,setSubscriberMailID] = useState('')
    const isMediumScreen = useMediaQuery({minWidth:768})
    const clsName = isMediumScreen ? 'container mt-container mx-5 my-3' : 'container mt-container my-3'

    const handleClick = async(e) =>{
        e.preventDefault();
        if(subscriberMailID){
            const data = {'email_id':subscriberMailID,}
            try {
                let response = await axios.post(`${process.env.REACT_APP_API_URL}/api/createsubscription/`,data)
                // console.log(response);
                return alert('Thankyou for subscribing.\r\nYou will receive our updates')
            } catch (error) {
                if(error.response.data.email_id.includes('subscription with this email id already exists.')){
                    alert(`You've Subscribed already`)
                }else{
                    alert('Please try later or Conatact Us')
                }
            }
        }
    }

    return(
        <div className={clsName}>
            <div className='row'>
                <div className='col-md-6 px-5' style={{flexDirection:'column',color:'white'}}>
                    <h2 className='ps-3 ms-2 mt-header2 mt-5'>contact us</h2>
                    <div className=''>
                        <p className='row'>
                            <FontAwesomeIcon icon={faEnvelope} className='col-1 p-0 pt-1'/>
                            <span className='col-10 p-0' style={{wordBreak:'break-all'}}>arammskinclinic@gmail.com</span>
                        </p>
                        <p className='row mb-5'>
                            <FontAwesomeIcon icon={faMapMarkedAlt} className='col-1 p-0 pt-1'/>
                            <span className='col-10 p-0'>
                                4/19 , RC Church road , Pallavaram, Chennai - 600043
                            </span>
                        </p>
                    </div>
                    <h2 className='mb-5' style={{paddingBlock:'auto'}}>Would you like to<br/> 
                        <a href={process.env.REACT_APP_BOOKING_PAGE_URL} className='home-contact-link'>Consult us?</a>
                    </h2>
                </div>
                <div className='col-md-6 display-center' style={{flexDirection:'column',color:'white'}}>
                    <h2>Subscribe to get our updates</h2>
                    <div style={{width:'70%',height:'40px',borderRadius:'50px',border:'0px',backgroundColor:'white'}} className='row mb-5'>
                        <form onSubmit={handleClick} className='px-0'>
                        <input id='subscribeMailID' type='email' required value={subscriberMailID} onChange={(e)=>setSubscriberMailID(e.target.value)} placeholder='Email ID' style={{height:'90%',borderRadius:'50px',border:'0px'}} className='input-field col-8 pb-1 px-3'/>
                        <button type='submit' className='mt-input-button col-4'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTreatmentTypes
// function HomeTreatmentTypes() {
//     useEffect(()=>{
//         Aos.init({duration:2000});
//     })
//     const isSmallScreen = useMediaQuery({minWidth:748});
//     const imagestyle = isSmallScreen ? {top: '60%',left:'-10px', transform: 'translateY(-40%)', zIndex: 2, opacity: '0.5'} : {top: '80%',left:'-10px', transform: 'translateY(-40%)'}

//     const titleList = ['iris bluetoning','H I F U','iris']
//     const imagesList = [image1,image2,image3]
//     const descriptionList = [
//         'Iris Blue Toning is a laser treatment that can help with uneven skin tone, blemishes, and dark spots. It\'s considered a gold standard treatment for reducing hyperpigmentation. The IRIS S+ is a Q-Switch ND-YAG laser that can be used for blue-toning',
//         'High-intensity focused ultrasound (HIFU) is a minimally invasive medical procedure that uses ultrasound waves to treat certain conditions, such as tumors, uterine fibroids and tremor. The very high-intensity and highly focused sound waves interact with targeted tissues in your body to modify or destroy them.',
//         'Iris is a Q-switch Nd:YAG Laser (532nm/1064nm/SLP/PTP). The composition of the laser resonator is designed in a way that allows the laser beam to be uniformly distributed, acquiring an excellent beam quality of top hat mode.'
//     ]

//     const CustomRadioButton = ({ 
//         label, 
//         selected, 
//         onSelect, 
//     }) => ( 
//             <button className={selected?'radioButton selected px-2': 'radioButton px-2'}
//                 // style={{ styles.radioButton, 
//                 //     ...(selected 
//                 //         ? styles.selected 
//                 //         : {}), 
//                 // }} 
//                 onClick={onSelect} 
//             > 
//                 {label} 
//             </button>  
//     ); 

//     const [selectedValue, setSelectedValue] = useState(1); 
//     const [title,setTitle] = useState(titleList[1]);
//     const [image,setImage] = useState(imagesList[1]);
//     const [description,setDescription] = useState(descriptionList[1]);
// 	const handleRadioButtonChange = (value) => {
// 		setSelectedValue(value);
// 		switch(value) {
// 			case 0:
//                 setTitle(titleList[0])
//                 setImage(imagesList[0])
//                 setDescription(descriptionList[0])
//                 break;
// 			case 1:
//                 setTitle(titleList[1])
//                 setImage(imagesList[1])
//                 setDescription(descriptionList[1])
//                 break;
//             case 2:
//                 setTitle(titleList[2])
//                 setImage(imagesList[2])
//                 setDescription(descriptionList[2])    
// 				break;
// 			default:
//                 console.log('Invalid Option');
// 				break;
// 		}
// 	};

// 	return ( 
// 		<div data-aos="fade-up"> 
// 			<p className='header-text-custom1 display-center mt-5'>we provide for you</p>
//             <p className='header-text-custom2 display-center'>Our Technologies</p>

// 			<div className='container display-center '> 
//                 <div className='row'>
//                     <div className='col p-0 display-center mb-2'>
//                         <CustomRadioButton 
//                             label="iris bluetoning"
//                             selected={selectedValue === 0}
//                             onSelect={() => handleRadioButtonChange(0)} 
//                         /> 
//                     </div>
//                     <div className='col p-0 display-center mb-2'>
//                         <CustomRadioButton 
//                             label="HIFU"
//                             selected={selectedValue === 1} 
//                             onSelect={() => handleRadioButtonChange(1)} 
//                         />   
//                     </div>
//                     <div className='col p-0 display-center mb-2'>
//                         <CustomRadioButton 
//                             label="iris"
//                             selected={selectedValue === 2} 
//                             onSelect={() => handleRadioButtonChange(2)} 
//                         />
//                     </div>
//                 </div> 
// 			</div> 
//             <div className='container-fluid m-0 my-5'>
//                         {isSmallScreen ? (
//                             <div className='row p-0 me-0 mt-5'>
//                                 <div className='col-12 display-center'>
//                                     <img src={image} style={{ width: '400px', height: '300px' }} />
//                                 </div>
//                                 <div className='col-6 pb-3 display-center'>
//                                     <h1 className='display-center p-0' style={{textTransform:'uppercase',fontFamily:'sans sans-serif',opacity:'0.8',fontSize:'clamp(30px,6vw,120px)'}}>{title}</h1>
//                                 </div>
//                                 <div className='col-6 display-center'>
//                                     <p className='ps-5' style={{zIndex:3,width:'1000px',fontSize:'25px'}}>{description}</p>
//                                 </div>
//                             </div>
//                         ):(
//                             <div className='row p-0 me-0'>
//                                 <div className='col-12 pb-3'>
//                                     <h1 className='display-center p-0' style={{textTransform:'uppercase',fontFamily:'sans sans-serif',opacity:'0.8',fontSize:'clamp(30px,6vw,120px)'}}>{title}</h1>
//                                 </div>
//                                 <div className='col-12'>
//                                     <p className='ps-1'>{description}</p>
//                                 </div>
//                                 <div className='col-12 display-center'>
//                                     <img src={image} style={{ width: '200px', height: '150px' }} className='display-center'/>
//                                 </div>
//                             </div>
//                         )}
//             </div>
            
// 		</div> 
// 	); 

// }
