import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AdminEditUser() {

  useEffect(()=>{
    fetchCredentials()
  },[])

  const fetchCredentials = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admistrator/listadmin/`);
      setCredentials(response.data);
    } catch (error) {
      alert('Error in connecting the server');
    }
  };

  const [enabled,setEnabled] = useState(false) 

  const [inputFields,setInputFields] = useState({
    "username": "",
    "password": "",
    "privilege": false,
    "mailid": "",
  })
  const [credentials,setCredentials] = useState()

  const handleInputChange = (e) =>  {
    const {name , value} = e.target
    if(name === 'privilege'){
      setInputFields(prevDetails => ({
        ...prevDetails,
        [name]:e.target.checked
      }))
    }else{
      setInputFields(prevDetails => ({
        ...prevDetails,
        [name]:value
      }))
    }
  }

  const handleEditBtn = (index) => {
    setEnabled(true)
    setInputFields(index)
  }
  const handleClearBtn = (e) =>{
    e.preventDefault()
    setInputFields({
      "username": "",
      "password": "",
      "privilege": false,
      "mailid": "",
    })
    setEnabled(false)
  }
  
  const handleDeleteBtn = async (e) => {
    e.preventDefault()
    try {
      if(inputFields!=null){
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/admistrator/deleteadmin/${inputFields.id}/`)
        fetchCredentials()
        setInputFields({
          "username": "",
          "password": "",
          "privilege": false,
          "mailid": "",
        })
        setEnabled(false)
        alert(`Deleted sucessfully ${response}`)
      }else{
        alert('Selected patient does not exist')
      }
    }catch (error){
      alert('Unable to Delete');
    }
  }

  const validate = (inputFields) => {
    if(inputFields.username === "" || inputFields.password === "" || inputFields.mailid ===""){
      return false
    }else{
      return true
    }
  }

  const handleSubmitBtn = async (e) => {
    e.preventDefault()
    if(validate(inputFields)){
      try{
        // console.log(inputFields);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/admistrator/createadmin/`,inputFields)
        fetchCredentials()
        setInputFields({
          "username": "",
          "password": "",
          "privilege": false,
          "mailid": "",
        })
        alert('Submitted')
      }catch(error){
        console.log(`Error: ${error}`);
      }
    }else{
      alert(`Empty input fields found`)
    }
  }

  return (
    <React.Fragment>
      <div className='container-fluid' style={{maxWidth:'1600px',minHeight:'490px',height:'100%',maxHeight:'700px'}}>
        <div className='row input-field-align pt-5'>
          <div className='col-md-5 mb-5'>
            <div className='patient-table'>
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Previleges</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {credentials && credentials.map((index,key) => (
                    <tr key={key} style={{borderBottom:'1px solid black'}}>
                      <td>{index['username']}</td>
                      <td>{index['privilege'] ? <p>Admin</p>: <p>User</p> }</td>
                      <td><button onClick={() => handleEditBtn(index)} className='admin-view-button'>View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='update-package-form col-md-5 mb-5'>
            <div className=''>
                    <h2>Add or Delete user</h2>
                    <form>    
                        <div>
                            <label htmlFor='username'>Username&ensp;&ensp;
                            <input id='username' name='username' className='package-input-field' value={inputFields['username']} onChange={handleInputChange}></input>
                            </label>
                        </div>
                        <div>
                           <label htmlFor='password'>Password&ensp;&ensp;
                           <input id='password' name='password' className='package-input-field' value={inputFields['password']} type='password' onChange={handleInputChange}></input>
                           </label>
                        </div>
                        <div>
                           <label htmlFor='previlege'>Previlege&ensp;&ensp;
                           <input 
                           type='checkbox' 
                           name='privilege' 
                           checked={inputFields.privilege} onChange={handleInputChange}></input>
                           {/* <select id='previlege' name='privilege' className='package-input-field' value={inputFields.privilege} type='checkbox' onChange={handleInputChange}>
                              <option defaultChecked></option>
                              <option value={false}>User</option>
                              <option value={true}>Admin</option>
                           </select> */}
                           </label>

                           {/* <input type='checkbox' checked={checkbox} onChange={(e) => {setCheckbox(e.target.checked)}}></input>
                           {console.log(`CHeckbox: ${checkbox}`)} */}
                        </div>
                        <div>
                           <label htmlFor='mailid'>Mail ID&ensp;&ensp;
                           <input id='mailid' name='mailid' className='package-input-field' value={inputFields['mailid']} type='mail' onChange={handleInputChange}></input>
                           </label>
                        </div>
                        <div className='input-field-align mt-3 mb-5' style={{justifyContent:'space-evenly'}}>
                          <button onClick={handleDeleteBtn}>Delete</button>
                          <button onClick={handleSubmitBtn} disabled={enabled}>Submit</button>
                          <button onClick={handleClearBtn}>Clear</button>
                        </div>
                    </form>
                </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminEditUser
