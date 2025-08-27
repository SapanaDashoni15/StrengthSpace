import React from 'react';
import { ToastContainer } from 'react-tostify';
import 'react-toastify/dist/ReactTostify.css';
import {BrowserRouter as Router} from 'react-router-dom';

const app = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

