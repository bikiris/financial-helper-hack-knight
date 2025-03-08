import CourseContainer from "../components/CourseContainer";

const courses = [
  {"name": "Financial Modeling & Valuation", 
    "description": "Learn to build robust financial models for company valuation, forecasting, and investment analysis.", 
    "icon": "public/image.png", 
    "internalURL": "/courses/1",
    "locked": true
  },
  {
    "name": "Investment Banking Fundamentals",
    "description": "Understand the basics of investment banking, M&A, and corporate finance strategies.",
    "icon": "public/finance2.png",
    "internalURL": "/courses/2",
    "locked": false
  },
  {
    "name": "Advanced Corporate Finance",
    "description": "Explore advanced corporate finance topics, capital  structure, and risk management.",
    "icon": "public/locked.png",
    "internalURL": "/course/3",
    "locked": true
  },
  {
    "name": "Financial Risk Management",
    "description": "Understand risk management frameworks, derivatives, and hedging strategies.",
    "icon": "public/locked.png",
    "internalURL": "#",
    "locked": true
  }

];

const Courses = () => {
  return (
    <div className="m-8">
      {courses.map( course => <CourseContainer 
      key = {course.internalURL}
      imageURL={course.icon} 
      title={course.name} 
      description={course.description} 
      internalURL={course.internalURL}
      locked ={course.locked}
      /> )}
    </div>
  );
};


export default Courses;