import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import PreLogin from './pages/PreLogin/PreLogin';
import { useCallback, useEffect, useState } from 'react';
import Login from './pages/Login/Login';
import Store from './pages/Store/Store';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import axios from 'axios';
import ProductDetail from './pages/ProductDetails/ProductDetail';
import NotFound from './pages/NotFound/404-not-found';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  const [user, setUser] = useState<any[]>([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(accessToken == null){
    // navigate('/prelog', {replace: true})
  }

  const requestBody = {
    pageSize: 3
}

const [schedulesData, setSchedulesData] = useState([]);
const[boolean, setBoolean] = useState(false);

const getSchedules = useCallback(async () =>{
  const response = await axios.post('http://localhost:3000/api/v1/schedules/', requestBody)
  .then((res) => {
      if (res.status == 200){
          setSchedulesData(res.data)
          console.log(res.data)
          setBoolean(true)
      }
      }).catch((err) => {
          console.log(err)
      })
},[boolean])

    const [playerData, setPlayerData] = useState([]);
    const getPlayer = useCallback(async () =>{
    const response = await axios.post('http://localhost:3000/api/v1/playeres/', {pageSize: 6})
    .then((res) => {
        if (res.status == 200){
          setPlayerData(res.data)
            console.log(res.data)
            setBoolean(true)
        }
        }).catch((err) => {
            console.log(err)
        })
    },[])


const [productsData, setProductData] = useState([]);
const getProduct = useCallback(async () =>{
  const response = await axios.post('http://localhost:3000/api/v1/products/', {pageNumber: 0})
  .then((res) => {
      if (res.status == 200){
          setProductData(res.data)
          console.log(res.data)
          setBoolean(true)
      }
      }).catch((err) => {
        setBoolean(true)
          console.log(err)
      })
},[])


const [newsData, setNewsData] = useState([]);
const getNews = useCallback(async () =>{
  const response = await axios.post('http://localhost:3000/api/v1/newses/', {pageNumber: 0})
  .then((res) => {
      if (res.status == 200){
          setNewsData(res.data)
          console.log(res.data)
          setBoolean(true)
      }
      }).catch((err) => {
        setBoolean(true)
          console.log(err)
      })
},[])

useEffect(() => {
  getSchedules();
  getPlayer();
  getProduct();
  getNews();
}, []);

  return (
      <div className='App'>
      <Routes>
        <Route path='/' element={<Home newsData={newsData} playerData={playerData} productsData={productsData} setProductData={setProductData} datas={schedulesData} setDatas={setSchedulesData} />} />
        <Route path='/prelog' element={<PreLogin username={user} setUsername={setUser} />} />
        <Route path='/login' element={<Login username={user} />} />
        <Route path='/store' element={<Store productsData={productsData} setProductData={setProductData} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:id' element={<ProductDetail productsData={productsData} setProductData={setProductData} />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
  );
}

export default App;
