import CourseContainer from "../components/CourseContainer";

const courses = [
  {"name": "Financial Modeling & Valuation", "description": "Learn to build robust financial models for company valuation, forecasting, and investment analysis.", "icon": "public/image.png", "internalURL": "/courses/1"},
];

const Courses = () => {
  return (
    <div className="m-8">
      {courses.map( course => <CourseContainer imageURL={course.icon} title={course.name} description={course.description} internalURL={course.internalURL}/> )}
    </div>
  );
};


export default Courses;