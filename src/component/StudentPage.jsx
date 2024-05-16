import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import useStudent from "../utils/useStudent";

const StudentPage = () => {
  const { id } = useParams();
  console.log(id); // Log the retrieved id
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const Students = useStudent();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Ensure type consistency for id comparison
        const filteredStudent = Students.filter((st) => st?.id.toString() === id?.toString()); 
        // console.log(filteredStudent);
        setStudent(filteredStudent[0]); // Assuming one student per ID
      } catch (error) {
        console.error("Error fetching student:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch data only if id is available
    if (id) {
      fetchData();
    }
  }, [id, Students]); // Re-run only when id or Students change

  // Display loading indicator or message based on data availability
  if (isLoading) {
    return <div>Loading student data...</div>;
  } else if (!id) {
    return <div>Student ID not available yet.</div>; // Or a different message
  }

  // Handle empty results or errors:
  if (!student) {
    return <div>Student with ID {id} not found.</div>;
  }

  // Display student card if successful:
  return (
    <div>
      <div>
        <Header />
      </div>

    <h1>student page design </h1>

      <h1>{id}</h1>
      <h1>{student.name}</h1>
      <h1>{student.rollno}</h1>
      <h1>{student.skills}</h1>
      {student && ( // Conditionally render student card only if student exists
        <div>
          {/* portfilio template with student data */}
          {/* ... (your student card component or template here) ... */}
        </div>
      )}
    </div>
  );
};

export default StudentPage;
