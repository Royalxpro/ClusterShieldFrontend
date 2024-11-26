import React, { useEffect, useState } from 'react'
import "../css/page css/DashboardPage.css"
import "../css/responsiveness/DashboardPage.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function DashboardPage() {
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  useEffect(() => {
    window.scroll(0,0);
    getSubscriptionStatus();
  },[])

  const getSubscriptionStatus = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`https://clustershield-backend.onrender.com/subscription/status/${userId}`);

      if (response.status === 200) {
        console.log('Subscription Status:', response.data.status);
        // console.log(response.data.data);
        setSubscriptionStatus(response.data.data.status);
        setIsSubscriptionActive(response.data.data.isActive);
      } else {
        console.error('Server response error', response);
      }
    } catch (error) {
      console.error('Error getting subscription status', error);
    }
  }
  const handleCopyText = () => {
    navigator.clipboard.writeText("CsCore-5ouWsmy2OKTOBVKOuub5I3jjtqz4NPiM6iviYMSUFtYILkHv") 
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
        });
};

  return (
    <div className='dashboardPage'>
      <h3>Mange API Key</h3>
      <p>With an active plan, your API key is just a click away. Copy it now and implement it into your app for secure and efficient integration. Start building with the power of ClusterShield</p>
      <table>
        <tr>
            <th>Name</th>
            <th>API KEY</th>
            <th>Subscription Status</th>
            <th>Copy</th>
        </tr>
        <tr>
            <td>Secured</td>
            {isSubscriptionActive?
            <>
            <td>CsCore-5ouWsmy2OKTOBVKOuub5I3jjtqz4NPiM6iviYMSUFtYILkHv</td>
            </>
            :<>
            <td>sk-5ouW*******************************************</td>
            </>}
            <td>{subscriptionStatus}</td>
            <td>
              {
                isSubscriptionActive?
                <button className="btn-a filled-btn" onClick={handleCopyText}>Copy</button>
                :
                <Link to='/payment' className="btn-a filled-btn" disabled>Buy</Link>
              }
            </td>
        </tr>
      </table>
      <p>Treat your API key like a password—never share it publicly or with anyone. If you suspect any suspicious activity, regenerate your API key instantly</p>
    </div>
  )
}
