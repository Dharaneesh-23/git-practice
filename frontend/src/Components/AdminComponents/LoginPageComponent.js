import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPageComponent() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [credentials,setCredentials] = useState();

    useEffect(()=>{
        fetchCredentials()
    },[]);

    const fetchCredentials = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admistrator/listadmin/`);
          setCredentials(response.data);
        } catch (error) {
          alert("Cloudn't fetch data from backend")
        }
      };
  
    const handleSubmit = (e) => {
      // Handle login logic here
      e.preventDefault()
      if(credentials){
          const user = credentials.find(user=>(user.username === email || user.mailid === email) && user.password === password)
        //   console.log(user,email,password);
          if(user){
            if(user.privilege){    
                navigate('/administration/'+user.username)
                localStorage.setItem('token','admin')
            }else if(!user.privilege){
                navigate('/administration/'+user.username)
                localStorage.setItem('token','user')
            }
          }else{
            alert('Incorrect username password')
          }
      }
    };
    const handleUserName = (e) => {
        const value = e.target.value;
        setEmail(value);
    }
    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
  
    return (
        <React.Fragment>
            {/* <ComponentHeader cName='Adminstration'/> */}
            <div className='login-page'>
                <div className='login-container'>
                    <h2>Sign in</h2>
                    <form action='submit' onSubmit={handleSubmit}>    
                        <div style={{width:'200px'}}>
                            <label htmlFor='username'>Username
                            <input id='username' required onChange={handleUserName}></input>
                            </label>
                        </div>
                        <div>
                           <label htmlFor='password'>password
                           <input id='password' type='password' onChange={handlePassword} required></input>
                           </label>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginPageComponent
