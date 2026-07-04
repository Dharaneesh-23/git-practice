import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
// import CosmeticTreatment from './ServicePages/CosmeticTreatment'
import NavBarComp from './NavBarComp'
// import { Link } from 'react-router-dom'
import Footer from './Footer'
// import MolesAndSkin from './ServicePages/MolesAndSkin'
// import ChildrenDematology from './ServicePages/ChildrensDermatology'
// import HairTranplantation from './ServicePages/HairTransplantation'
// import AntiAgingTreatment from './ServicePages/AntiAgingTreatment'
// import MedicalTreatment from './ServicePages/MedicalTreatment'
import bgImage from './assets/images/ChildrenDermatology.jpeg';
import axios from 'axios'
import ComponentHeader from './ComponentHeader'

function SerivceDetailPage() {
    const {serviceName} = useParams()
    const location = useLocation();
    const pkg_id = location.state || {}
    // console.log(pkg_id);
    const [packageDescriptionList,setPackageDescriptionList] = useState()

    const fetchPackageDescList = async() =>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listdescription1/${pkg_id}/`)
            setPackageDescriptionList(response.data)
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchPackageDescList()
    },[])

    // const getComponent = (name) => {
    //     switch (name) {
    //         case 'Cosmetic Treatment':
    //             return <CosmeticTreatment />
    //         case 'Moles and Skin':
    //             return <MolesAndSkin />
    //         case 'Medical Treatment':
    //             return <MedicalTreatment/>
    //         case 'Anti Aging Treatment':
    //             return <AntiAgingTreatment/>
    //         case 'Hair Transplantation':
    //             return <HairTranplantation/>
    //         case 'Children\'s Dermatology':
    //             return <ChildrenDematology/>
    //         default:
    //             break;
    //     }
    // }
    
    const regEscapeChar = (para) =>{
        let points = para.split("\r\n\r\n")
        let keyvaluepair = {}
        for(let i in points){
            let kval = points[i].split("\r\n")
            // console.log(kval);
            let temp = {}
            for(let j in kval){
                if(j==='0'){
                    continue
                }else{
                    let subpoint = kval[j].split("\t")
                    temp[subpoint[0]] = subpoint[1]
                }
                keyvaluepair[kval[0]]=temp
            }

        }
        
        // return(
        //     Object.entries(keyvaluepair).map((item,key)=>{
                
        //     })

        // )

        // if(points.length === 1){
        //     console.log('yes');
        return (<ul className='service-list-style ps-2' style={{listStyleType:'none'}}>
            {Object.entries(keyvaluepair).map((item,key)=>(
                <li key={key}>
                    <h4>{item[0]}</h4>
                    {Object.entries(item[1]).map((inneritem,innerkey)=>(
                        <p key={innerkey}>{inneritem}</p>
                    ))}
                </li>
            ))}
        </ul>)
        // }
    }

  return (
    <div className=' background-image1'>
        <NavBarComp />
        <ComponentHeader cName={serviceName} bgImage={bgImage} />
          {/* <div className='container-fluid px-0 component-header' style={{height:'auto',maxHeight:"130px",display:'flex',position:'relative',justifyContent:'center',flexDirection:'column'}}>
            <p className='header-text-custom2 display-center mb-0'>{serviceName}</p>
            <p className='display-center my-1'>
                <Link to={'/services'} style={{textDecoration:'none',color:'inherit'}}>Services </Link> &ensp;-&ensp;{serviceName}
            </p>
          </div> */}
        <div className='container mt-3'>
        {/* <img src={bgImage} className='demo-bg'/>/ */}
            {packageDescriptionList && packageDescriptionList.length !==0 ? packageDescriptionList.map((item,key) => {
                return item.des_img ? <div key={item.id}>           {/*  If image is present */}
                    <h1>{item.des_title}</h1> 
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>{item.des_type ? regEscapeChar(item.des_content) : (<p className='ps-2'>{item.des_content}</p>)}</div>
                        </div>
                        <div className='col-md-6'>
                            <img src={item.des_img} style={{width:"100%",height:'auto',maxHeight:"300px",objectFit:'contain'}}></img>
                        </div>
                    </div>  
                </div> :
                <div key={item.id}>   {/*  If image is not present */}
                    <h1>{item.des_title}</h1>   
                    <div>{item.des_type ? regEscapeChar(item.des_content) : (<p className='ps-2'>{item.des_content}</p>)}</div>
                </div>
            }) :(
                <div className='m-5 p-5'>
                    <p className='m-5 p-5 text-center' style={{fontWeight:'700'}}>The content are to be uploaded</p>
                </div>
            )}
        </div>
        {/* {getComponent(serviceName)} */}
        <Footer />
    </div>
  )
}

export default SerivceDetailPage
