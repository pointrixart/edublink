import React from 'react';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import Instructors from '../components/Instructor';
import Footer from '../components/Footer';
import Features from '../components/Features';
import MyAccount from './MyAccount';


// Add other sections like Testimonials, Instructors later

function Home() {
  return (
    <>
     
      <Header />
      <Hero />
      <Features/>
      <Courses/>
      <Testimonials />
      <Instructors />
      <MyAccount/>
      <Footer />
    </>
  );
}


export default Home;
