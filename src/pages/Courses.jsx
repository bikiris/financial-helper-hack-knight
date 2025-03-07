import CourseContainer from "../components/CourseContainer";

const Courses = () => {
  return (
    <div>
      <CourseContainer imageURL={'https://via.placeholder.com/150'} title={'Course 1'} description={'This is a description of course 1'} internalURL={'/courses/1'}/>
    </div>
  );
};


export default Courses;