import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import useStudent from "../utils/useStudent";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import { profile } from "../utils/constant";

const StudentPage = () => {
  
  const lang = {
    
    html:<FaHtml5/>,
    css:<FaCss3Alt/>,
    javascript:<IoLogoJavascript />,
    js:<IoLogoJavascript />,

    java: <FaJava />,
    python: <FaPython />,
    "c++": <TbBrandCpp />,
    react: <FaReact />,
    reactjs: <FaReact />,
    "react.js": <FaReact />,
  
    django: <SiDjango />,
  
    node: <BiLogoNodejs />,
    nodejs: <BiLogoNodejs />,
    "node.js": <BiLogoNodejs />,
  
    next: <TbBrandNextjs />,
    nextjs: <TbBrandNextjs />,
    "next.js": <TbBrandNextjs />,
  
    redux: <TbBrandRedux />,
    "redux.js": <TbBrandRedux />,
    reduxjs: <TbBrandRedux />,

    sql: <PiFileSql/>,
    mysql:<PiFileSql/>,
    mongodb:<SiMongodb/>,

    git : <FaGitSquare/>,

    github:<FaGithub/>,

    docker:<FaDocker/>,

  };
  

  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const Students = useStudent();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Ensure type consistency for id comparison
        const filteredStudent = Students.filter(
          (st) => st?.id.toString() === id?.toString()
        );
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

  if (isLoading) {
    return <div>Loading student data...</div>;
  } else if (!id) {
    return <div>Student ID not available yet.</div>; // Or a different message
  }

  // Handle empty results or errors:
  if (!student) {
    return <div>Student with ID {id} not found.</div>;
  }

  const {
    image,
    name,
    email,
    skills,
    enrlno,
    link,
    github,
    twitter,
    linkedin,
    projects,
  } = student;

  // Display student card if successful:



  return (
    <div>
      <div>
        <Header />
      </div>

      {/*portfolio website design   */}

      {/* first section Photo and social links */}

      <div className="bg-neutral-800">
        {/* first section Photo and social links */}
        <div className="flex  md:p-[10%]  bg-neutral-700  ">
          {/* left div */}
          <div className="bg-neutral-600 shadow-xl shadow-red-500   border-4 border-double border-black rounded-3xl p-10 flex flex-col justify-center items-center bg-gradient-to-l ">
            {/* photo div */}
            <div className="w-[400px]   ">
              {/* image */}
              <img
                className="object-contain rounded-3xl  "
                src={profile}
                alt=""
              />
            </div>

            {/* name div */}
            <div className="rounded-xl mt-3 p-5   flex justify-center gap-4 items-center ">
              <span className="text-3xl font-mono font-bold  px-2  text-black  rounded-lg  underline">
                {name.toUpperCase()}
              </span>
            </div>

            {/* social links  */}
            <div className=" rounded-xl p-10  shadow-xl shadow-red-500 py-4  border border-black mt-6 flex  items-center justify-center  gap-8 bg-neutral-400 ">
              <Link to={github} target="_blank">
                <div className="text-4xl bg-neutral-800  text-white rounded-lg p-2 mx-2">
                  {" "}
                  <FaGithub />
                </div>
              </Link>

              <Link to={linkedin} target="_blank">
                <div className="text-4xl bg-neutral-800 text-blue-500 rounded-lg p-2 mx-2">
                  {" "}
                  <FaLinkedin />
                </div>
              </Link>

              <Link to={twitter} target="_blank">
                <div className="text-4xl bg-neutral-800 text-white rounded-lg p-2 mx-2">
                  {" "}
                  <BsTwitterX />
                </div>
              </Link>

              <Link to={link} target="_blank">
                <div className="text-4xl bg-neutral-800 text-red-500 rounded-lg p-2 mx-2">
                  <FaGlobe />
                </div>
              </Link>
            </div>
          </div>

          {/* middle div */}

          <div className=" rounded-t-3xl  mx-20 bg-gradient-to-t from-red-500 to-stone-900 w-8"></div>

          {/* rightdiv */}
          <div className=" bg-neutral-600 rounded-xl p-10  shadow-xl shadow-red-500">
            <div className="md:w-[540px] w-[400px] p-2 ">
              {/* division */}
              <div className=" mt-8 h-[1px] bg-black w-[90%]"></div>

              <div className="font-mono font-bold mt-6">
                I am a passionate computer science student specializing in
                software development, With a strong foundation in programming
                and a keen eye for design.I thrive in crafting innovative and
                user-friendly applications. Eager to continuously learn and
                contribute to the ever-evolving world of technology
              </div>

              {/* division */}
              <div className=" my-8 h-[2px] bg-black w-[90%]"></div>

              {/* skills section  */}
              <div className=" pt-8 flex  flex-wrap justify-start  mx-8 ">
                {skills?.split(" ").map((sk, index) => (
                  <div
                    key={index}
                    className={`flex bg-neutral-500 flex-wrap overflow-hidden justify-center items-center text-4xl m-1 p-1 rounded-2xl border-[2px] border-red-700 text-red-800 ${
                      lang[sk.toLowerCase()]
                        ? "w-[70px] h-[70px] p-0"
                        : "w-auto h-auto"
                    }`}
                  >
                    {lang[sk.toString().toLowerCase()]
                      ? lang[sk.toString().toLowerCase()]
                      : sk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* second section */}

     
{/* project Heading  */}

        {
          projects && 
          <div className="py-10">
            <div className="mt-10 ml-6 flex  justify-start">
          <h1 className="text-4xl text-black font-extrabold font-sans ">Projects </h1>
        </div>

        <div className="  h-[1px] ml-36 mt-1 bg-neutral-400 w-[90%]"></div>

         
         
         <div className="  h-screen m-10 font-serif flex justify-center items-center flex-wrap gap-4">
         {projects?.map((p, index) => (
            <div key={index} className="shadow-2xl hover:shadow-red-700 bg-neutral-600 relative rounded-lg w-[450px] h-[500px] flex  flex-col p-3 justify-start  items-start border border-red-600">

            <div className="text-2xl font-sans font-bold text-neutral-300 p-2 ">{p?.title.toUpperCase()}</div>

            {
              p?.tech && <div className=" font-serif font-thin text-s text-neutral-300 ">{p?.tech?p?.tech:"tech stack : "}</div>
            }
            <div className="  h-[1px] w-[90%] my-2  bg-neutral-400 "></div>

              <div className="mt-2 relative w-[400px] flex justify-center items-center ">

              <div className="w-[400px] hover:opacity-10  z-10"><img 
              className="rounded-2xl object-cover"
              src="https://supercarblondie.com/wp-content/uploads/final-bugatti-chiron-1500-ps-delivered-feature.webp" alt="" />
              </div>
              
              <div className=" w-[100%] font-mono absolute rounded-lg p-2 border border-red-800 top-[10%] left-[1%] overflow-hidden h-[200px] flex text-neutral-300 bg-neutral-800 flex-wrap justify-center items-center">{p?.description}</div>
              
              </div>
              
            
              
              <div className="  h-[1px] my-3 bg-red-600 "></div>
              
              {/* link */}
              <Link to={p?.link} target="__blank">
                <div className= "mt-2 absolute  top-[80%] left-[20%] flex justify-center items-center  w-[200px] p-1 text-black font-extrabold font-sans text-2xl  border border-blue-200  rounded-xl bg-red-700"> github link </div>
              </Link>

            </div>
          ))}
         </div>
          </div>
        }

        </div>
      </div>
   
  );
};

export default StudentPage;
