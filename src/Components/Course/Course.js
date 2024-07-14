import HeaderCourse from "./HeaderCourse";
import Sidebar from "../Sidebar";
import Filter from "./Filter";
import SlotList from "./SlotList";
import CourseProvider from "../../Context/CourseContext";
import 'bootstrap/dist/css/bootstrap.min.css';
const Course = () => {
  

  return (
    <div className="row">
        <div className="col-md-1">
            <div className="main-content">
                <Sidebar />
            </div>
        </div>
        
        <div className="col-md-10">
          
            <HeaderCourse/>
            <Filter/>
            <SlotList/>
          
            
        </div>
        
    </div>
  );
};

export default Course;
