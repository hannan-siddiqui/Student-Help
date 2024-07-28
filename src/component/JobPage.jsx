import { useParams } from "react-router";
import useJob from "../utils/useJob";
import Header from "./Header";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const JobPage = () => {
  const { id } = useParams();

  const JOB = useJob();


const filteredJobs = JOB.filter((j) => j?.id.toString() === id.toString());  
const job = filteredJobs[0];

  return (
    <div>
        <div><Header/></div>
       <div>
       <div className="bg-[#ccd3de]  py-10 flex justify-center">

{/* job container  */}
            <div className=" flex flex-col w-[900px]">
            <div className="ml-[10%] font-extrabold text-black text-2xl">{job?.company.toUpperCase()}</div>
              <div className="mt-2 ml-[10%] font-extrabold text-black text-2xl">{job?.title}</div>

              {/* remote or not */}
              <div className="mt-4 ml-[10%] flex items-center">
                <h1 className="font-extrabold text-black text-2xl mr-6">Opportunity Type:</h1>
                <h1 className="text-xl font-bold" >{job?.remote?" remote":" onsite"}</h1>
              </div>
              
              {/* location */}
              <div className="mt-4 ml-[10%] flex items-center">
                <h1 className="font-extrabold text-black text-2xl mr-6">Location :</h1>
                <h1 className="text-xl font-bold" >{job?.location}</h1>
              </div>

<div className="flex justify-center">
<div className="w-[80%] h-[1px] bg-black my-4"></div>
</div>

              {/* about the job */}
              <div className="mt-4 ml-[10%] ">
                  <div className="text-xl font-bold">about this job</div>
                  <div className="mt-2 text-lg">{job?.desc}</div>
              </div>

              {/* qualification */}

              <div className="mt-4 ml-[10%] ">
                  <div className="text-xl font-bold">Qualifications</div>
                  {/* <div className="mt-2 text-lg">{job?.qualification}</div> */}
                  {job?.qualification?.split('. ').map((qual, index) => (
                    <div key={index}>{qual.trim()}</div>
                  ))}
              </div>

              {/* apply link */}

             <Link to={job?.link} target="__blank"> 
             <div  className="flex mt-12 ml-[10%]">
                    <div className="w-[100px] flex justify-center items-center gap-1 p-2 px-4 rounded-lg bg-[#0066ff] text-2xl" >  
                      <div className="flex items-center justify-center">apply</div> <div className="flex justify-center items-center"><FaSquareArrowUpRight/></div>
                    </div>
              </div> 
              </Link>



            </div>

       </div>
       </div>
    </div>
  );
};

export default JobPage;
