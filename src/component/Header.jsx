import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const user = useSelector(store=>store.user?.user);

  const handleSignOut = () => {
    

    signOut(auth)
      .then(() => {
        removeUser();
        dispatch(removeUser())
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };



  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signed in ...
        const {uid, email, displayName} = user;
        dispatch(addUser(
          {
            uid:uid, 
            email:email,
            displayName:displayName,
            
          }));
          // navigation based on auth state changes
          // navigate("/");
     
      }
       else {
        // User is signed out
        dispatch(removeUser());
        
             
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);



  return (
    <div className="flex justify-between items-center bg-red-800 text-black px-10 h-24 ">
      <div className="flex justify-center items-center h-20">
        <h1 className="text-3xl font-extrabold text-gray-950">Student-Help</h1>
      </div>

      <div className="font-mono">
        <ul className="flex justify-center items-center h-20 text-2xl font-bold">
          <li className="mx-10 bg-red-700 p-1 rounded-xl hover:text-red-300 px-2 border-[2px] border-black">
            <Link to="/"> Home </Link>
          </li>
          <li className="mx-10 bg-red-700 p-1 rounded-xl hover:text-red-300 px-2 border-[2px] border-black">
            <Link to="/student"> Student </Link>
          </li>
          <li className="mx-10 bg-red-700 p-1 rounded-xl hover:text-red-300 px-2 border-[2px] border-black">
            <Link to="/job"> Job </Link>
          </li>
         
          {
            !user &&
            <li className="mx-10 bg-red-700 p-1 rounded-xl hover:text-red-300 px-2 border-[2px] border-black">
            <Link to="/login"> Login </Link>
          </li>
          }
          
         {
          user && 
           <li className="mx-10 bg-red-700 p-1 rounded-xl hover:text-red-300 px-2 border-[2px] border-black">
           <Link to="/profile"> Profile </Link>
         </li>
         }


          {
            user && 

            <li
           className="mx-10 bg-red-700 p-1 rounded-xl hover:text-red-300 px-2 border-[2px] border-black">
            <button onClick={handleSignOut}>
              Sign Out
            </button>
          </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
