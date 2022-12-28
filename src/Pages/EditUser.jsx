import { useState ,useEffect ,React} from "react"
import axios from 'axios';
import { useLocation } from "react-router-dom";

const EditUser = () => {
    const location = useLocation();
    const [users,setUser]= useState([]);
    const [name ,setName] = useState();
    const [email ,setEmail] = useState();
    const [img , setImg] =useState(null);

  const imgHandler = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  }
    const nameHandler = (e) =>{
        setName(e.target.value)
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
    
    useEffect(() => {
        const getUsers = async () =>{
            const response = await axios.get('http://localhost:3005/posts')
            setUser(response.data);
        }
        getUsers();
    },[])

    const editHandler = () =>{
        axios.put(`http://localhost:3005/posts/${location.state.id}`, {
            fname: name,
            username: email,
            avatar : img
        })
        alert('User info has been Changed !')
        window.location.reload()
    }
  return (
    <div className='container'>
            <h1 className='text-center my-3'>Edit User</h1>
            <h3 className='text-center my-3'>User Info </h3>
            {
                users && users.map(user => {
                    if (user.id === location.state.id) {
                        return(
                            <div className=" text-center my-3">
                                <img src={user.avatar} alt="" />
                                <h6>Name : {user.fname}</h6>
                                <h6>Email : {user.username}</h6>
                            </div>
                        )
                    }
                    
                })
            }
        <div className="box w-50 mx-auto my-3">
            <h5>New Name</h5>
            <input onChange={nameHandler} type="text" placeholder='Enter Name...' className='form-control' />
        </div>
        
        <div className="w-50 mx-auto my-3">
            <h5>New Email</h5>
            <input onChange={emailHandler} type="email" placeholder='Enter Email...' className='form-control' />
        </div>
        <div className="w-50 mx-auto my-3">
        <h5>Avatar Photo</h5>
        <input type="file"  onChange={imgHandler} className='form-control' />
        {
            img ? <><h5 className='my-4'>This will be your avatar picture:</h5><img style={{"borderRadius": "100%" ,"width":"100px" , "height":"100px" , "objectFit":"contain"}} src={img} alt="" /></> : ""
        }
        <button onClick={editHandler} className='btn btn-success w-100 mt-4'>Change</button>
      </div>
    </div>
  )
}

export default EditUser