import React from 'react';
import './Instructor.css';

const instructors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Data Science Expert',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/team-01.webp',
  },
  {
    id: 2,
    name: 'Michael Lee',
    specialty: 'Full Stack Developer',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/team-02.webp',
  },
  {
    id: 3,
    name: 'Anita Deshmukh',
    specialty: 'UI/UX Specialist',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/team-03.webp',
  },
];

function Instructors() {
  return (
    <section className="instructors-section">
        <h3>Instructors</h3>
      <h2>Meet Our Instructors</h2>
      <div className="instructor-grid">
        {instructors.map((instructor) => (
          <div className="instructor-card" key={instructor.id}>
            <img src={instructor.image} alt={instructor.name} />
            <h4>{instructor.name}</h4>
            <p>{instructor.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Instructors;
