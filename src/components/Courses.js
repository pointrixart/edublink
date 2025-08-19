import React from 'react';
import './Courses.css';
import CoursesPage from '../pages/CoursesPage';

const courseList = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    instructor: 'John Doe',
    price: '$99',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/11/course-83-590x430.jpg',
  },
  {
    id: 2,
    title: 'Graphic Design Mastery',
    instructor: 'Jane Smith',
    price: '$79',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/03/course-09-590x430.jpg',
  },
  {
    id: 3,
    title: 'Digital Marketing Basics',
    instructor: 'Emily Johnson',
    price: 'Free',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg',
  },
]; 

function Courses() {
  return (
    <section className="courses-section">
        <h3>Popluar Courses</h3>
      <h2 className='courses-h2'>Pick A Course To Get Started</h2>
      <div className="course-grid">
        {courseList.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p className="price">{course.price}</p>
              <button>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-button">
          <div className="button-align">
            Browse More Courses
            <span><i class="fa">&#xf178;</i></span>
          </div>
        </button>
    </section>
  );
}
export default Courses;
