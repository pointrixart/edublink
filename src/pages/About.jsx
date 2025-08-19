import React from 'react';
import './About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Header />
      <section className="about-page">
        <div className="about-container">
          <h2>About EduBlink</h2>
          <p className="intro">
            EduBlink is a modern learning platform designed to make online education more accessible and engaging.
          </p>

          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                To empower students, professionals, and lifelong learners by providing top-quality, affordable courses
                created by experienced instructors.
              </p>

              <h3>What Makes Us Unique?</h3>
              <ul>
                <li>✔ Expert-led Courses</li>
                <li>✔ Practical, Project-based Learning</li>
                <li>✔ Affordable and Accessible</li>
                <li>✔ Dedicated Support</li>
              </ul>
            </div>

            <div className="about-image">
              <img src="https://demo.edublink.co/wp-content/uploads/2023/07/about-11.webp" alt="About EduBlink" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default About;
