import axios from 'axios';
import React, { useState } from 'react'

const AddUser = () => {
  const[name , setName] = useState();
  const [email ,setEmail ] =useState();
  const [img , setImg] =useState(null);
  
  const nameHandler = (e) =>{
     setName(e.target.value);
  }
  const emailHandler = (e) =>{
    setEmail(e.target.value);
  }
  const imgHandler = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  }
  var date = new Date().toLocaleString();
  const addHandler = () =>{
      const addUser = async () =>{
        const newUser = {
          fname : name,
          username : email,
          avatar : img,
          time : date
          
        }
         await axios.post('http://localhost:3005/posts' ,newUser)
      }
      addUser();
      alert("User Added!")
  }
  return (
    <div className='container'>
      <h1 className='text-center my-3'>Add New User</h1>
     <div className="box w-50 mx-auto my-3">
        <h5>Name</h5>
        <input onChange={nameHandler} type="text" placeholder='Enter Name...' className='form-control' />
     </div>
      <div className="w-50 mx-auto my-3">
        <h5>Email</h5>
        <input onChange={emailHandler} type="email" placeholder='Enter Email...' className='form-control' />
      </div>
      <div className="w-50 mx-auto my-3">
        <h5>Avatar Photo</h5>
        <input type="file"  onChange={imgHandler} className='form-control' />
        {
          img ? <><h5 className='my-4'>This will be your avatar picture:</h5><img style={{"borderRadius": "100%" ,"width":"100px" , "height":"100px" , "objectFit":"cover"}} src={img} alt="" /></> : ""
        }
        <button onClick={addHandler} className='btn btn-success w-100 mt-4'>Add</button>
      </div>
    </div>
  )
}

export default AddUser