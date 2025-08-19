import React from 'react';
import InstructorCard from '../components/InstructorCard';
import './InstructorsPage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function InstructorsPage({ instructors }) {
  return (
    <>
    <Header/>
    <div className="instructors-container">
      <h1 className="page-title">Our Instructors</h1>
      <div className="instructors-grid">
        {instructors.map(ins => (
          <InstructorCard key={ins.id} instructor={ins} />
        ))}
      </div>
    </div>
    <Footer/>
     </>
  );
 
}
