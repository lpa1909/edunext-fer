import Filter from "./Filter";
import CourseProvider from "../../Context/CourseContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarTeacher from "../SidebarTeacher";
import SlotTeacher from "./SlotTeacher";
import HeaderSlotTeacher from "./HeaderSlotTeacher";

const ViewSlotsTeacher = () => {
  

  return (
    <div className="row">
        <div className="col-md-1">
            <div className="main-content">
                <SidebarTeacher />
            </div>
        </div>
        
        <div className="col-md-10">
          
            <HeaderSlotTeacher/>
            {/* <Filter/> */}
            <SlotTeacher/>
          
            
        </div>
        
    </div>
  );
};

export default ViewSlotsTeacher;
