import axios from "axios";
import { useEffect, useState } from "react";



const useStudent = () => {
  
  const [Student, setStudent] = useState([]);

  useEffect(()=>{

    const getStudent = async ()=>{
      const studentdata = await axios.get("http://127.0.0.1:8000/api/student/");
    
      setStudent(studentdata?.data);
      

    }

    getStudent();

  }, [])

  return Student;

  
}

export default useStudent;