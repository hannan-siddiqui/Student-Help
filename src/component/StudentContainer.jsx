import useStudent from "../utils/useStudent";
import Header from "./Header"

import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";


const StudentContainer = () => {




  const Student =   useStudent();



  return (
    <div  className="">
       <div>
          <Header/>
        </div>

      <div className="bg-zinc-500 bg-gradient-to-tr py-[4%]">

       <div className="flex flex-wrap justify-center items-center  ">

 
    
        {
          Student.map((st) => (
            
            <Link  key={st?.id}  to={"/studentpage/"+st?.id} >

            <StudentCard  data ={st} />
            
            </Link>
            
          ))
        }

       </div>



      </div>
    </div>
  );
  

}

export default StudentContainer;