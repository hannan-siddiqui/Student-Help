import { useRef } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';

const UpdateForm = () => {


    const nameRef = useRef();
    const rollnoRef = useRef();
    const enrlnoRef = useRef();
 

    const user = useSelector(store=>store.user);


//  add student 

    






    //  update student 

    const Update =()=>{

      
        
        const name = nameRef.current.value;
        const rollno = rollnoRef.current.value;
        const enrlno = enrlnoRef.current.value; 
        const email = user?.email;

        const id = 45;
        


            return axios.post("http://127.0.0.1:8000/api/update/45" ,

            {
                "name": name,
                "rollno": rollno,
                "enrlno": enrlno,
                "email":email,

            }
            )
    }


  return (
        <div>


           <form           
            className="flex flex-col mx-auto w-[30%] my-[20%]">
                
            <input type="text" ref={nameRef} defaultValue="name" />
            <input type="text" ref={rollnoRef} defaultValue="u8723" />
            <input type="text" ref={enrlnoRef} defaultValue="Uernlno" />
            <button onClick={Update}> update info </button>

            </form>
           </div>
    //     </div>
    // </div>
  )
}


export default UpdateForm;