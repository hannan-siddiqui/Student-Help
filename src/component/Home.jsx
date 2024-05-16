import Header from "./Header";
import DSA from "../utils/DSA";
import System from "../utils/System";
import Yt from "../utils/Yt";
import { FaArrowRightLong } from "react-icons/fa6";
import { Blogs } from "../utils/Blogs";
import CS from "../utils/CS";
import CP from "../utils/CP";
import { Link } from "react-router-dom";

const Home = () => {




  return (
    <div  className="bg-neutral-800 pt-0 py-[5%]">

      <div>
        <Header/>
      </div>

      <div className="mt-[3%] flex flex-col justify-center items-center ">
        <div>
          <h1 className="text-white text-center mx-4 text-lg  font-bold md:text-5xl md:font-extrabold">
            Gear Up for
           <span className="text-red-700"> Success</span>:
            Your Ultimate Preparation Hub!</h1>
        </div>

        <div>
          <h1 
          className="text-neutral-400 md:text-xl font-bold mx-4 text-center  mt-4"
          >Navigate Your Learning Adventure: Explore DSA and Ace Interviews Effortlessly</h1>
        </div>
     
      </div>

      <div className="flex justify-center items-center ">
      <div className=" gap-6 w-[700px] sm:w-[350px] md:w-[1100px] flex flex-wrap  justify-center items-start text-white my-auto mt-[5%] " >
        
        <Link to="/DSA">
        <div className=" w-[322px] h-[290px] bg-neutral-600 bg-opacity-40 hover:border border-white p-4 rounded-2xl">
            <div className="w-[100px]">
              <DSA/>
            </div>
            <div> 
            <h1 className="text-xl font-bold mt-5"> DSA sheet</h1>
            <h1 className="text-[#7A7A7A] mt-1">Boost your DSA skills with our handy cheat sheets</h1>
            <h1 className="border border-white w-[130px] rounded-3xl  p-2 mt-4 flex justify-center items-center gap-3">try it free <  
            FaArrowRightLong/> </h1>
            </div>

        </div>

        </Link>

        <div className=" w-[322px] h-[290px] bg-neutral-600 bg-opacity-40 hover:border border-white p-4 rounded-2xl">
            <div className="w-[100px]">
              <System/>
            </div>
            <div> 
            <h1 className="text-xl font-bold mt-5">System design</h1>
            <h1 className="text-[#7A7A7A] mt-1">Design better system with our simplified approach </h1>
            <h1 className="border border-white w-[130px] rounded-3xl  p-2 mt-4 flex justify-center items-center gap-3">try it free <  
            FaArrowRightLong/> </h1>
            </div>

        </div>

        <div className=" w-[322px] h-[290px] bg-neutral-600 bg-opacity-40 hover:border border-white p-4 rounded-2xl">
            <div className="w-[100px]">
              <Yt/>
            </div>
            <div> 
            <h1 className="text-xl font-bold mt-5">DSA playlist</h1>
            <h1 className="text-[#7A7A7A] mt-1"> Master algorithms effortlessly with our curated DSA  </h1>
            <h1 className="border border-white w-[130px] rounded-3xl  p-2 mt-4 flex justify-center items-center gap-3">try it free <  
            FaArrowRightLong/> </h1>
            </div>

        </div>


        <div className=" w-[322px] h-[290px] bg-neutral-600 bg-opacity-40 hover:border border-white p-4 rounded-2xl">
            <div className="w-[100px]">
              <Blogs/>
            </div>
            <div> 
            <h1 className="text-xl font-bold mt-5">Technical blogs</h1>
            <h1 className="text-[#7A7A7A] mt-1"> Dive Deep into Tech Innovation with Our Engaging Blogs. </h1>
            <h1 className="border border-white w-[130px] rounded-3xl  p-2 mt-4 flex justify-center items-center gap-3">try it free <  
            FaArrowRightLong/> </h1>
            </div>

        </div>

        <div className=" w-[322px] h-[290px] bg-neutral-600 bg-opacity-40 hover:border border-white p-4 rounded-2xl">
            <div className="w-[100px]">
              <CS/>
            </div>
            <div> 
            <h1 className="text-xl font-bold mt-5">CS Subjects</h1>
            <h1 className="text-[#7A7A7A] mt-1"> Demystify CS topics with our easy-to-understand guides. </h1>
            <h1 className="border border-white w-[130px] rounded-3xl  p-2 mt-4 flex justify-center items-center gap-3">try it free <  
            FaArrowRightLong/> </h1>
            </div>

        </div>

        <div className=" w-[322px] h-[290px] bg-neutral-600 bg-opacity-40 hover:border border-white p-4 rounded-2xl">
            <div className="w-[100px]">
              <CP/>
            </div>
            <div> 
            <h1 className="text-xl font-bold mt-5">Vader's CP Sheet</h1>
            <h1 className="text-[#7A7A7A] mt-1"> </h1>
            <h1 className="border border-white w-[130px] rounded-3xl  p-2 mt-16 flex justify-center items-center gap-3">try it free <  
            FaArrowRightLong/> </h1>
            </div>

        </div>

        


        
      </div>


      </div>
     
    </div>
  );
  

}

export default Home;