import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import SubSteps from "./SubSteps";



const Step = (props) => {

    const [showitem , setshowitem] = useState(false);

    const {data} = props;

    const {sub_steps} = data;
    
    

    const HandleClick = ()=>{
        setshowitem(!showitem)
    }

    if(!data) return
    
    
    return (
      <div className="bg-[#151111] ">
        {/* DSA accordian  */}

        <div className=" bg-[#151111]  flex flex-col justify-center items-center w-screen">
          <div className="w-[80%]  flex  justify-start items-center bg-[#151111] ">
            <div className="  w-[77%] rounded-lg bg-[#FF6647] h-[10px] "></div>
          </div>

          <div className="w-[80%]">
            <div className="w-[100%] -mt-1 flex flex-col my-4 bg-[#151111] shadow-lg p-4 text-white rounded-lg border border-neutral-700  ">
              
              <div className="border border-neutral-700 rounded-lg p-4">
              <div
                className=" flex justify-between items-center hover:cursor-pointer h-6 "
                onClick={HandleClick}
              >
                <span className="font-semibold ">{"Step "+ data.step_no +" : " + data.step_title}</span>
                <span className=
                {`border-[2px] border-[#FF6647] p-2 rounded-lg ${showitem ? 'bg-[#FF6647] border-white ' : 'bg-[#151111]'} `}
                >

                  {!showitem?< MdOutlineKeyboardArrowDown />:<MdKeyboardArrowUp/>}
                
                </span>
              </div>
              </div>

              <div className=" w-[100%]  ">
                {showitem && (
                  <div className="">
                    
                      
                      {
                        sub_steps.map((sub)=>
                            <SubSteps
                                key={sub.topics?.id}
                                data={sub}
                            />
                        )
                      }
                   
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Step;