import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MyAccount from "./pages/MyAccount";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import InstructorDetailsPage from './pages/InstructorDetailsPage';
import InstructorsPage from './pages/InstructorsPage';
// Add more pages later

function App() {

const instructors = [
  {
    id: 1,
    name: 'Edward Norton',
    role: 'UI/UX Designer & Developer',
    coursesCount: 12,
    studentsCount: 4500,
    rating: 4.9,
    bio: 'Edward is a seasoned UI/UX designer with over a decade of experience, creating intuitive, beautiful interfaces for web and mobile platforms. He focuses on user-first principles and teaches hands-on design.',
    email: 'edward@example.com',
    phone: '+91 98765 43210',
    address: '1234 Design St, Mumbai, India',
    image: 'https://demo.edublink.co/wp-content/uploads/2023/07/team-18.jpg',
    courseIds: [1, 2, 3]
  },
  // ... more instructors
];
  const courses = [
    {
      id: 1,
      title: "Starting SEO...",
      image:
        "https://demo.edublink.co/wp-content/uploads/2023/11/course-83-590x430.jpg",
      duration: "15 weeks",
      level: "Beginner",
      description: "Lorem ipsum...",
      rating: "5.0",
      lessons: "11",
      students: "227",
      oldPrice: "$35",
      price: "$30",
    },
    {
      id: 2,
      title: "Starting SEO...",
      image:
        "https://demo.edublink.co/wp-content/uploads/2023/11/course-83-590x430.jpg",
      duration: "15 weeks",
      level: "Beginner",
      description: "Lorem ipsum...",
      rating: "5.0",
      lessons: "11",
      students: "227",
      oldPrice: "$35",
      price: "$30",
    },
    // Add more course objects...
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses" element={<CoursesPage courses={courses} />} />
        <Route path="/courses/:id" element={<CourseDetailsPage courses={courses} />} />

        <Route
    path="/instructor-details/:id"
    element={
      <InstructorDetailsPage instructors={instructors} courses={courses} />
    }
  />

   <Route
    path="/instructors"
    element={<InstructorsPage instructors={instructors} />}
  />

      </Routes>
    </Router>
  );
}
export default App;
