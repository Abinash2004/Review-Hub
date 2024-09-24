import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import PriceAlerts from './components/PriceAlerts';
import WriteReview from './components/WriteReview';
import Wishlist from './components/Wishlist';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
 
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route exact path="/categories" element={<Categories/>} />
            <Route exact path="/alerts" element={<PriceAlerts/>} />
            <Route exact path="/write" element={<WriteReview/>} />
            <Route exact path="/wishlist"  element={<Wishlist/>} />
            <Route exact path="/signin"  element={<SignIn/>} />
            <Route exact path="/signup"  element={<SignUp/>} />
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;