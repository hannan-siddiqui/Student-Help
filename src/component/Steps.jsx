import Header from "./Header";
import useDSASHEET from "../utils/useDSASHEET";
import Step from "./Step";


const Steps = () => {

    const data = useDSASHEET();
    console.log(data);
    

    if(!data) return
  
  
    return (
      <div className="bg-[#151111]">
        <div>
          <Header />
        </div>


       

        <div className="  bg-[#151111]">
          

          <div className="w-[80%] mt-[4%] ">
            <div className=" ">
             

              <div className="bg-[#151111] ">{
              
              <div className="">

             { 
             
             data.map((st)=>(
              <Step key={st?.step_no}  data={st} />
             ))
              
            }

              </div>

              
              }</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Steps;