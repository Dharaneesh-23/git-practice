// +--------------------------------------------------------------------------+
// |       THIS PAGE IS NOT USED JUST WRITTEN FOR TEMPORARY                   |
// +--------------------------------------------------------------------------+

import React from 'react'
import { TextareaAutosize } from '@mui/material'

function FinalPage() {
  return (
    <React.Fragment>
        <div className='container' style={{maxWidth:'1200px',backgroundColor:'#f2f2f2'}}>
            <h2 className='header-text-custom1 text-center'>Appointment Details has been received sucessfully</h2>
            <h1 className='header-text-custom2 text-center'>Discover the Magic of Healthy Skin</h1>
            <label className='mt-5'> Tell your feedback or queries related to our treatments</label>
            <TextareaAutosize minRows={4} name='AppointmentQueries' placeholder='Queries / Feedback' className='mt-3'/>  
        </div>
    </React.Fragment>
  )
}

export default FinalPage
