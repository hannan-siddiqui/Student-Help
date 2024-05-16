import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import EQ from "./EQ";
const Easy = () => {


    const [showitem , setshowitem] = useState(false);

    const HandleClick = ()=>{
        setshowitem(!showitem)
    }

  return (
    <div>
        <div >

        <div className="bg-zinc-900  flex flex-col justify-center items-center mx-auto w-[95%] mt-6">

                <div className="w-[100%]  flex  justify-start items-center bg-gray-600 ">
                    <div className="w-[100%] px-[10%] rounded-lg bg-amber-600 h-[10px]"> </div>
                </div>

                <div className="w-[100%]">

                    <div  className="w-[100%] -mt-1   bg-gray-700 shadow-lg p-4 text-white rounded-lg mx-auto" >

                    <div className=" mt-6 flex justify-between items-center hover:cursor-pointer " onClick={HandleClick} >
                        <span className="font-semibold ">Easy</span>
                        <span className="border border-black p-2 rounded-lg" ><MdOutlineKeyboardArrowDown/> </span>
                    </div >


                    <div className="flex justify-center items-center ">
                        {showitem && <div>
                        <EQ/>
                        </div>}
                    </div>

                    </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Easy;