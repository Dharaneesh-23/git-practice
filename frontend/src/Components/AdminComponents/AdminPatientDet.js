import React , { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


function AdminPatientDet() {

  const [workDate,setWorkDate] = useState()
  const handleDateChange = (e) => {
    setWorkDate(e.value)
  }

  const [selectedPatient, setSelectedPatient] = useState(null);

  // Function to handle the button click
  const handleViewClick = (patient) => {
    setSelectedPatient(patient);
  };
  const [patientDetails, setPatientDetails] = useState([]);

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  const fetchPatientDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/patient/listpatients/`);
      setPatientDetails(response.data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  function convertTo24Hour(time12h) {
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

  const handleDelete = async () => {
      try {
        if(selectedPatient!=null){
          const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/patient/deletepatients/${selectedPatient.id}/`)
          fetchPatientDetails()
          setSelectedPatient(null)
          alert(`Deleted sucessfully ${response}`)
        }else{
          alert('Selected patient does not exist')
        }
      }catch (error){
        alert('Unable to Delete');
      }
  }

  return (
    <div className='container-fluid m-0' sytle={{maxWidth:'1600px'}}>
      <div className='row m-0' style={{position:'relative',display:'flex',justifyContent:'center'}}>
        <div className='col-md-6 p-0 mx-1 mt-2'>
          <div className='row mx-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <p className='col-7 pt-2' style={{textAlign:'center',fontWeight:'bold'}}>Select the Date</p>
            <input className='col-4 m-1' type='date' onChange={(e)=>{setWorkDate(e.target.value)}} />
          </div>
          <div className='patient-table'>  
            <table>
              <thead>  
                <tr style={{height:'20px'}}>
                  <th>Patient Name</th>
                  <th>Number</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {patientDetails.map((index,key) => {
                  if (workDate) {
                    if(index['appointmentdate'] === workDate){
                      return(
                        <tr key={key} style={{borderBottom:'1px solid black',height:'50px'}}>
                          <td style={{fontSize:'large'}}>{index['fname']} {index['lname']}</td>
                          <td style={{fontSize:'large'}}>{index['contact']}</td>
                          <td><button onClick={() => handleViewClick(index)}>view</button></td>
                        </tr>
                      )
                    }
                  } else {
                    return(
                      <tr key={key} style={{borderBottom:'1px solid black',height:'50px'}}>
                        <td style={{fontSize:'large'}}>{index['fname']} {index['lname']}</td>
                        <td style={{fontSize:'large'}}>{index['contact']}</td>
                        <td><button onClick={() => handleViewClick(index)}>view</button></td>
                      </tr>
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
          </div>
        <div className='patient-det-container col-md-5 mx-1 p-0 mt-2'>
          <h2>Selected Patient Details</h2>
          {selectedPatient ? (
            <div style={{marginTop:'50px', maxWidth:'400px'}}>
              {/* <p style={{fontSize:'30px',textAlign:'center'}}><FontAwesomeIcon icon={faUser}/></p> */}
              <p style={{textTransform:'capitalize'}}><span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>Name:</span>&ensp;&ensp; {selectedPatient.fname} {selectedPatient.lname}</p>
              <p><span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>MailId:</span>&ensp;&ensp; {selectedPatient.mailid}</p>
              <p style={{textTransform:'capitalize'}}><span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>Contact:</span>&ensp;&ensp; {selectedPatient.contact}</p>
              <p style={{textTransform:'capitalize'}}><span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>Appointment Date:</span>&ensp; {selectedPatient.appointmentdate}</p>
              <p style={{textTransform:'capitalize'}}><span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>Appointment Time:</span>&ensp; {convertTo24Hour(selectedPatient.appointmenttime)}</p>
              <p style={{textTransform:'capitalize'}}><span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>Service Type:</span>&ensp; {selectedPatient.servicetype}</p>
              <p style={{textTransform:'capitalize'}}><span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>Address:</span>&ensp; {selectedPatient.address}</p>
              <button
                onClick={()=>{
                  setSelectedPatient(null);
                }}>Clear</button>
              <button onClick={handleDelete} className='mx-5'>Delete</button>
              
            </div>
         ):(
          <div style={{marginTop:'100px'}}>
            <FontAwesomeIcon icon={faUser} style={{fontSize:'200px'}}/>
            <p style={{fontWeight:'bolder',marginTop:'50px'}}>No Patient is selected</p>
          </div>
         )}
        </div>
      </div>
      {/* {patientDetails.map((index,key) => (
        <React.Fragment>
          <p key={key}>{index['Fname']}</p>
          <p key={key}>{index['Lname']}</p>
          <p key={key}>{index['MailId']}</p>
          <p key={key}>{index['appointmentDate']}</p>
        </React.Fragment>
      ))} */}
    </div>
  )
}

export default AdminPatientDet
