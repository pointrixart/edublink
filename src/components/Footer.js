// import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';
// import myImage from "../assests/logo-dark.png";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-col">
//           <img src={myImage}></img>
//           <p>Your trusted platform to learn, grow, and succeed online.</p>
//         </div>

//         <div className="footer-col">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/courses">Courses</Link></li>
//             <li><Link to="/instructors">Instructors</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Contact</h4>
//           <p>Email: support@edublink.co</p>
//           <p>Phone: +91 98765 43210</p>
//           <p>Address: Delhi, India</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} EduBlink. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Logo & About */}
//         <div className="footer-section">
//           <div className="footer-logo">
//             <img src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-dark.png" alt="EduBlink Logo" />
//             {/* <span className="brand">EduBlink</span> */}
//           </div>
//           <p className="footer-text">
//             Lorem ipsum dolor amet consecto adi pisicing elit sed eiusmod tempor
//             incidid unt labore dolore.
//           </p>
//           <p><strong>Add:</strong> 70-80 Upper St Norwich NR2</p>
//           <p><strong>Call:</strong> +01 123 5641 231</p>
//           <p><strong>Email:</strong> info@edublink.co</p>
//         </div>

//         {/* Online Platform */}
//         <div className="footer-section">
//           <h4>Online Platform</h4>
//           <ul>
//             <li>About</li>
//             <li>Course</li>
//             <li>Instructor</li>
//             <li>Events</li>
//             <li>Instructor Details</li>
//             <li>Purchase Guide</li>
//           </ul>
//         </div>

//         {/* Links */}
//         <div className="footer-section">
//           <h4>Links</h4>
//           <ul>
//             <li>Contact Us</li>
//             <li>Gallery</li>
//             <li>News & Articles</li>
//             <li>FAQ’s</li>
//             <li>Coming Soon</li>
//             <li>Sign In/Registration</li>
//           </ul>
//         </div>

//         {/* Contacts */}
//         <div className="footer-section">
//           <h4>Contacts</h4>
//           <p>Enter your email address to register to our newsletter subscription</p>
//           <div className="subscribe">
//             <input type="email" placeholder="Your email" />
//             <button>Subscribe →</button>
//           </div>
//           <div className="socials">
//             <a href="#"><i className="fab fa-facebook"></i></a>
//             <a href="#"><i className="fab fa-linkedin"></i></a>
//             <a href="#"><i className="fab fa-instagram"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//             <a href="#"><i className="fab fa-youtube"></i></a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>
//           Copyright 2025 <span className="brand">EduBlink</span> | Developed By 
//           <span className="dev"> DevsBlink</span>. All Rights Reserved
//         </p>
//       </div>

//       <div className="scroll-top">
//         <a href="#top">↑</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <div className="footer-logo">
         <img src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-dark.png" alt="EduBlink Logo" />
            
          </div>
          <p className="footer-text">
            Lorem ipsum dolor amet consecto adi pisicing elit sed eiusmod tempor
            incidid unt labore dolore.
          </p>
          <p><strong>Add:</strong> 70-80 Upper St Norwich NR2</p>
          <p><strong>Call:</strong> +01 123 5641 231</p>
          <p><strong>Email:</strong> info@edublink.co</p>
        </div>

        {/* Online Platform */}
        <div className="footer-section">
          <h4>Online Platform</h4>
          <ul>
            <li>About</li>
            <li>Course</li>
            <li>Instructor</li>
            <li>Events</li>
            <li>Instructor Details</li>
            <li>Purchase Guide</li>
          </ul>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>Contact Us</li>
            <li>Gallery</li>
            <li>News & Articles</li>
            <li>FAQ’s</li>
            <li>Coming Soon</li>
            <li>Sign In/Registration</li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>Enter your email address to register to our newsletter subscription</p>
          <div className="subscribe">
            <input type="email" placeholder="Your email" />
            <button>Subscribe →</button>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>
          Copyright 2025 <span className="brand">EduBlink</span> | Developed By 
          <span className="dev"> DevsBlink</span>. All Rights Reserved
        </p>
      </div>

      {/* Scroll to Top */}
      {isVisible && (
        <div className="scroll-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </footer>
  );
};

export default Footer;
