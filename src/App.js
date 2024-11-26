import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { createContext, useEffect, useState } from 'react';
import PaymentPage from './pages/PaymentPage';

export const MyContext = createContext();

function App() {
  const[haveSubscription , setHaveSubscription] = useState(false);
  const [login, setLogin] = useState(false);
  const [userId , setUserId] = useState("nono")

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogin(true);
    }
  }, []);

  return (
    <MyContext.Provider value={{ login, setLogin,userId,setUserId,setHaveSubscription,haveSubscription }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            {login ? (
              <Route path='/login' element={<HomePage />} />
            ) : (
              <Route path='/login' element={<LoginPage />} />
            )}
            {login ? (
              <Route path='/dashboard' element={<DashboardPage />} />
            ) : (
              <Route path='/dashboard' element={<LoginPage />} />
            )}
            {haveSubscription ? <Route path='/payment' element={<HomePage />} /> :<Route path='/payment' element={<PaymentPage/>} />}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;

