import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentContainer from "./StudentContainer";
import Home from "./Home";
import Error from "./Error";
import Login from "./Login";
import Steps from "./Steps";
import Profile from "./Profile";
import Footer from "./Footer";
import StudentPage from "./StudentPage";
import Job from "./Job";
import JobPage from "./JobPage";


const Body = () => {


    const appRouter = createBrowserRouter([

        {
            path:"/",
            element:<Home/>,
            errorElement:<Error/>,
        },
        {
            path:"/student",
            element:<StudentContainer/>,
            errorElement:<Error/>,
        },
        {
          path:"/job",
          element:<Job/>,
          errorElement:<Error/>,
      },
        {
          path:"/login",
          element:<Login/>,
          errorElement:<Error/>,
        },
        {
          path:"/DSA",
          element:<Steps/>,
          errorElement:<Error/>,
        },
        {
          path:"/profile",
          element: <Profile/>,
          errorElement: <Error/>,
        },
        {
          path:"/studentpage/:id",
          element:<StudentPage/>,
          errorElement:<Error/>
        },
        {
          path:"/jobpage/:id",
          element:<JobPage/>,
          errorElement:<Error/>
        }

       
 
    ]);


  return (

        <div>
            
    
           <RouterProvider router={appRouter}/>

          <Footer/>
           
      
        
        </div>
        
  )
}

export default Body;