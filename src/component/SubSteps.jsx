import { useState } from "react";
import Substepsstep from "./Substepsstep";
import {  MdOutlineKeyboardArrowDown } from "react-icons/md";
import {MdKeyboardArrowUp} from "react-icons/md";

const SubSteps = (props) => {


    const [show , setshow] = useState(false);

    const {data} = props;



    // console.log(data.sub_step_title);
   


    const step = ()=>{
        setshow(!show)
    }

    if(!data) return
    

  return (
    <div>
        <div  className="  ">



<div className=" bg-[#151111] mx-auto flex flex-col justify-center items-center w-[98%] pt-5 px-4   mt-[2%] ">
          <div className="w-[100%]  flex  justify-start items-center bg-gray-950 ">
            <div className="  w-[100%] rounded-lg bg-[#FF6647] h-[10px] "></div>
          </div>

          <div className="w-[100%]">
            <div className="w-[100%] -mt-1 flex flex-col my-4 bg-[#151111] shadow-lg p-4 text-white rounded-lg border border-neutral-700  ">
              <div
                className="  flex justify-between items-center hover:cursor-pointer h-6 "
                onClick={step}
              >
                <span className="font-semibold ">
                  {"Lec  " + data.sub_step_no + " : " + data.sub_step_title}
                 
                </span>
                <span className={`border border-[#FF6647] p-2 rounded-lg ${show? 'border-white bg-[#FF6647]':'bg-[#151111]'}`}>
                  
                  { !show?<MdOutlineKeyboardArrowDown/>:<MdKeyboardArrowUp/>}

                </span>
              </div>

              <div className=" w-[95%] ">
                
                { show &&
                
                <Substepsstep key={data.SubSteps?.topics?.id} data = {data.topics} />
            
                       
                }
              
              </div>
            
            </div>
          </div>
        </div>

    
        </div>

    </div>
  )
}

export default SubSteps