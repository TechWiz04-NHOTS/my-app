import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import PreLogin from './pages/PreLogin/PreLogin';
import { useState } from 'react';
import Login from './pages/Login/Login';
import Store from './pages/Store/Store';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  const [email, setEmail] = useState<any[]>([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(accessToken == null){
    // navigate('/prelog', {replace: true})
  }

  return (
      <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prelog' element={<PreLogin emailName={email} setEmailName={setEmail} />} />
        <Route path='/login' element={<Login emailName={email} />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      </div>
  );
}

export default App;
