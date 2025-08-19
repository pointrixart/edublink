import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetailsPage.css";

export default function CourseDetailsPage({ courses }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="course-details">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <img src={course.image} alt={course.title} className="details-img" />
      <div className="details-info">
        <h1>{course.title}</h1>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Rating:</strong> {course.rating} ★</p>
        <p><strong>Lessons:</strong> {course.lessons}</p>
        <p><strong>Students:</strong> {course.students}</p>
        <p className="full-description">{course.description}</p>
        <div className="price">
          {course.oldPrice && <span className="old">{course.oldPrice}</span>}
          <span className="new">{course.price}</span>
        </div>
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </div>
  );
}
