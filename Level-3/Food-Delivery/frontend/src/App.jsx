// import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage"
import QualityRestaurants from "./pages/QualityRestaurants/QualitRestaurant";
import AffordablePrices from "./pages/AffordablePage/AffordablePrices";


const App = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
    {loading ? ( 
      <Loader />
    ): (
  
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path='/category/:categoryName' element={<CategoryPage/>} />
          <Route path='/deliverypage' element={<DeliveryPage/>} />
          <Route path='/QualityRestaurants' element={<QualityRestaurants/>} />
          <Route path='/Affordable' element={<AffordablePrices/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )};
  </>
  );
}

export default App;
