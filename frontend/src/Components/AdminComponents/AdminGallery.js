import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminUpdateGallery() {
  const initialGalleryState = {
    name: '',
    img: null,
  };

  const [newGallery, setNewGallery] = useState(initialGalleryState);
  const [imagePreview, setImagePreview] = useState(null);
  const [galleryDetails, setGalleryDetails] = useState(null);

  const fetchGalleryDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/gallery/listgallery/`);
      // console.log(response);
      setGalleryDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addOrUpdateGalleryImage = async () => {
    if (newGallery) {
      const formData = new FormData();
      formData.append('name', newGallery.name);
      formData.append('img', newGallery.img);
      try {
        let response;
        response = await axios.post(`${process.env.REACT_APP_API_URL}/api/gallery/creategallery/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert(`Gallery image added`);
        fetchGalleryDetails(); // Refresh gallery list
      } catch (error) {
        console.log(error.response);
      }
    } else {
      alert(`No gallery image details found`);
    }
  };

  const deleteGalleryImage = async() =>{
    try {
      if(newGallery != null){
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/gallery/deletegallery/${newGallery.id}/`);
        fetchGalleryDetails();
        setNewGallery(initialGalleryState);
        setImagePreview(null);
        alert(`Deleted successfully ${response}`);
      } else {
        alert('Selected gallery image does not exist');
      }
    } catch (error){
      alert('Unable to delete');
    }
  };

  useEffect(() => {
    fetchGalleryDetails();
  }, []);

  const handleInputChange = (e) => {
    setNewGallery((prevDetails) => ({
      ...prevDetails,
      'name': e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewGallery((prevDetails) => ({
      ...prevDetails,
      img: file,
    }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleViewBtn = (gallery) => {
    // fetch(gallery.img)
    //   .then(res => res.blob())
    //   .then(blob => {
    //     const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
    //     setNewGallery(prevDetails => ({
    //       ...prevDetails,
    //       img: file,
    //     }));
    //     setImagePreview(gallery.img); // Assuming gallery.imageFile is the URL
    //   })
    //   .catch(error => console.log(error));
    // console.log(newGallery);

    setNewGallery(gallery);
    setImagePreview(gallery.img)
  };

  const handleDeleteClick = (e) => {
    if (newGallery.name && newGallery.img) {
      if (window.confirm('Do you want to delete the gallery image?')) {
        e.preventDefault();
        deleteGalleryImage();
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
    addOrUpdateGalleryImage();
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    setImagePreview(null);
    setNewGallery(initialGalleryState);
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
                    <th>Image Name</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {galleryDetails && galleryDetails.map((gallery, key) => (
                    <tr key={key} style={{ borderBottom: '1px solid black', height: '50px' }}>
                      <td>{gallery.name}</td>
                      <td><button onClick={() => handleViewBtn(gallery)} className='admin-view-button'>view</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-md-6 update-package-form m-2'>
            <form>
              <h5 style={{ textAlign: 'center' }} className='mt-2'>Select the gallery image to update &#40;or&#41; enter the values and add new</h5>
              <div className='input-field-align row'>
                <label htmlFor='imageNameInput' className='col-12'>Image Name:
                  <input type='text' maxLength={50} id='imageNameInput' name='imageName' value={newGallery.name} className='gallery-input-field ms-2' onChange={handleInputChange} required />
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
                <button onClick={handleAddClick} className='gallery-btn'>Add</button>
                <button onClick={handleDeleteClick} className='gallery-btn'>Delete</button>
                <button onClick={handleClearClick} className='gallery-btn'>Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminUpdateGallery;
