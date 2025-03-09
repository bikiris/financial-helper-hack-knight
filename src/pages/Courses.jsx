import CourseContainer from "../components/CourseContainer";

const courses = [
  {"name": "Financial Modeling & Valuation", 
    "description": "Learn to build robust financial models for company valuation, forecasting, and investment analysis.", 
    "icon": "public/image.png", 
    "internalURL": "https://www.udemy.com/course/beginner-to-pro-in-excel-financial-modeling-and-valuation/?couponCode=NVD20PMUS",
    "locked": false,
    "prereq": null
  },
  {
    "name": "Investment Banking Fundamentals",
    "description": "Understand the basics of investment banking, M&A, and corporate finance strategies.",
    "icon": "public/finance2.png",
    "internalURL": "/courses/2",
    "locked": true,
    "prereq":"Financial Modeling"
  },
  {
    "name": "Advanced Corporate Finance",
    "description": "Explore advanced corporate finance topics, capital  structure, and risk management.",
    "icon": "public/locked.png",
    "internalURL": "/course/3",
    "locked": true,
    "prereq": "Investment Banking Fundamentals"
  },
  {
    "name": "Financial Risk Management",
    "description": "Understand risk management frameworks, derivatives, and hedging strategies.",
    "icon": "public/locked.png",
    "internalURL": "#",
    "locked": true,
    "prereq": "Advanced Corporate Finance"
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
      prereq={course.prereq}
      /> )}
    </div>
  );
};


export default Courses;
