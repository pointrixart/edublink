import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Alice Williams',
    role: 'UX Designer',
    feedback: 'EduBlink has changed my career. The courses are very practical and easy to follow.',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-04.jpg',
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    role: 'Frontend Developer',
    feedback: 'Best platform for learning modern web development. Highly recommend!',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-04.jpg',
  },
  {
    id: 3,
    name: 'Fatima Noor',
    role: 'Marketing Expert',
    feedback: 'The instructors are top-notch and the content is always updated.',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-04.jpg',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Learners Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <p className="feedback">“{testimonial.feedback}”</p>
              <h4>{testimonial.name}</h4>
              <span className="role">{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
