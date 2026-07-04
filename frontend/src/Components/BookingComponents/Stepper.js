// +--------------------------------------------------------------------------+
// |           THIS PAGE IS NOT USED JUST WRITTEN FOR TEMPORARY               |
// +--------------------------------------------------------------------------+
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VerifiedIcon from '@mui/icons-material/Verified';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft,faCheck } from '@fortawesome/free-solid-svg-icons';
import { Typography,Box,Button } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Step1Component from './Step1Component';
import { useNavigate } from 'react-router-dom';
import Step2Component from './Step2Component';
import Step3Component from './Step3Component';
import FinalPage from './FinalPage';
import { TextareaAutosize } from '@mui/material'

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#d966ff',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#d966ff',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  zIndex:-1,
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(52, 203, 52) 0%,rgb(26, 101, 26) 50%,rgb(217, 102, 255) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(0, 153, 51) 0%,rgb(77, 255, 136) 50%,rgb(0, 153, 51) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 0,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(217, 102, 255) 0%, rgb(134, 0, 179) 50%,  rgb(191, 0, 255) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(133, 224, 133) 0%, rgb(26, 101, 26) 50%, rgb(52, 203, 52) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonIcon />,
    2: <CalendarMonthIcon />,
    3: <VerifiedIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};





//--------------------------------COMPONENT------------------------------------------
export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isInvalid,setIsInvalid] = React.useState(false);

  const [patientDetails,setPatientDetails] = React.useState({
    Fname:"",
    Lname:"",
    Contact:"",
    Mail:"",
    Address:"",
  })
  const [appointmentDetails,setAppointmentDetails] = React.useState(
    {
      appointmentDate:"",
      appointmentTime:"",
      appointmentPackage:"",
    }
  )

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const navigate = useNavigate();


  const handleReset = () => {
    {alert(`Appointment has been confirmed`)}
    {navigate('/')}
    setActiveStep(0);
  };


  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setAppointmentDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
    }));
    // console.log(appoimentDetails.appointmentDate)
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
    }));
};
  
  const steps = ['Enter the patiet Details', 'Select the appointment time', 'Confirmation'];
  function getSteps(index){
    switch (index) {
      case 0:
        // console.log(`stepper 1: ${patientDetails.Fname}`)
        return <Step1Component patientDetails={patientDetails} handleInputChange={handleInputChange}/>
      case 1:
        // console.log(`stepper 2: ${patientDetails.Fname}`)
        return <Step2Component patientDetails={appointmentDetails} handleInputChange2={handleInputChange2} />
      case 2:
        // console.log(`stepper 3: ${patientDetails.Fname}`)
        return <Step3Component patientDetails={patientDetails} packageDetails={appointmentDetails}/>
    
      default:
        return "Invalid Step"
    }
  } 
  return (
      <div className='container'>
        <Stepper className='pt-5' alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label,index) => {
            const stepProps = {};
            const labelProps = {};
            return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}>{label}</StepLabel>
            </Step>
            );
        })}
        </Stepper>
        {/* {activeStep === steps.length ? ( */}
        {/* <React.Fragment> */}
          {/*  */}
          {/* <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }}> */}
            {/* <Box sx={{ flex: '1 1 auto' }}/> */}
            {/* <div className='container display-center mb-3' style={{flexDirection:'column',maxWidth:'1200px',backgroundColor:'#f2f2f2'}}> */}
              {/* <h2 className='header-text-custom1 text-center'>Appointment Details has been received sucessfully</h2> */}
              {/* <h1 className='header-text-custom2 text-center'>Discover the Magic of Healthy Skin</h1> */}
              {/* <label className='mt-5'>Hit the submit button to conform your appointment. Tell your feedback or queries related to our treatments </label> */}
              {/* <TextareaAutosize minRows={4} name='AppointmentQueries' placeholder='Queries / Feedback' className='mt-3'/>   */}
              {/* <button className="btn-hover my-4" style={{maxWidth:"300px"}} onClick={handleReset}>Submit</button> */}
            {/* </div> */}
            {/* {alert('Appointment has been conformed')}
            {navigate('/')} */}
          {/* </Box> */}
        {/* </React.Fragment> */}
      {/* ) : ( */}
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 , marginY:"10px"}}>
            {getSteps(activeStep)}
            {isInvalid ? 
            <p className='invalid-input text-center'>Invalid input or Incomplete fields</p>
            :""
            }
            <Box sx={{ flex: '1 1 auto', display:'flex',flexDirection:'row',justifyContent:"space-around" }}>
            <button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              style={{all:"none",maxWidth:"100px"}}
              className='btn-hover'
            >
              <p className='mb-0'><FontAwesomeIcon icon={faAngleLeft}/> Back</p>
            </button>
            {/* <button onClick={handleNext} style={{all:"none",maxWidth:"100px"}} className='btn-hover'> */}
              {activeStep === steps.length - 1 ? 
              <button onClick={handleReset} style={{all:"none",maxWidth:"100px"}} className='btn-hover'>
                <p className='mb-0'>Finish <FontAwesomeIcon icon={faCheck}/></p>
              </button> :
              <button onClick={handleNext} style={{all:"none",maxWidth:"100px"}} className='btn-hover'>  
                <p className='mb-0'>Next <FontAwesomeIcon icon={faAngleRight} /></p>
              </button>}
            {/* </button> */}
            </Box>
          </Box>
        </React.Fragment>
      {/* )} */}
      </div>
  );
}
