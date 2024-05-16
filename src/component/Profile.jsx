import Form from './Form'
import Header from './Header'
import UpdateForm from './UpdateForm';
import { profile } from "../utils/constant";
import { FaGithub, FaGlobe, FaLinkedin, } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { useState } from 'react';
import { MdEdit } from "react-icons/md";

const Profile = () => {

  const [form, setform] = useState(false);

  const togleform = ()=>[
    setform(!form)
  ]


  return (
    <div>
        <div>
          <Header/>
        </div>


        <div className=''>
          {
            form &&  <div>
            <Form/>
            </div>
          }
        </div>

{/* prifile page */}



        {
          !form && 

          <div 
        
        className='py-[3%] bg-neutral-800 pl-[2%] '
        
        >

         <div className='w-[400px] h-[800px] hover:cursor-pointer  border border-zinc-400 rounded-lg p-3 bg-neutral-700 relative'>

            <div 
            
            onClick={togleform}

            className='absolute bg-red-500 -top-1 -right-1 text-3xl p-1 rounded-[50%]'>
              <MdEdit/>
            </div>

            <div className='flex flex-col items-center  '>

            <div 
            className=' w-[130px] h-[130px] rounded-full'
            >
              
            <img 
            className='w-[130px] h-[130px] rounded-full  object-fill aspect-auto'
            src= "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/profile/darth_vader?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2LFMBNFQHZGEYE7P%2F20240515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240515T080711Z&X-Amz-Expires=86400&X-Amz-Signature=e83bbebb4ef3f2f5115356e7639138b5c56856b32eedfa12b352dbfbd4370cd2&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" />
            
            
            </div>

            

            <div
            className='pt-4'
            >
              <h1 
              className='font-extrabold text-2xl'
              >Hannan Siddiqui</h1>
            </div>

            <div className= ' pt-4 flex  items-center justify-center  '>
              <div className='text-2xl bg-neutral-800 rounded-lg p-2 mx-2'><FaGithub/></div>
              <div className='text-2xl bg-neutral-800 rounded-lg p-2 mx-2'><FaLinkedin /></div>
              <div className='text-2xl bg-neutral-800 rounded-lg p-2 mx-2'> <BsTwitterX/></div>
              <div className='text-2xl bg-neutral-800 rounded-lg p-2 mx-2'><FaGlobe /></div>
            </div>

{/* division */}
            <div className=' mt-8 h-[1px] bg-neutral-400 w-[80%]'></div>


{/* email details */}
            <div className='flex justify-center items-center pt-6 pl-4'>
              <div className='text-4xl  bg-neutral-800 rounded-lg p-2'>
              <MdOutlineMail />
              </div>
              <div className='pl-3 flex flex-col justify-center items-start '>
                <h1 className='  font-semibold text-sm text-neutral-400 '>email</h1>
                <h1 className='text-white'>hannansiddiqui@gmail.com</h1>
              </div>
            </div>

{/* college details */}

            <div className='flex justify-center items-center pt-10 '>
              <div className='text-4xl  bg-neutral-800 rounded-lg p-2'>
              < FaUniversity />
              </div>
              <div className='pl-3 flex flex-col justify-center items-start '>
                <h1 className='  font-semibold text-sm text-neutral-400 '> college </h1>
                <h1 className='text-white'> Aligarh Muslim University</h1>
              </div>
            </div>


            {/* diviison */}

            <div className=' mt-8 h-[1px] bg-neutral-400 w-[80%]'></div>

{/* skill details  */}

            <div className='pt-8 flex  flex-wrap justify-start  mx-8 '>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>Java</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>Python</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>C++</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>AWS</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>Docker</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>Git</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>JavaScript</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>ReactJS</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>Django</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>SQL</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>MongoDB</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>FireBase</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>HTML</div>
              <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>CSS</div>
              
             
              
            </div>



         </div>


          </div>

          <div>
            
          </div>
          

        </div>
        }

  

       

        {/* <div>
          <UpdateForm/>
        </div> */}
    </div>
  )
}

export default Profile;