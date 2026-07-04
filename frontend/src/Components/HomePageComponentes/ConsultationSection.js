import {useEffect, useState} from 'react'
// import React from 'react';
import '../assets/style.css';
// import { FormControl, TextField, Select, MenuItem,InputLabel } from '@mui/material';
import { createTheme, useTheme } from '@mui/material/styles';
import Aos from 'aos';
// import ThemeProvider from '@mui/material/styles';
import 'aos/dist/aos.css'
// import { Link } from 'react-router-dom';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#d966ff',
            '--TextField-brandBorderFocusedColor': '#d966ff',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiSelect:{
        styleOverrides:{
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        }
      },
      MuiInputLabel:{
        styleOverrides:{
          root:{
            '&.Mui-focused':{
              color:'#d966ff',
            }
          }
        }
      }
    },
  });

function ConsultationSection() {
    const outerTheme = useTheme();
    useEffect(()=>{
        Aos.init({duration:1500})
    })
    const [cPatientDetails,setCPatientDetails ]  = useState({
        name:"",
        mailid:"",
        phonenumber:"",
        consultationdate:"",
        treatmenttype:"",
    })
    const treatments =['Cosmetic Treatment','Moles and Skin','Medical Treatment','Anti Aging Treatment','Hair Transplantation',"Children's Dermatology"]

    const consultationInputChange = (event) => {
        const { name, value } = event.target;
        setCPatientDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };
    const consultationSubmit = (event) =>{
        alert(`The details has been sucessfully submitted \n ${cPatientDetails.name}, ${cPatientDetails.treatmenttype}`)
        
        event.preventDefault();
    }

  // return (
  //   <div data-aos='fade-up'>
  //   <div className='consult-section py-5'>
  //       <div className='container-fluid'>
  //           <form onSubmit={consultationSubmit}>
  //               <div className='row'>
  //                   <ThemeProvider theme={customTheme(outerTheme)}>
  //                       <div className='col-sm-3'>
  //                           <p className='header-text-custom1 display-center my-1 p-1'>Request for Your</p>
  //                           <p className='header-text-custom2 display-center' >Consultation</p>
  //                       </div>
  //                       <div className='col-sm-3 '>
  //                           {/* <TextField variant='standard' id='contactName' label="Username" fullWidth/> */}
  //                           <TextField variant='standard' id='userName' name='name' type='text' value={cPatientDetails.name} onChange={consultationInputChange} className='mb-3' label='Name' fullWidth/>
  //                           <TextField variant='standard' id='emailField' name='mailid' type='mail' value={cPatientDetails.mailid} onChange={consultationInputChange} className='' label="Mail Id" fullWidth />
  //                       </div>
  //                       <div className='col-sm-3 '>
  //                           <TextField variant='standard' id='contactNumber' name='phonenumber' type='tel' value={cPatientDetails.phonenumber} onChange={consultationInputChange} label='Phone Number' className='mb-3'fullWidth/>
  //                           <TextField variant='standard' id='preferedDate' name='consultationdate' type='date' value={cPatientDetails.consultationdate} onChange={consultationInputChange} className='mb-3 pt-3' fullWidth/>
  //                       </div>
  //                       <div className='col-sm-3'>
  //                           <FormControl variant='standard' fullWidth>
  //                           <InputLabel id="treatment-type-label">Treatment Type</InputLabel>
  //                           <Select className="input-field mb-4" labelId='treatment-type-label' name='treatmenttype' value={cPatientDetails.treatmenttype} onChange={consultationInputChange} variant='standard' aria-label="Default select example" fullWidth>
  //                               {treatments.map((item,index)=>(
  //                                   <MenuItem value={item} key={index}>{item}</MenuItem>
  //                               ))}
  //                           </Select>
  //                           </FormControl>
  //                           <Link as={Link} to='/appointment'>
  //                               <button className='btn-hover text-wrap' type='submit'>Book Appointment</button>
  //                           </Link>
  //                       </div>
  //                   </ThemeProvider>
  //               </div>
  //           </form>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default ConsultationSection
