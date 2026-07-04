import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminUpdatePackage() {
  const initialPackageState = {
    title1: '',
    title2: '',
    content: '',
    c1: '',
    c2: '',
    c3: '',
    img1: null,
    img2: null,
  };

  const [newPackage, setNewPackage] = useState(initialPackageState);
  const [imagePreview1, setImagePreview1] = useState(null);
  // const [imagePreview2, setImagePreview2] = useState(null);
  const [packageDetails, setPackageDetails] = useState(null);

  const fetchPackageDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/listpackage/`);
      setPackageDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addPackageDetails = async () => {
    if (newPackage) {
      const formData = new FormData();
      // console.log(newPackage.img1);
      formData.append('title1', newPackage.title1);
      // formData.append('title2', newPackage.title2);
      formData.append('content', newPackage.content);
      formData.append('img1', newPackage.img1);
      // formData.append('img2', newPackage.img2);
      // formData.append('c1', newPackage.c1);
      // formData.append('c2', newPackage.c2);
      // formData.append('c3', newPackage.c3);
      try {
        let response;
        if (newPackage.id) {
          response = await axios.put(`${process.env.REACT_APP_API_URL}/api/package/updatepackage/${newPackage.id}/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          alert(`Package updated`);
        } else {
          response = await axios.post(`${process.env.REACT_APP_API_URL}/api/package/createpackage/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          alert(`Package added`);
        }
        fetchPackageDetails(); // Refresh package list
      } catch (error) {
        console.log(error.response);
      }
    } else {
      alert(`No package details found`);
    }
  };

  const deletepackage = async() =>{
    try {
      if(newPackage!=null){
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/package/deletepackage/${newPackage.id}/`)
        fetchPackageDetails()
        setNewPackage(initialPackageState)
        setImagePreview1(null)
        // setImagePreview2(null)
        alert(`Deleted sucessfully ${response}`)
      }else{
        alert('Selected patient does not exist')
      }
    }catch (error){
      alert('Unable to Delete');
    }
  }

  useEffect(() => {
    fetchPackageDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setNewPackage((prevDetails) => ({
      ...prevDetails,
      [name]: file,
    }));
    if (name === 'img1') {
      setImagePreview1(URL.createObjectURL(file));
    } else if (name === 'img2') {
      // setImagePreview2(URL.createObjectURL(file));
    }
  };

  const handleViewBtn = (pkg) => {
    fetch(pkg.img1)
    .then(res => res.blob())
    .then(blob => {
      const file = new File([blob], 'img1.jpg', { type: 'image/jpeg' });
      setNewPackage(prevDetails => ({
        ...prevDetails,
        img1: file,
      }));
      setImagePreview1(pkg.img1); // Assuming pkg.img1 is the URL
    })
    .catch(error => console.log(error));

  // fetch(pkg.img2)
  //   .then(res => res.blob())
  //   .then(blob => {
  //     const file = new File([blob], 'img2.jpg', { type: 'image/jpeg' });
  //     setNewPackage(prevDetails => ({
  //       ...prevDetails,
  //       img2: file,
  //     }));
  //     setImagePreview2(pkg.img2); // Assuming pkg.img2 is the URL
  //   })
  //   .catch(error => console.log(error));

    setImagePreview1(pkg.img1);
    // setImagePreview2(pkg.img2);
    setNewPackage(pkg);
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();
    addPackageDetails();
    // code to update in database
  };

  const handleDeleteClick = (e) => {
    if (newPackage.title1 && newPackage.title2 && newPackage.content && newPackage.img1 && newPackage.img2 && newPackage.c1 && newPackage.c2 && newPackage.c3) {
      if (window.confirm('Do you want to delete the package?')) {
        // logic to delete the package
        e.preventDefault();
        deletepackage()
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
    addPackageDetails();
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    setImagePreview1(null);
    // setImagePreview2(null);
    setNewPackage(initialPackageState);
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
                    <th>Package title1</th>
                    {/* <th>Package title2</th> */}
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {packageDetails && packageDetails.map((pkg, key) => (
                    <tr key={key} style={{ borderBottom: '1px solid black', height: '50px' }}>
                      <td>{pkg.title1}</td>
                      {/* <td>{pkg.title2}</td> */}
                      <td><button onClick={() => handleViewBtn(pkg)}className='admin-view-button'>view</button></td>
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
                <label htmlFor='title1Input' className='col-12'>Title1:
                  <input type='text' maxLength={50} id='title1Input' name='title1' value={newPackage.title1} className='package-input-field ms-2' onChange={handleInputChange} required />
                </label>
              </div>
              {/* <div className='input-field-align row'>
                <label htmlFor='title2Input' className='col-12'>Title2:
                  <input type='text' maxLength={50} id='title2Input' name='title2' value={newPackage.title2} className='package-input-field ms-2' onChange={handleInputChange} required />
                </label>
              </div> */}
              <div className='input-field-align row my-4'>
                <label htmlFor='content' style={{ width: "100%" }}>Description:
                  <textarea id='content' name='content' value={newPackage.content} rows={4} className='package-input-field' onChange={handleInputChange} required></textarea>
                </label>
              </div>
              <div className='input-field-align my-4 row ps-3'>
                <label htmlFor='image1' className='file-input col-md-6'>Choose Image
                  <input type='file' id='image1' name='img1' onChange={handleImageChange} accept='image/jpeg,image/png,image/jpg' hidden required />
                </label>
                {imagePreview1 && (
                  <div className='col-md-6' style={{ display: 'flex', position: 'relative', flexDirection: 'row', justifyContent: 'center' }}>
                    <p>Rectangle Image&ensp; </p>
                    <img src={imagePreview1} alt="Image Preview" style={{ maxHeight: '50px' }} />
                  </div>
                )}
              </div>
              {/* <div className='input-field-align row my-4 ps-3'>
                <label htmlFor='image2' className='file-input col-md-6'>Choose Circle Image
                  <input type='file' id='image2' name='img2' onChange={handleImageChange} accept='image/jpeg,image/png,image/jpg' hidden required />
                </label>
                {imagePreview2 && (
                  <div className='col-md-6' style={{ display: 'flex', position: 'relative', flexDirection: 'row', justifyContent: 'center' }}>
                    <p>Circle Image&ensp; </p>
                    <img src={imagePreview2} alt="Image Preview" style={{ maxHeight: '50px' }} />
                  </div>
                )}
              </div>
              <div className='input-field-align row my-4'>
                <label htmlFor='c1' className='col-md-12 '>Hint 1:
                  <input type='text' id='c1' name='c1' value={newPackage.c1} className='package-input-field ms-2' onChange={handleInputChange} maxLength={30} required />
                </label>
              </div>
              <div className='input-field-align row my-4'>
                <label htmlFor='c2' className='col-md-12 '>Hint 2:
                  <input type='text' id='c2' name='c2' value={newPackage.c2} className='package-input-field ms-2' onChange={handleInputChange} maxLength={30} required />
                </label>
              </div>
              <div className='input-field-align row my-4'>
                <label htmlFor='c3' className='col-md-12 '>Hint 3:
                  <input type='text' id='c3' name='c3' value={newPackage.c3} className='package-input-field ms-2' onChange={handleInputChange} maxLength={30} required />
                </label>
              </div> */}
              <div className='input-field-align-button row my-4 pb-4'>
                <button onClick={handleAddClick} className='package-btn'>Add</button>
                <button onClick={handleUpdateClick} className='package-btn'>Update</button>
                <button onClick={handleDeleteClick} className='package-btn'>Delete</button>
                <button onClick={handleClearClick} className='package-btn'>Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminUpdatePackage;
