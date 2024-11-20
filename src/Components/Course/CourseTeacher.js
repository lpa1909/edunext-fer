import Filter from "./Filter";
import CourseProvider from "../../Context/CourseContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarTeacher from "../SidebarTeacher";
import HeaderCourseTeacher from "./HeaderCourseTeacher";
import SlotListTeacher from "./SlotListTeacher";
const CourseTeacher = () => {
  

  return (
    <div className="row">
        <div className="col-md-1">
            <div className="main-content">
                <SidebarTeacher />
            </div>
        </div>
        
        <div className="col-md-10">
          
            <HeaderCourseTeacher/>
            <Filter/>
            <SlotListTeacher/>
          
            
        </div>
        
    </div>
  );
};

export default CourseTeacher;
