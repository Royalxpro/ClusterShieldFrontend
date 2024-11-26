import React , {useContext} from 'react'
import "../css/component css/Footer.css"
import { MyContext } from '../App'
import { Link } from 'react-router-dom'
export default function Footer() {
  const{login , setLogin} = useContext(MyContext)
  return (
    <div className='footer'>
      <div className="footer-column">
        <img 
          src="https://folder.chatgram.co.in/Clusterlogo.png" 
          alt="ClusterShield Logo" 
          style={{ width: '190px', height: 'auto' }}  
        />
        <p>Safeguard APIs, Simplify Security, and Automate Protection with ClusterShield.</p>
      </div>
      <div className="footer-column">
        <p>Important Links</p>
        {!login && <Link to="/login" className="btn-a filled-btn">Sign In</Link>}
        {login && <Link to="/dashboard" className="btn-a filled-btn">Dashboard</Link>}
      </div>
      <div className="footer-column">
        <p>Subscribe To Newsletter</p>
        <div className="input-box">
          <input type="email" className="input-field" placeholder='Enter Your Email'/>
          <a href="" className="btn-a filled-btn">Submit</a>
        </div>
      </div>
    </div>
  );
  
}
