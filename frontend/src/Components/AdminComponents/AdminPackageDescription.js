import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminPackageDescription() {
    const initialDescriptionState = {
        package_id :'',
        des_title :'',
        des_type  :false,
        des_content :"",
        des_img :null,
    }
    const [pkgdescriptionDetails,setPkgdescriptionDetails] = useState(initialDescriptionState)
    const [imagePreview, setImagePreview] = useState(null);
    const [descriptionDetails,setDescriptionDetails] = useState()
    const [packagenames,setPackagenames] = useState()

    const fetchpackageNames = async()=>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listpackagenames/`)
            setPackagenames(response.data)
        } catch (error) {
            console.log(`Couldn't fetch package names`);
        }
    }

    const fetchPackageDescription = async()=>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listdescription/`)
            setDescriptionDetails(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchPackageDescription()
        fetchpackageNames()
    },[])

    const handleViewBtn = (pkg_det)=>{
        if(pkg_det.des_img){
            fetch(pkg_det.des_img)
            .then(res => res.blob())
            .then(blob => {
              const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
              setPkgdescriptionDetails(prevDetails => ({
                ...prevDetails,
                des_img: file,
              }));
              setImagePreview(pkg_det.des_img); // Assuming gallery.imageFile is the URL
            })
            .catch(error => console.log(error));
      
          setPkgdescriptionDetails(pkg_det);   
        }
        else{
            setPkgdescriptionDetails(pkg_det)
            setImagePreview(null)
        }
    }

    const handleinputChange = (event)=>{
        const {name,value} = event.target
        setPkgdescriptionDetails(prevDetails=>({
            ...prevDetails,
            [name] : value
        }));
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPkgdescriptionDetails((prevDetails) => ({
          ...prevDetails,
          des_img: file,
        }));
        setImagePreview(URL.createObjectURL(file));
      };

  return (
    <React.Fragment>
      <div className='container-fluid' style={{ maxWidth: '1600px' }}>
        <div className='row input-field-align'>
            <div className='col-md-5'>
                <div className='patient-table'>
                    <table>
                        <thead>
                            <tr>
                              <th>Package name</th>
                              <th>Description title</th>
                              <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {descriptionDetails && descriptionDetails.map((pkgDetails, key) => (
                              <tr key={key} style={{ borderBottom: '1px solid black', height: '50px' }}>
                                {/* <td>{pkgDetails.package_id}</td> */}
                                <td>{packagenames && packagenames.map((item,key)=>{
                                    if (pkgDetails.package_id === item.id) {
                                        return item.title1
                                    }
                                })}</td>
                                <td>{pkgDetails.des_title}</td>
                                <td><button onClick={() => handleViewBtn(pkgDetails)} className='admin-view-button'>view</button></td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-md-6 update-package-form m-2'>
                <form>
                    <h5 style={{ textAlign: 'center' }} className='mt-2'>Select the package to update &#40;or&#41; enter the values and add new</h5>
                    <div className='input-field-align row'>
                        <label htmlFor='packagename'>Package name:&ensp;
                            <select name='package_id' id='packagename' onChange={handleinputChange} value={pkgdescriptionDetails.package_id} className='package-input-field' style={{appearance:'none',width:'200px'}}>
                                <option value={null} >No packages</option>
                                {packagenames && packagenames.map((item,key)=>(
                                    // console.log(item.id === pkgdescriptionDetails.package_id ? 'true': 'false')
                                    <option value={item.id} key={key}>{item.title1}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className='input-field-align row'>
                        <label htmlFor='title'>Description title: &ensp;
                            <input name='des_title' id='title' className='package-input-field' onChange={handleinputChange} value={pkgdescriptionDetails.des_title}/>
                        </label>
                    </div>
                    <div className='input-field-align row'>
                        <label htmlFor='desType'>Description Type &ensp;
                            <select name='des_type' id='desType' onChange={handleinputChange} value={pkgdescriptionDetails.des_type} className='package-input-field'>
                                <option value={true}>Pointwise content</option>
                                <option value={false}>Paragraph content</option>
                            </select>
                        </label>
                    </div>
                    <div className='input-field-align row'>
                        <label htmlFor='description'>Description: &ensp;
                            <textarea name='des_content' id='description' rows={4} className='package-input-field' onChange={handleinputChange} value={pkgdescriptionDetails.des_content} />
                        </label>
                    </div>
                    <div className='input-field-align row'>
                        <label htmlFor='desImage' className='file-input col-md-4'>Image Optional: &ensp;
                            <input type='file' id='desImage' name='des_img' onChange={handleImageChange} accept='image/jpeg,image/png,image/jpg' hidden required />
                        </label>
                        {imagePreview && (
                          <div className='col-md-6 mb-2' style={{ display: 'flex', position: 'relative', flexDirection: 'row', justifyContent: 'center' }}>
                            <p>Image Preview&ensp; </p>
                            <img src={imagePreview} alt="Image Preview" style={{ maxHeight: '100px' }} />
                          </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminPackageDescription
