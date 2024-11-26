import React , {useContext} from 'react'
import "../css/component css/Navbar.css"
import { MyContext } from '../App'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const{login , setLogin} = useContext(MyContext)
  const deleteAuthentication = () => {
    localStorage.removeItem('token'); // Remove token
    setLogin(false); // Reset login state
    window.location.href = "/";
  };
  
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to="/">
        <img 
      src="https://folder.chatgram.co.in/Clusterlogo.png" 
      alt="ClusterShield Logo" 
      style={{ width: '170px', height: 'auto' }}  // Adjust the width as needed
      
    />
  </Link>
      </div>
      <div className="navbar-right">
        {!login && <Link to="/login" className="btn-a filled-btn">Sign In</Link>}
        {login && <Link to="/dashboard" className="btn-a filled-btn">Dashboard</Link>}
        {login && <button className="btn-a" onClick={deleteAuthentication}>Logout</button>}
      </div>
    </div>
  )
}
