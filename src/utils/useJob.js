import axios from "axios";
import { useEffect, useState } from "react";

const useJob = () => {
  
    const [job, setjob] = useState([]);
  
    useEffect(()=>{
  
      const getStudent = async ()=>{
        const studentdata = await axios.get("http://127.0.0.1:8000/api/job/");
      
        setjob(studentdata?.data);
        
  
      }
  
      getStudent();
  
    }, [])
  
    return job;
  
    
  }
  
  export default useJob;