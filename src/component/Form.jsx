import { useRef } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';



const Form = () => {

  const navigate = useNavigate()

  const nameRef = useRef();
  const rollnoRef = useRef();
  const enrlnoRef = useRef();
  const emailRef = useRef()
  const skillsRef = useRef();
 

  const user = useSelector(store => store.user.user);
 


//  add student is working perfectly

    const addStudent =  async ()=> {
      navigate("/student");

      
      
        const name = nameRef?.current?.value;
        const rollno = rollnoRef?.current?.value;
        const enrlno = enrlnoRef?.current?.value;
        const skills = skillsRef?.current?.value;
        const email = user?.email;



        

        return  await axios.post('http://127.0.0.1:8000/api/student/', 


        
        {
          "name":name,
          "rollno":rollno,
          "enrlno":enrlno,
          "email":email,
          "skills":skills,

        }
      

        )
             
    }

    

  return (

    <div>   

           <form           
            className="flex flex-col mx-auto w-[30%] my-[20%]">
    
            <input type="text" ref={nameRef} defaultValue="U_Name" />
            <input type="text" ref={rollnoRef} defaultValue="u8723" />
            <input type="text" ref={emailRef} value={user?.email} />
            <input type="text" ref={enrlnoRef} defaultValue="Uernlno" />
            <input type="text" ref={skillsRef} defaultValue="add skills" />
            <button onClick={addStudent}> add info </button>

            </form>
    
    </div>
    //     </div>
    // </div>
  )
}

export default Form;