import Form from './Form';

import Header from './Header';
import useJob from '../utils/useJob';
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMail, MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import JobForm from './JobFrom';
import CV from './CV';
// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);



const Profile = () => {
  

  const [leetcodedata, setLeetcode] = useState(null);
  const [form, setform] = useState(false);
  const [jobform, setjobform] = useState(false);

  const [leetcodeUsername, setLeetcodeUsername] = useState('');

  const User = useSelector(store => store.user?.userInfo);
  const U = useSelector(store => store.user?.user);
  const navigate = useNavigate();

  const jobtitle = useRef();
  const jobcompany = useRef();
  const joblink = useRef();
  const jobdesc = useRef();


  const handleCV = ()=>{
    // console.log(User)
    CV(User);
  }


const JOB = useJob();


const handleDelete = async (id) => {
  try {
    const jobId = id; 
    await axios.delete(`http://127.0.0.1:8000/api/jobdelete/${jobId}`);
    navigate("/student");
  } catch (error) {
    console.error(`There was an error deleting the job!`, error);
  }
};


  const updateStudent = async (data) => {
    const name = User.name;
    const rollno = User.rollno;
    const enrlno = User.enrlno;
    const skills = User.skills;
    const email = U.email;
    const link = User.link;
    const linkedin = User.linkedin;
    const github = User.github;
    const twitter = User.twitter;
    const projects = User.projects;
    const leetcode = data;

    // console.log("LeetCode Data being sent:", leetcode); // Debugging log

    try {
      await axios.put(`http://127.0.0.1:8000/api/update/${User?.id}`, {
        name,
        rollno,
        enrlno,
        email,
        skills,
        link,
        linkedin,
        github,
        twitter,
        projects,
        leetcode,
      });
      navigate("/student");
    } catch (error) {
      console.error("There was an error updating the student!", error);
    }
  };
// updateStudent(null);
 

  const fetchLeetcodeData = async (username) => {
    try {
      const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
      const data = await response.json();
    
      setLeetcode(data);
      updateStudent(data); // Assuming updateStudent is defined somewhere
    } catch (error) {
      console.error("Error fetching LeetCode data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    fetchLeetcodeData(leetcodeUsername);
  };

 

// chart data /'/'/'/
const data = {
  labels: ['Easy', 'Medium', 'Hard'],
  datasets: [
      {
          label: "",
          data: [User?.leetcode?.easySolved, User?.leetcode?.mediumSolved, User?.leetcode?.hardSolved],
          backgroundColor: [
              'rgba(52, 235, 229)',
              'rgba(235, 168, 52)',
              'rgba(176, 39, 37)',
              
          ],
          borderColor: [
            'rgba(52, 235, 229)',
            'rgba(235, 168, 52)',
            'rgba(176, 39, 37)',
              
          ],
          borderWidth: 1,
      },
  ],
};

// Custom plugin to draw text in the center of the Doughnut chart
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart) {
    const { ctx, width, height } = chart;
    ctx.restore();
    const fontSize = (height / 114).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';

    const text = User?.leetcode?.solvedProblem +"/3171"; // The text to display in the center
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '85%', // Make the doughnut solid
  plugins: {
    centerText: {}, // Enable the custom plugin
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
  },
};


const toggleForm = () => setform(!form);
const togglejobform = ()=> setjobform(!jobform);

  if (!User) return (
    <div>
      <div>
    <div>

<div className=''>
      {
        form &&  <div>
        <Form/>
        </div>
      }
    </div>

  <div>
  {
      !form && 

      <div 
    
    className='py-[3%] bg-neutral-800 pl-[2%] '
    
    >

     <div className='w-[400px] h-[800px] hover:cursor-pointer  border border-zinc-400 rounded-lg p-3 bg-neutral-700 relative'>

        <div 
        
        onClick={toggleForm}

        className='absolute bg-red-500 -top-1 -right-1 text-3xl p-1 rounded-[50%]'>
          <MdEdit/>
        </div>

        <div className='flex flex-col justify-start items-center  '>

        <div 
        className=' w-[130px] h-[130px] rounded-full'
        >
          
        <img 
        className='w-[130px] h-[130px] rounded-full  object-fill aspect-auto'
        src= "https://media.licdn.com/dms/image/D5603AQE3uiE-GHPscw/profile-displayphoto-shrink_400_400/0/1712745524834?e=1721865600&v=beta&t=0xnatR-CNu9yYYu3S9Br7hx28X-EHKmIM2364NSIogw" alt="" />
        
        
        </div>

        

        <div
        className='pt-4'
        >
          <h1 
          className='font-extrabold text-2xl'
          >
            "name "
          </h1>
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
        <div className=' flex justify-start items-center pt-6'>
          <div className='text-4xl  bg-neutral-800 rounded-lg p-2'>
          <MdOutlineMail />
          </div>

          <div className=' pl-3 flex flex-col justify-center items-start '>
            <h1 className='   font-semibold text-sm text-neutral-400 '>email</h1>
            <h1 className=' text-white'>{U?.email} </h1>
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
          <div className=' m-2 p-2 rounded-lg bg-red-950 font-semibold text-red-500  '>your_skills</div>
          
          
         
          
        </div>

     </div>


      </div>

      <div>
        
      </div>
      

    </div>
    }
  </div>

</div>

  </div>;
    </div>
  )

   


return (
    <div>
      <div>
        <Header />
      </div>
     
     
     <div >
     {
      jobform && <JobForm/>
     }
     </div>

      <div className=''>

     

        {form && (
          <div>
            <Form />
          </div>
        )}
      </div>

      {!form && !jobform && (
        <div className='py-[3%] bg-neutral-800 pl-[2%] flex'>
          <div className='w-[400px] h-[800px] hover:cursor-pointer border border-zinc-400 rounded-lg p-3 bg-neutral-700 relative'>
            <div onClick={toggleForm} className='absolute bg-red-500 -top-1 -right-1 text-3xl p-1 rounded-[50%]'>
              <MdEdit />
            </div>

            <div className='flex flex-col justify-start items-center'>
              <div className='w-[130px] h-[130px] rounded-full'>
                <img
                  className='w-[130px] h-[130px] rounded-full object-fill aspect-auto'
                  src='https://media.licdn.com/dms/image/D5603AQE3uiE-GHPscw/profile-displayphoto-shrink_400_400/0/1712745524834?e=1721865600&v=beta&t=0xnatR-CNu9yYYu3S9Br7hx28X-EHKmIM2364NSIogw'
                  alt=''
                />
              </div>

              <div className='pt-4'>
                <h1 className='font-extrabold text-2xl'>{User?.name}</h1>
              </div>

              <div className='pt-4 flex items-center justify-center'>
                <Link to={User?.github} target='_blank'>
                  <div className='text-2xl text-white bg-neutral-800 rounded-lg p-2 mx-2'>
                    <FaGithub />
                  </div>
                </Link>
                <Link to={User?.linkedin} target='_blank'>
                  <div className='text-2xl text-blue-500 bg-neutral-800 rounded-lg p-2 mx-2'>
                    <FaLinkedin />
                  </div>
                </Link>
                <Link to={User?.twitter} target='_blank'>
                  <div className='text-2xl text-white bg-neutral-800 rounded-lg p-2 mx-2'>
                    <BsTwitterX />
                  </div>
                </Link>
                <Link to={User?.link} target='_blank'>
                  <div className='text-2xl text-red-500 bg-neutral-800 rounded-lg p-2 mx-2'>
                    <FaGlobe />
                  </div>
                </Link>
              </div>

              <div className='mt-8 h-[1px] bg-neutral-400 w-[80%]'></div>

              <div className='flex justify-start items-center pt-6'>
                <div className='text-4xl bg-neutral-800 rounded-lg p-2'>
                  <MdOutlineMail />
                </div>

                <div className='pl-3 flex flex-col justify-center items-start'>
                  <h1 className='font-semibold text-sm text-neutral-400'>email</h1>
                  <h1 className='text-white'>{User?.email}</h1>
                </div>
              </div>

              <div className='flex justify-center items-center pt-10'>
                <div className='text-4xl bg-neutral-800 rounded-lg p-2'>
                  <FaUniversity />
                </div>
                <div className='pl-3 flex flex-col justify-center items-start'>
                  <h1 className='font-semibold text-sm text-neutral-400'>college</h1>
                  <h1 className='text-white'>Aligarh Muslim University</h1>
                </div>
              </div>

              <div className='mt-8 h-[1px] bg-neutral-400 w-[80%]'></div>

              <div className='pt-8 flex flex-wrap justify-start mx-8'>
                {User?.skills?.split(' ').map((sk) => (
                  <div key={sk} className='m-1 p-2 rounded-lg bg-red-950 font-semibold text-red-500'>
                    {sk}
                  </div>
                ))}
              </div>
            </div>
          </div>

{/* leetcode data */}
{/* leetcode form */}

          <div className='' >
          {
            !User.leetcode &&
            <div className='ml-12 m-5 p-6 rounded-lg flex flex-col items-center justify-center w-[600px]  h-[500px] bg-neutral-600' >
          

           <form onSubmit={handleSubmit}>
            <div className='flex justify-center items-center text-2xl text-yellow-700 font-extrabold'>
              <div className='underline'>LEETCODE DATA</div>
            </div>
        <div>
          <input
            className='border-[6px] placeholder:text-yellow-700 border-yellow-700 mt-8 px-32 py-8 rounded-lg p-2 text-black font-bold'
            type='text'
            value={leetcodeUsername}
            onChange={(e) => setLeetcodeUsername(e.target.value)}
            placeholder='leetcode username'
          />
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <button className='bg-red-500 px-8 py-2 rounded-lg' type='submit'>
            Save
          </button>
        </div>
      </form>
          </div>
          }


          {
            User?.leetcode?.easySolved &&
          <div className='ml-10 rounded-xl p-2  flex  '>
           <div>
           {
 
            <div className='relative rounded-lg flex flex-col  w-[600px]   bg-neutral-600'>

   {/* remove leetcode data */}
<div className='hover:cursor-pointer border-[4px] font-semibold font-mono border-black top-0 right-0 absolute px-2 py-1 bg-red-600 rounded-lg'
onClick={()=>updateStudent(null)}
>remove leetcode data </div>

   
   <div className=' mt-6 ml-40 text-2xl font-extrabold  text-neutral-400'><h2>LeetCode</h2></div>
   <div className='w-[110px] ml-40 h-[1px] bg-neutral-300'></div>
   <div className='flex mt-6 '>
   <div className=' flex justify-start items-center flex-col w-[450px] h-[450px]'>
     
     <div className='mt-8' style={{ width: '300px', height: '300px' }}>
       <Doughnut data={data} options={options} plugins={[centerTextPlugin]}/>
     </div>
     <div className=' mt-6 flex justify-center items-center text-neutral-400'><h1>{User.name}</h1></div>
   </div>

   <div className='mt-16  font-semibold flex flex-col justify-start items-center pr-4'>
       
       <div className='w-[120px]  p-1 bg-neutral-500 rounded-lg flex flex-col justify-center items-center'>
         <div className='text-[#34ebe5]' >Easy</div>
         <div className='text-white mt-1 '>{User?.leetcode?.easySolved}/798</div>
       </div>

       <div className='w-[120px] mt-6  p-1 bg-neutral-500 rounded-lg flex flex-col justify-center items-center'>
         <div className='text-[#eba834] '>Medium</div>
         <div className='text-white mt-1 '>{User?.leetcode?.mediumSolved}/1666</div>
       </div>

       <div className='w-[120px] mt-6  p-1 bg-neutral-500 rounded-lg flex flex-col justify-center items-center'>
         <div className='text-[#b02725]'>Hard</div>
         <div className='text-white mt-1 '>{User?.leetcode?.hardSolved}/707</div>
       </div>

   </div>
   </div>

            </div>
          }
          <div
          onClick={handleCV}
          className='bg-neutral-600 h-10 rounded-xl flex justify-center items-center mt-2'> create CV</div>
           </div>
          
           

           <div> {
            User?.email ==="test1@gmail.com" &&
            <div  className='relative ml-12  mt-1 rounded-lg flex flex-col  w-[600px]   bg-neutral-600'>
     <div className='flex flex-col justify-center items-center p-8'>
     
    
        <div className='text-2xl text-neutral-400 font-bold border border-neutral-500 rounded-lg p-2'> Job posted </div>
        {JOB.map(j => (
        <div key={j?.id} className='flex gap-2 mt-6' >
          <div className='w-48 h-11  p-2 rounded-lg bg-neutral-400 flex justify-center items-center overflow-hidden'>{j.title}</div>
          <div className='w-36 h-11 p-2 rounded-lg bg-neutral-400 flex justify-center items-center overflow-hidden'>{j.company}</div>
          {/* <div className='w-16 bg-neutral-400 flex justify-center items-center overflow-hidden'>{j.desc}</div> */}
          {/* <Link><div className='w-20 h-11 p-2 rounded-lg bg-neutral-400 flex justify-center items-center overflow-hidden'>link</div></Link> */}
          <button className='ml-6 h-11 bg-red-500 rounded-lg p-2 text-3xl border border-black' onClick={() => handleDelete(j?.id)}>
            <MdDelete/></button>
        </div>
      ))}
      <div onClick={togglejobform} className='mt-6 my-4 hover:cursor-pointer  bg-red-500  text-2xl p-1 rounded-lg'>
        add jobs </div>
        </div>
     </div>
          }</div>

          </div>
          }

 

          </div>

     
        </div>

          

      )}
    </div>
  );
};

export default Profile;
