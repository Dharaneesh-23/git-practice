
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/images/Logo-removebg-preview.png'
import Headroom from 'react-headroom';
import { useMediaQuery } from 'react-responsive';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import './assets/style.css';

function NavBarComp() {
    const isLargeScreen = useMediaQuery({ minWidth: 992 }); 
    const isMediumScreen = useMediaQuery({ minWidth: 800});
    const isSmallScreen = useMediaQuery({minWidth: 438});
    // console.log(isMediumScreen)
    return (
        <Headroom>
        <Navbar expand="md" className="bg-body-tertiary" style={{zIndex:"99"}}>
            {isMediumScreen? 
                ""
            :   <Navbar.Brand href="/" className='ms-5 py-0'>
                    <img src={logo} width={90} height={55} className='mx-2' alt='logo'/>
                </Navbar.Brand>
            }
            {/* <Navbar.Brand href="/"> */}
            {/* <img src={logo} width={80} height={35} className='mx-2' alt='logo'/> */}
                {/* {isMediumScreen ? (<img src={logo} width={150} height={70} className='mx-5' alt='logo' />) 
                : (isSmallScreen?(<img src={logo} width={90} height={50} className='mx-5' alt='logo'/>)
                :(<img src={logo} width={80} height={35} alt='logo'/>))} */}
                {/* <Navbar.Text className='fw-bold text-uppercase' style={{fontSize:'clamp(0.2rem,3vw,1rem)'}}>ARAMM skin clinic</Navbar.Text> */}
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3'/>
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center me-2'>
            <Nav className='container justify-content-center'>
                    {/* {isLargeScreen ?
                    <div className='row'>
                        <div className='col-7 about-list-icon' style={{borderRight:"3px solid #a6a6a6",height:"20px"}}>
                        <ul>
							<li>
								<a href={process.env.REACT_APP_INSTAGRAM_URL}><FontAwesomeIcon icon={faInstagram} className='header-btn-hover'/></a>
							</li>
							<li>
								<a href="#"><FontAwesomeIcon icon={faFacebook} className='header-btn-hover'/></a>
							</li>
							<li>
								<a href={process.env.REACT_APP_LINKEDIN_URL}><FontAwesomeIcon icon={faLinkedin} className='header-btn-hover'/></a>
							</li>
						</ul>
                        </div>
                        <div className='col-4' style={{justifyContent:'center'}}>
                            <span>+91 8870575600</span>
                        </div>
                    </div>
                    : ""} */}
                    <div className='row'>
                        {isMediumScreen? 
                        <div className='col text-center' style={{display:'inline-block'}}>
                            <Nav.Link as={Link} to='/' className='p-0'>
                                {isMediumScreen ? (<img src={logo} width={140} height={70} className='mx-5' alt='logo' />) 
                                : (isSmallScreen?(<img src={logo} width={90} height={50} className='mx-5' alt='logo'/>)
                                :(<img src={logo} width={80} height={35} alt='logo'/>))}
                            </Nav.Link>
                        </div>
                        : ""}
                        <div className='col-12 col-md text-center mt-3' style={{display:'inline-block'}}>
                            <Nav.Link as={Link} to='/' className='px-0'><p className='header-btn-hover'>Home</p></Nav.Link>
                        </div>
                        <div className='col-12 col-md text-center mt-3' style={{display:'inline-block'}}>
                            <Nav.Link as={Link}to='/about'className='px-0'><p className='header-btn-hover'>About</p></Nav.Link>
                        </div>
                        <div className='col-12 col-md text-center mt-3' style={{display:'inline-block'}}>
                            <Nav.Link as={Link}to='/before&after'className='px-0'><p className='header-btn-hover'>Before & After</p></Nav.Link>
                        </div>
                        <div className='col-12 col-md text-center mt-3' style={{display:'inline-block'}}>
                            <Nav.Link as={Link}to='/services'className='px-0'><p className='header-btn-hover'>Treatments</p></Nav.Link>
                        </div>
                        <div className='col-12 col-md text-center mt-3' style={{display:'inline-block'}}>
                        <Nav.Link as={Link}to='/contact'><p className='header-btn-hover'>Contact</p></Nav.Link>
                        </div>
                        <div className='col-12 col-md text-center mt-3' style={{display:'inline-block'}}>
                            <a href={process.env.REACT_APP_BOOKING_PAGE_URL} style={{textDecoration:'none'}}>
                                <Navbar.Text><p className='header-btn-hover py-2'>Consult Us</p></Navbar.Text>
                            </a>
                        </div>
                    </div>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Headroom>
  );
}

export default NavBarComp;