// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import myImage from "../assests/logo-dark.png";

// function Header() {
//   return (
//     <header className="header">
//       <div className="container">
//         <h2 className="logo">
//           <img src={myImage}></img>
//         </h2>
//         <nav>
//           <ul className="nav-links">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/courses">Courses</Link>
//             </li>
//             <li>
//               <Link to="/instructors">Instructors</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//         <h2 style={{display: "flex" , gap: "30px" }}>
//           <i style={{color: 'black' }} class="fa fa-search" aria-hidden="true"></i>
//           <i  style={{color: 'black' }} class="fa">&#xf07a;</i>
//         </h2>
//         <button className="hero-button">
//           <div className="button-align">
//             Try For Free
//           <span><i class="fa">&#xf178;</i></span>
//           </div>
//         </button>
//       </div>
//     </header>
//   );
// }
// export default Header;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <h2 className="logo">
          <img src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-dark.png" alt="EduBlink Logo" />
        </h2>

        {/* Hamburger Icon (Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
            <li><Link to="/instructors" onClick={toggleMenu}>Instructors</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* Icons (Hidden on mobile inside nav) */}
        <div className="nav-icons">
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>

        {/* CTA Button (Hidden on mobile inside nav) */}
        <button className="hero-button">
          <div className="button-align">
            Try For Free
            <span><i className="fa fa-long-arrow-right"></i></span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
