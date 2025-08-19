import React from 'react';
import { Link } from 'react-router-dom';
import './InstructorCard.css';

export default function InstructorCard({ instructor }) {
  return (
    <Link to={`/instructor-details/${instructor.id}`} className="instructor-card-link">
      <div className="instructor-card">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="instructor-photo"
        />
        <div className="instructor-details">
          <h3 className="instructor-name">{instructor.name}</h3>
          <p className="instructor-role">{instructor.role}</p>
          <p className="instructor-snippet">{instructor.snippet}</p>
        </div>
      </div>
    </Link>
  );
}
