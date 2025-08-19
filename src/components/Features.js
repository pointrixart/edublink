import React from 'react';
import './Features.css';

const instructors = [
  {
    id: 1,
    name: 'Web Development',
    specialty: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor enim minim veniam quis.',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/featrues-img-01.webp',
  },
  {
    id: 2,
    name: 'Top Instructors',
    specialty: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor enim minim veniam quis.',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/featrues-img-02.webp',
  },
  {
    id: 3,
    name: 'Online Certificates',
    specialty: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor enim minim veniam quis.',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/featrues-img-03.webp' ,
  },
];

function Features() {
  return (
    <section className="instructors-section">
        <h3>FEATURES</h3>
      <h2>Emerging Technologies and Trends in
Software Development</h2>
      <div className="instructor-grid">
        {instructors.map((instructor) => (
          <div className="instructor-card" key={instructor.id}>
            <h4>{instructor.name}</h4>
            <p>{instructor.specialty}</p>
             <img src={instructor.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
