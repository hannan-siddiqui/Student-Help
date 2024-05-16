import { profile } from "../utils/constant";


const StudentCard = (props) => {



  const {name,  email,  skills, enrlno} = props.data;




  

  return (
    <div className="py-10 px-2 w-[420px] bg-transparent bg-opacity-10 flex flex-col mt-2 ml-2 border-white border-[2px] rounded-lg mx-auto ">
      <div className="flex  items-center  ">
        <div className="w-[150px] h-[150px]  border-black border-[2px]   ml-1 mr-8">
          <img
            className=" object-fill  w-[150px] h-[150px]  aspect-auto"
            src={profile}
            alt="302 Dead"
          />
        </div>

        <div className=" w-[200px] font-semibold underline ">
          <h1 className="">{name}</h1>
          <h1 className="pt-2">{email} </h1>
          <h1 className="pt-2">{enrlno}</h1>
        </div>
        
      </div>

      <div className="pt-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold p-3"> Skills </h1>

        <div className="flex justify-center flex-wrap h-[100px]" >

          {skills?.split(", ").map((sk) => (
            <div key={sk} className="p-10">{sk}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentCard;