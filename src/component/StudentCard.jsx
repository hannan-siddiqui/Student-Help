import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { profile } from "../utils/constant";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const StudentCard = (props) => {
  const { image, name, email, skills, enrlno, link, github, twitter, linkedin } = props.data;

  return (
    <div className="hover:border-black hover:shadow-red-500 shadow-xl bg-neutral-700 py-10 px-2 w-[420px] h-[600px] overflow-hidden  flex flex-col mt-2 ml-2 border-red-500 border-[2px] rounded-lg mx-auto ">
      <div className="flex  items-center  ">
        <div className="w-[150px] h-[150px]  border-black border-[2px]   ml-1 mr-8">
          <img
            className=" object-fill  w-[150px] h-[150px]  aspect-auto"
            src={image?image:profile}
            alt="302 Dead"
          />
        </div>

        <div className=" w-[200px] font-semibold underline ">
          <h1 className="">{name.toUpperCase()}</h1>
          <h1 className="pt-2">{email} </h1>
          <h1 className="pt-2">{enrlno}</h1>
        </div>
      </div>

      <div className="pt-10 flex flex-col justify-center items-center">

        {/* division */}
        <div className=" mt-8 h-[1px] bg-neutral-400 w-[80%]"></div>


        <h1 className="text-2xl mt-5 font-bold p-2"> Skills </h1>
      </div>

      <div className=" pt-8 flex  flex-wrap justify-start  mx-8 ">
        {skills?.split(" ").map((sk, index) => (
          <div
            key={index}
            className=" m-1 p-2 rounded-lg bg-red-950 font-semibold text-red-500 "
          >
            {sk}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
