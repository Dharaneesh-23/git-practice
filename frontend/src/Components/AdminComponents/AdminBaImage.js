import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminBaImage() {

    const initialImageState = {
        id:'',
        package_id:'',
        BAimage:'',
        name:'',
    };

    const [baImages, setBaImages] = useState()
    const [newImage,setNewImage] = useState(initialImageState)
    const [packagenames,setPackagenames] = useState()
    const [imagePreview,setImagePreview] = useState()
    
    const fetchpackageNames = async()=>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listpackagenames/`)
            setPackagenames(response.data)
        } catch (error) {
            console.log(`Couldn't fetch package names`);
        }
    }
    
    const fetchBAimages= async()=>{
        try {
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listBAimage/`)
          setBaImages(response.data)
        //   console.log(response);
        } catch (error) {
          console.log(error);
        }
      }

      const addBAimage = async () => {
        if (newImage) {
          const formData = new FormData();
          formData.append('package_id', newImage.package_id);
          formData.append('BAimage', newImage.BAimage);
          try {
            let response;
              response = await axios.post(`${process.env.REACT_APP_API_URL}/api/package/createBAimage/`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              alert(`Before After image added for ${response.data}`);
            fetchBAimages(); // Refresh gallery list
          } catch (error) {
            console.log(error.response);
          }
        } else {
          alert(`No image details found`);
        }
      };
    
      const deleteBaImage = async() =>{
        try {
          if(newImage.id !== ''){
            // console.log(`${process.env.REACT_APP_API_URL}/apipackage/deleteBAimage/${newImage.id}/`);
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/package/deleteBAimage/${newImage.id}/`);
            fetchBAimages();
            setNewImage(initialImageState);
            setImagePreview(null);
            alert(`Deleted successfully`);
          } else {
            alert('Selected image does not exist');
          }
        } catch (error){
          alert(`Unable to delete`);
        }
      };

    useEffect(()=>{
        fetchBAimages();
        fetchpackageNames();
    },[])

    const handleViewBtn = (baimage) => {
        // fetch(baimage.BAimage)
        //   .then(res => res.blob())
        //   .then(blob => {
        //     const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
        //     setNewImage(prevDetails => ({
        //       ...prevDetails,
        //       BAimage: file,
        //     }));
        //     setImagePreview(baimage.img); // Assuming gallery.imageFile is the URL
        //   })
        //   .catch(error => console.log(error));
    
        setNewImage(baimage);
        setImagePreview(baimage.BAimage)
        // console.log(newImage);
      };

      const handleDeleteClick = (e) => {
        if (newImage.package_id && newImage.BAimage) {
          if (window.confirm('Do you want to delete the gallery image?')) {
            e.preventDefault();
            deleteBaImage();
          } else {
            e.preventDefault();
          }
        } else {
          e.preventDefault();
          alert('The fields are empty');
        }
      };
    
      const handleAddClick = (e) => {
        e.preventDefault();
        addBAimage();
      };
    
      const handleClearClick = (e) => {
        e.preventDefault();
        setImagePreview(null);
        setNewImage(initialImageState);
      };

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewImage((prevDetails) => ({
          ...prevDetails,
          BAimage: file,
        }));
        setImagePreview(URL.createObjectURL(file));
      };
      const handleInputChange = (e) => {
        const {name,value} = e.target
        setNewImage((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
        // console.log(newImage);
      };

    return (
        <React.Fragment>
          <div className='container-fluid' style={{ maxWidth: '1600px' }}>
            <div className='row input-field-align'>
              <div className='col-md-5 my-2'>
                <div className='patient-table'>
                  <table>
                    <thead>
                      <tr>
                        <th>Package Name</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      {baImages && baImages.map((item, key) => (
                        <tr key={key} style={{ borderBottom: '1px solid black', height: '50px' }}>
                          <td>{item.name}</td>
                          <td><button onClick={() => handleViewBtn(item)} className='admin-view-button'>view</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-md-6 update-package-form m-2'>
                <form>
                  <h5 style={{ textAlign: 'center' }} className='mt-2'>Select the Before and After image to update &#40;or&#41; enter the values and add new</h5>
                  <div className='input-field-align row'>
                        <label htmlFor='packagename'>Package name:&ensp;
                            <select name='package_id' id='packagename' onChange={handleInputChange} value={newImage.package_id} className='package-input-field' style={{appearance:'none',width:'200px'}}>
                                <option value={''} >No packages</option>
                                {packagenames && packagenames.map((item,key)=>(
                                    // console.log(item.id === pkgdescriptionDetails.package_id ? 'true': 'false')
                                    <option value={item.id} key={key}>{item.title1}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                  <div className='input-field-align my-4 row ps-3'>
                    <label htmlFor='imageFile' className='file-input col-12'>Choose Image
                      <input type='file' id='imageFile' name='imageFile' onChange={handleImageChange} accept='image/jpeg,image/png,image/jpg' hidden required />
                    </label>
                    {imagePreview && (
                      <div className='col-12 mt-1' style={{ display: 'flex', position: 'relative', flexDirection: 'row', justifyContent: 'center' }}>
                        <p>Image Preview&ensp; </p>
                        <img src={imagePreview} alt="Image Preview" style={{ maxHeight: '100px' }} />
                      </div>
                    )}
                  </div>
                  <div className='input-field-align-button my-4 pb-4' style={{justifyContent:'space-around'}}>
                    <button onClick={handleAddClick} className='admin-action-button'>Add</button>
                    <button onClick={handleDeleteClick} className='admin-action-button'>Delete</button>
                    <button onClick={handleClearClick} className='admin-action-button'>Clear</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default AdminBaImage
