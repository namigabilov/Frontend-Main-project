import './App.css';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import AdminPanel from './Pages/AdminPaanel'
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addUser' element={<AddUser/>} />
          <Route path='/adminPanel'  element={<AdminPanel />}  />
          <Route path='/editUser' element={<EditUser/>} />
          <Route path='/login' element= {<Login />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
