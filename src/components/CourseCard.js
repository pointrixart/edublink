import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

export default function CourseCard({ course }) {
  return (
     <Link to={`/courses/${course.id}`} className="course-card-link">
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-img" />
      <div className="course-info">
        <div className="info-top">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <h3>{course.title}</h3>
        <p className="description">{course.description}</p>
        <div className="stats">
          <span>({course.rating}/ ★)</span>
          <span>{course.lessons} Lessons</span>
          <span>{course.students} Students</span>
        </div>
        <div className="price">
          {course.oldPrice && <span className="old">{course.oldPrice}</span>}
          <span className="new">{course.price}</span>
        </div>
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </div>
    </Link>
  );
}
