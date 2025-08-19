import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import './InstructorDetailsPage.css';

export default function InstructorDetailsPage({ instructors, courses }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const instructor = instructors.find(ins => ins.id === parseInt(id));

  if (!instructor) return <p>Instructor not found.</p>;

  const myCourses = courses.filter(c => instructor.courseIds.includes(c.id));

  return (
    <div className="instructor-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="instructor-header">
        <div className="photo-wrapper">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="instructor-photo"
          />
        </div>
        <div className="instructor-info">
          <h1 className="instructor-name">{instructor.name}</h1>
          <p className="instructor-role">{instructor.role}</p>
          <div className="instructor-stats">
            <div>
              <span className="stat-number">{instructor.coursesCount}</span>
              <span className="stat-label">Courses</span>
            </div>
            <div>
              <span className="stat-number">{instructor.studentsCount}</span>
              <span className="stat-label">Students</span>
            </div>
            <div>
              <span className="stat-number">{instructor.rating}</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
          <h2 className="section-heading">About</h2>
          <p className="instructor-bio">{instructor.bio}</p>
          <h2 className="section-heading">Contact Info</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> {instructor.email}</p>
            <p><strong>Phone:</strong> {instructor.phone}</p>
            {instructor.address && <p><strong>Address:</strong> {instructor.address}</p>}
          </div>
        </div>
      </div>

      <section className="courses-section">
        <h2 className="section-heading">Courses by {instructor.name}</h2>
        <div className="courses-grid">
          {myCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
