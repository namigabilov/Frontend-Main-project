import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link } from 'react-router-dom';
import { AiFillDelete ,AiFillEdit } from 'react-icons/ai'


const override: CSSProperties = {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
};

const Home = () => {
  const [users,setUser]= useState([]);
  const [loading, setLoading] = useState(true);
  const [value ,setValue] =useState("");
  useEffect(() => {
        const getUsers = async () =>{
            const response = await axios.get('http://localhost:3005/posts')
            setUser(response.data);
            setLoading(false);
        }
        getUsers();
    },[])
    const changeHandler = (e) =>{
      setValue(e.target.value);
    }
   const filteredUsers = users.filter(user => user.fname.toLowerCase().includes(value.toLocaleLowerCase()));
  return (
    <div>
      <input onChange={changeHandler} type="text" className='form-control w-50 mx-auto my-3 'placeholder='Search...' />  
      <div className="container">
      {
        
        loading ?  <PropagateLoader
        color={"aqua"}
        loading={loading}
        cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />: 
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope='col'>Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Creation Time</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
         {
          filteredUsers.map(user => {
            return(
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <th scope='row'><img src={user.avatar} alt="" /></th>
                <td>{user.fname}</td>
                <td>{user.time}</td>
                <td>{user.username}</td>
                
              </tr>
            )
          })
         }
        </tbody>
      </table>
      
       }
      </div>

    </div>
  )
}

export default Home

