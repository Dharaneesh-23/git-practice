import React , { useEffect , useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownToggle, Nav , NavDropdown, Navbar } from 'react-bootstrap';
import AdminUpdatePackage from './AdminUpdatePackage';
import AdminEditUser from './AdminEditUser';
import AdminPatientDet from './AdminPatientDet';
import AdminGallery from './AdminGallery';
import AdminPackageDescription from './AdminPackageDescription';
import AdminBaImage from './AdminBaImage';
import SubscriberAlert from './SubscriberAlert';
import AdminUpdateVideo from './AdminEditVideo';


function AdminLoggedComp() {
    const navigate = useNavigate();
    const {userName} = useParams(); 
    const [page,setPage] = useState(1);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/administration')
        }
        const role = localStorage.getItem('token');
        if (role === 'admin') {
            setIsAdmin(true);
        }
        window.onpopstate = e =>{
            if(!localStorage.getItem('token')){
                alert('You\'ve already been logged out. Try logging in!!')
            }
            else{
                alert('By clicking ok you will be logged out of the admin page')
                handleLogout();
            }
        }
    }, [])

    const handleLogout = () =>{
        localStorage.removeItem('token')
        navigate('/administration')
    }
    const handlePage = (e) =>{
        const id = e.target.id;
        switch (id){
            case 'btn-patient-details':
                setPage(0);
                break;
            case 'btn-edit-users':
                setPage(1);
                break;
            case 'btn-update-package':
                setPage(2);
                break;
            case 'btn-update-gallery':
                setPage(3);
                break;
            case 'btn-package-description':
                setPage(4);
                break;
            case 'btn-ba-image':
                setPage(5);
                break;
            case 'alert-users':
                setPage(6);
                break;
            case 'btn-update-video':
                setPage(7);
                break;
            default:
                console.log("invalid page");
        }
    }

    const getComponent = (index) =>{
        switch (index){
            case 1:
                // return <AdminPatientDet />
                return <AdminEditUser />
            case 2:
                return <AdminUpdatePackage />
            case 3:
                return <AdminGallery />
            case 4:
                return <AdminPackageDescription />
            case 5:
                return <AdminBaImage />
            case 6:
                return <SubscriberAlert />
            case 7:
                return <AdminUpdateVideo />
            default:
                console.log("invalid page");
        }
    }

    return (
    <React.Fragment>
        <Navbar expand="lg" className="admin-nav" style={{zIndex:"99"}}>
            <Navbar.Brand style={{marginInlineStart:'40px'}}>
                <Navbar.Text className='fw-bold text-uppercase' style={{fontSize:'clamp(0.8rem,4vw,1.5rem)'}}>Welcome {userName}!!</Navbar.Text>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3'/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='button-group'>
                {/* <Nav><button className='logout-btn' onClick={handlePage} id='btn-patient-details'>patient details</button></Nav> */}
                <Nav>
                    <NavDropdown title='Update Content' className='logout-btn' id='updateContent'>
                        <NavDropdown.Item onClick={handlePage} id='btn-update-video'>Video</NavDropdown.Item>
                        <NavDropdown.Item onClick={handlePage} id='btn-update-gallery'>Gallery</NavDropdown.Item>
                        <NavDropdown.Item onClick={handlePage} id='btn-update-package'>Package</NavDropdown.Item>
                        <NavDropdown.Item onClick={handlePage} id='btn-package-description'>Package Description</NavDropdown.Item>
                        <NavDropdown.Item onClick={handlePage} id='btn-ba-image'>Before After Image</NavDropdown.Item>
                    </NavDropdown>
                    {/* <button className='logout-btn' onClick={handlePage} id='btn-update-packages'>update packages</button> */}
                </Nav>
                <Nav><button className='logout-btn' onClick={handlePage} id='btn-edit-users' disabled={!isAdmin}>edit user</button></Nav>
                <Nav><button className='logout-btn' onClick={handlePage} id='alert-users' disabled={!isAdmin}>Subscriber Alert</button></Nav>
                <Nav><button onClick={handleLogout} className='logout-btn'><FontAwesomeIcon icon={faHome} />  logout</button></Nav>
                {/* </div> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        {getComponent(page)}
    </React.Fragment>
  )
}

export default AdminLoggedComp












/* <div className='admin-nav'>
            <h2 className='header-text-custom2'>Welcome {userName}!!</h2>
            <div className='button-group'>
                <button className='logout-btn' style={{borderRight:'2px solid black'}}> patient details</button>
                <button className='logout-btn' style={{borderRight:'2px solid black'}}> edit user</button>
                <button className='logout-btn' style={{borderRight:'2px solid black'}}> update packages</button>
                <button onClick={handleLogout} className='logout-btn'><FontAwesomeIcon icon={faHome} />  logout</button>
            </div>
        </div> */