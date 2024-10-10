import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import WriteReview from './components/Pages/WriteReview';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import Footer from './components/Footer';
import { AuthProvider } from './Context/AuthContext';
import { SearchProvider } from './Context/SearchContext';
import { ReviewProvider } from './Context/ReviewContext';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ProductProvider } from './Context/ProductContext';
import UserReview from './components/Pages/UserReview';

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <SearchProvider>
            <ProductProvider>
              <ReviewProvider>
                <Navbar />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/write" element={<WriteReview />} />
                  <Route exact path="/userreview" element={<UserReview />} />
                  <Route exact path="/signin" element={<SignIn />} />
                  <Route exact path="/signup" element={<SignUp />} />
                </Routes>
                <Footer />
              </ReviewProvider>
            </ProductProvider>
          </SearchProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;