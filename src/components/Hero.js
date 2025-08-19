// import React from "react";
// import "./Hero.css";

// function Hero() {
//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <h1>
//           Build Your
//           <br></br>
//           <a className="hero-heading">Programming</a> Skill
//           <br></br>with Edublink
//         </h1>
//         <p className="hero-para">
//           Excepteur sint occaecat cupidatat non proident sunt in culpa qui
//           officia deserunt mollit.
//         </p>
//         <button className="hero-button">
//           <div className="button-align">
//             Find Courses 
//             <span><i class="fa">&#xf178;</i></span>
//           </div>
//         </button>
//       </div>
//     </section>
//   );
// }
// export default Hero;

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Build Your <br />
          <span className="hero-heading">Programming</span> Skill <br />
          with EduBlink
        </h1>
        <p className="hero-para">
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit.
        </p>
        <button className="hero-button">
          <div className="button-align">
            Find Courses
            <span><i className="fa fa-long-arrow-right"></i></span>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;

