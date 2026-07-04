import React, { Component } from 'react'
import Herocomponent from '../HomePageComponentes/Herocomponent'
import { Image } from 'react-bootstrap'
import image from '../assets/images/appointment-image2.jpeg'

function Step3Component({patientDetails}){
  function convertTo12Hour(time12h) {
    let [hours, minutes] = time12h.split(':');
    let period = 'PM';
    if (hours >= 12) {
      period = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (hours === '00') {
      hours = 12; // Midnight edge case
    }
    return `${hours}:${minutes} ${period}`;
  }

    return (
      <React.Fragment>
        <div className='container mb-5' style={{maxWidth:'1000px',
                                                backgroundImage:`linear-gradient(85deg,rgba(242, 242, 242, 1),rgba(179, 179, 179, 0.85),rgba(230, 230, 230,0.75)),url(${image})`,
                                                backgroundRepeat:"no-repeat",
                                                backgroundSize:"cover"}}>
            <div className='text-center pb-3'>
                <p className='header-text-custom1'>Conform your details</p>
                <h1 className='header-text-custome2' style={{textTransform:"uppercase"}}>Confirmation</h1>
            </div>
            <div className='row'>
                <div className='col' style={{display:"flex",flexDirection:'column',justifyContent:"space-around"}}>
                    <div className='d-inline'>
                        {/* <label className='details-label'>First Name: </label> */}
                        <h2 className='details-info-rgcontainer text-center'>Patient Details</h2>
                        <p className='ms-3' style={{fontWeight:'600'}}><span className='details-label pe-3'>First Name&ensp;&ensp;: </span>{patientDetails.fname}</p>
                        <p className='ms-3'style={{fontWeight:'600'}}><span className='details-label pe-3'>Last Name&ensp;&ensp;&ensp;: </span>{patientDetails.lname}</p>
                        <p className='ms-3'style={{fontWeight:'600'}}><span className='details-label pe-3'>Contact &ensp;&ensp;&ensp;&ensp;&ensp;: </span>{patientDetails.contact}</p>
                        <p className='ms-3'style={{fontWeight:'600'}}><span className='details-label pe-3'>Mail ID &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: </span>{patientDetails.mailid}</p>
                        <p className='ms-3'style={{fontWeight:'600'}}><span className='details-label pe-3'>Address &ensp;&ensp;&ensp;&ensp;&ensp;: </span>{patientDetails.address}</p>
                    </div>
                    <div className='d-inline'>
                        <h2 className='details-info-rgcontainer text-center mt-4'>Appointment Details</h2>
                        {/* <label className='details-label'>First Name: </label> */}
                        <p className='ms-3' style={{fontWeight:'600'}}><span className='details-label pe-3'>Date&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: </span>{patientDetails.appointmentdate}</p>
                        <p className='ms-3' style={{fontWeight:'600'}}><span className='details-label pe-3'>Time&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: </span>{convertTo12Hour(patientDetails.appointmenttime)}</p>
                        <p className='ms-3' style={{fontWeight:'600'}}><span className='details-label pe-3'>Service Type&ensp;: </span>{patientDetails.servicetype}</p>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }

export default Step3Component
