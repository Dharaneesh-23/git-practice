import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminUpdateVideo() {
  const initialVideoState = {
    name: '',
    file: null,
    toplay: false,
  };

  const [newVideo, setNewVideo] = useState(initialVideoState);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoDetails, setVideoDetails] = useState([]);

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/video/listvideo/`);
      setVideoDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addOrUpdateVideo = async () => {
    if (newVideo) {
      const formData = new FormData();
      formData.append('name', newVideo.name);
      formData.append('file', newVideo.file);
      formData.append('toplay', newVideo.toplay);
      try {
        let response;
        response = await axios.post(`${process.env.REACT_APP_API_URL}/api/video/createvideo/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert(`Video added successfully`);
        fetchVideoDetails();
      } catch (error) {
        alert("Error in add or update method");
      }
    } else {
      alert('No video details found');
    }
  };

  const deleteVideo = async () => {
    try {
      if(newVideo.id){
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/video/deletevideo/${newVideo.id}/`);
        fetchVideoDetails();
        setNewVideo(initialVideoState);
        setVideoPreview(null);
        alert(`Video deleted successfully`);
      }else{
        alert('No content found')
      }
    } catch (error) {
      alert('Unable to delete video');
    }
  };

  const handleInputChange = (e) => {
    if(e.target.name === 'toplay'){
        setNewVideo(prevDetails => ({
          ...prevDetails,
          [e.target.name]:e.target.checked
        }))
      }else{
        setNewVideo((prevDetails) => ({
          ...prevDetails,
          [e.target.name]: e.target.value,
        }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewVideo((prevDetails) => ({
      ...prevDetails,
      file: file,
    }));
    setVideoPreview(URL.createObjectURL(file));
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    addOrUpdateVideo();
  };

  const handleDeleteClick = (e) => {
    if (window.confirm('Do you want to delete this video?')) {
      e.preventDefault();
      deleteVideo();
    }
  };

  const handleViewClick = (video) => {
    setNewVideo(video);
    setVideoPreview(video.file);
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    setVideoPreview(null);
    setNewVideo(initialVideoState);
  };

  useEffect(() => {
    fetchVideoDetails();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid" style={{ maxWidth: '1600px' }}>
        <div className="row input-field-align">
          <div className="col-md-5">
            <div className="patient-table">
              <table>
                <thead>
                  <tr>
                    <th>Video Name</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {videoDetails.map((video, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid black', height: '50px' }}>
                      <td>{video.name}</td>
                      <td>
                        <button onClick={() => handleViewClick(video)} className="admin-view-button">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6 update-package-form m-2">
            <form>
              <h5 style={{ textAlign: 'center' }} className="mt-2">
                Select a video to update or add new
              </h5>
              <div className="input-field-align row">
                <label htmlFor="videoNameInput" className="col-12">
                  Video Name:
                  <input
                    type="text"
                    maxLength={50}
                    id="videoNameInput"
                    name="name"
                    value={newVideo.name}
                    className="video-input-field ms-2"
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="input-field-align my-4 row ps-3">
                <label htmlFor="videoFile" className="file-input col-12">
                  Choose Video
                  <input
                    type="file"
                    id="videoFile"
                    name="file"
                    onChange={handleFileChange}
                    accept="video/*"
                    hidden
                    required
                  />
                </label>
                {videoPreview && (
                  <div
                    className="col-12 mt-1"
                    style={{
                      display: 'flex',
                      position: 'relative',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <p>Video Preview:</p>
                    <video src={videoPreview} controls style={{ maxHeight: '200px' }}></video>
                  </div>
                )}
              </div>
              <div>
                           <label htmlFor='toplay'>Enable&ensp;&ensp;
                           <input 
                           type='checkbox' 
                           name='toplay' 
                           checked={newVideo.toplay} onChange={handleInputChange} />
                           </label>
                        </div>
              <div
                className="input-field-align-button my-4 pb-4"
                style={{ justifyContent: 'space-around' }}
              >
                <button onClick={handleAddClick} className="video-btn">
                  Add/Update
                </button>
                <button onClick={(e) => handleDeleteClick(e)} className="admin-delete-button">
                  Delete
                </button>
                <button onClick={handleClearClick} className="video-btn">
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminUpdateVideo;
