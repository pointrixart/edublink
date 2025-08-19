import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import './CoursesPage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Replace with your own data source or API
    setCourses([
      {
        id: 1,
        image: 'https://demo.edublink.co/wp-content/uploads/2023/11/course-83-590x430.jpg',
        duration: '15 weeks',
        level: 'Beginner',
        title: 'Starting SEO as your Home Based Business',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',
        rating: '5.0',
        lessons: '11',
        students: '227',
        oldPrice: '$35',
        price: '$30'
      },
      {
        id: 2,
        image: 'https://demo.edublink.co/wp-content/uploads/2023/03/course-08-590x430.jpg',
        duration: '15 weeks',
        level: 'Beginner',
        title: 'Starting SEO as your Home Based Business',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',
        rating: '5.0',
        lessons: '11',
        students: '227',
        oldPrice: '$35',
        price: '$30'
      },
      {
        id: 3,
        image: 'https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg',
        duration: '15 weeks',
        level: 'Beginner',
        title: 'Starting SEO as your Home Based Business',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',
        rating: '5.0',
        lessons: '11',
        students: '227',
        oldPrice: '$35',
        price: '$30'
      },
      // ... repeat for other courses 2–9 ...
    ]);
  }, []);

  return (
    <>
    <Header/>
    <section>
    <div className="courses-page">
      <h2>All Courses</h2>
      <div className="courses-grid">
        {courses.map(course => <CourseCard key={course.id} course={course} />)}
      </div>
      <div className="pagination">
        <button disabled>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
    </section>
    <Footer/>
    </>
  );
}


