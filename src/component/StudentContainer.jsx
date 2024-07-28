import { useState, useEffect } from "react";
import useStudent from "../utils/useStudent";
import Header from "./Header";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

const StudentContainer = () => {
  const students = useStudent();
  const [filteredStudents, setfilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (students.length > 0) {
      setfilteredStudents(students);
    }
  }, [students]);


   // Function to handle search input change
   const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();

    if(query===" "){
      return
    }
    setSearchQuery(query);
    const filtered = students.filter((student) => {
      return student.name.toLowerCase().includes(searchQuery) 
          ||   (student.skills && student.skills.toLowerCase().includes(searchQuery));
    });
    setfilteredStudents(filtered);
   };


  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="bg-neutral-800 bg-gradient-to-tr py-[4%]">

      <div className="flex justify-center mb-8 text-red-500">
          
          <input 
            type="text"
            className="px-4 py-2  text-red-500 text-lg font-mono border rounded w-[60%]  font-extrabold h-12 placeholder:text-red-600 placeholder:text-lg placeholder:font-serif"
            placeholder="Search by name or skill..."
            value={searchQuery}
            onChange={handleSearch}
          />

        </div>

        <div className=" flex justify-center items-center my-4 ">
        <div className="w-[90%] bg-neutral-400 h-[2px]"></div>
        </div>

        <div className="flex  mx-20  flex-wrap justify-center items-center gap-8">
          {filteredStudents.map((st) => (
            <Link key={st?.id} to={"/studentpage/" + st?.id}>
              <StudentCard data={st} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentContainer;
