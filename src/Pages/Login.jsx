import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [name ,setName] = useState();
    const [passw ,setPassw] = useState();
    const navigate = useNavigate(); 

    var adminName = "admin"
    var password = "admin123"
    const nameHandler = (e) =>{
        setName(e.target.value)
    }
    const passwHandler = (e) => {
        setPassw(e.target.value)
    }
    const logHandler = () =>{
        if (name === adminName && password === passw) {
            navigate("/adminPanel");

        }
        else
        {
            toast.error("Daxil edilən şifrə yanlışdır !", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }
  return (
    <div>
        <h3 style={{"textAlign":"center"}} className='my-4'>Admin Panel Login</h3>
        <div className="box w-50 mx-auto">
            <h5>Enter Admin Username</h5>
            <input onChange={nameHandler} placeholder='Enter Admin Username ...' className='form-control w-100 my-4' type="text" />
        </div>
        <div  className="box w-50 mx-auto">
            <h5>Enter Admin Password</h5>
            <input onChange={passwHandler} className='form-control w-100 my-4' placeholder='Enter Admin Password ...' type="password" />
        </div>
            <div style={{"textAlign":"center"}}>
                <button onClick={logHandler} className='btn btn-success w-25 '>Log In</button>
                <ToastContainer /> 
            </div>
    </div>
    
  )
}

export default Login