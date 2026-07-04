import { Alert } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Step2Component({patientDetails,handleInputChange}) {
    const [slots,setSlots] = useState() 
    const [currDate,setCurrDate] = useState()
    const s = ["4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"]
    const [packageNames,setPackageNames] = useState()
    const treatments =['Cosmetic Treatment','Moles and Skin','Medical Treatment','Anti Aging Treatment','Hair Transplantation',"Children's Dermatology"]
    const today = new Date().toISOString().split('T')[0];

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
    function convertTo24Hour(timeString) {
      // Split the time string into its components
      const [time, period] = timeString.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      
      // Adjust hours based on AM/PM
      if (period === 'PM' && hours < 12) {
        hours += 12;
      }
      if (period === 'AM' && hours === 12) {
        hours = 0;
      }
    
      // Format the hours and minutes as two digits
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
    
      return `${formattedHours}:${formattedMinutes}`;
    }

    const getpackagenames = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listpackagenames/`)
        setPackageNames(response.data)
      } catch (error) {
        console.log(`Package Fetch failed with status ${error}`);
      }
    }
    useEffect(()=>{
      getpackagenames()
    },[])

    const getappointments = async(date) => {
      try{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/patient/listappointment/?date=${date}`)
        const scheduled = response.data.map(item => convertTo12Hour(item.appointmenttime));
        setSlots(scheduled)

      }catch(error){
        alert(error)
      }
    }

    const handleDateChange = (event) => {
      const selectedDate = event.target.value;
      handleInputChange(event);
      getappointments(event.target.value);
    };

    return (
      <React.Fragment>
        <div className='pb-5' style={{borderRadius:"10px",position:'relative',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div className='text-center'>
            <p className='header-text-custom1'> Select your preferred date</p>
            <h1 className='header-text-custome2' style={{textTransform:"uppercase"}}>Schedule Appointment</h1>
          </div>
          <Alert severity="info" className='display-center mx-5' style={{width:'800px'}}>Slots dislayed are only for 5 days from today</Alert>
          <div className='row mt-5 mx-5' style={{width:'600px'}}>
            <div className='col-12'>
                <input type='date' name='appointmentdate' className='input-field' id='soltDate' value={patientDetails.appointmentdate} onChange={handleDateChange} style={{width:"100%"}} min={today}/>  
            </div>
            <div className='col-12 pt-3'>
              <select id='soltTime' name='appointmenttime' className='input-field' value={patientDetails.appointmenttime} onChange={handleInputChange} style={{width:"100%"}}>
                <option defaultValue={''}>Select Time</option>
                {slots && s.map((time) => {                                   
                  return !slots.includes(time) ? <option className='solts-active' value={convertTo24Hour(time)} key={time}>{time}</option> : 
                  <option disabled value={time} style={{background:"#e6e6e6"}} key={time}>{time}</option>})
                }
              </select>
              
            </div>
            <div className='col-12 mt-4'>
                <select aria-label='Package' name='servicetype' value={patientDetails.servicetype} onChange={handleInputChange} id='patientPackage' className='input-field' >
                    <option defaultChecked value={'none'}>None</option>
                    <optgroup label='Package'>
                    {packageNames&&packageNames.map((item,index)=>(
                        <option value={item.title1} key={index}>{item.title1}</option>
                    ))}
                    </optgroup>
                    <optgroup label='Treatments'>
                      {treatments.map((item,index)=>(
                          <option value={item} key={index}>{item}</option>
                      ))}  
                    </optgroup>
                </select>
            </div>   
            
          </div>
        </div>
      </React.Fragment>
    )
  }

export default Step2Component
