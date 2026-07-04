// ||------------------------------------------------------------------------------------------------------------------||
// ||      This component acts as a dynamic content loader page for package component (i.e)., Before & After image     ||
// ||------------------------------------------------------------------------------------------------------------------||

import React, { useEffect, useState } from 'react';
import NavBarComp from './NavBarComp';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import ComponentHeader from './ComponentHeader';
import dummyimage from './assets/images/Acne Scar Revision.jpeg'

const fetchBAimages = async( pkg_id ,setBaImages) =>{
    try {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listBAimage1/${pkg_id}/`)
        setBaImages(response.data)
    } catch (error) {
        console.log(error);
      }
}
const fetchpackageNames = async(setPackageNames) =>{
    // console.log(pkg_id);
    try {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listpackagenames/`)
        setPackageNames(response.data)
    } catch (error) {
        console.log(error);
    }
}

function PackageDetialPage() {
    const {packageName} = useParams()
    const location = useLocation();
    const pkg_id = location.state || {}
    const [packageNames,setPackageNames] = useState()
    const [baImages, setBaImages] = useState(null)

    

    useEffect(()=>{
        fetchBAimages(pkg_id,setBaImages);
        fetchpackageNames(setPackageNames);
    },[pkg_id,packageName])

    

  return (
    <React.Fragment>
        <NavBarComp />
        <ComponentHeader cName={packageName} bgImage={dummyimage} />
        {/* <div className='container-fluid px-0 component-header' style={{height:'auto',maxHeight:"130px",display:'flex',position:'relative',justifyContent:'center',flexDirection:'column'}}>
            <p className='header-text-custom2 display-center mb-0'>{packageName}</p>
            <p className='display-center my-1'>
                <Link to={'/before&after'} style={{textDecoration:'none',color:'inherit'}}>Before & After </Link> &ensp;-&ensp;{packageName}
            </p>
        </div> */}
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='row'>
                        {baImages && baImages.length !==0 ? baImages.map((item,key)=>(
                            <div className='row display-center'>
                                <Image src={item.BAimage} key={key} className='my-2' style={{width:'80%',maxHeight:'350px'}}/>
                            </div>
                        )):(
                            <div className='m-5 p-5'>
                                <p className='m-5 p-5 text-center' style={{fontWeight:'700'}}>It is being uploaded</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='col-md-4 ba-container'>
                    <h2>Other Before & After Images</h2>
                    <div>
                        {packageNames && packageNames.map((item, key) => {
                            const isActive = item.title1 === packageName;
                            return (
                                <Link
                                    as={Link}
                                    to={`/before&after/${item.title1}/`}
                                    state={item.id}
                                    key={key}
                                    className={isActive ? 'active' : ''}
                                >
                                    <p>{item.title1}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* <div className='col-md-4 ba-container'>
                    <h2>Other Before & After Images</h2>
                    <div>
                    {packageNames && packageNames.map((item,key)=>{
                        if (item.title1) {
                            return (<Link as={Link} to={`/before&after/${item.title1}/`} state={item.id} key={key}>
                                        <p>{item.title1}</p>
                                    </Link>)
                        } else {
                            return (<Link as={Link} to={`/before&after/${item.title1}/`} state={item.id} key={key}>
                                        <p>{item.title1}</p>
                                    </Link>)
                        }
                    })}
                    </div>
                </div>   */}
            </div>
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default PackageDetialPage
