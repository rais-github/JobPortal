import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import JobPost from "../Pages/JobPost";
import MyJob from "../Pages/MyJob";
import EstimatedSalary from "../Pages/EstimatedSalary";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import ShowJob from "../Pages/ShowJob";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post-job",
        element:<JobPost/>
      },
      {
        path:"/my-job",
        element:<MyJob/>
      },
      {
        path:"/salary",
        element:<EstimatedSalary/>
      },
      {
        path:"edit-job/:id",
        element:<UpdateJob/>,
        loader:({params})=>fetch(`http://localhost:8080/jobs/all-jobs/${params.id}`)
      },
      {
        path:"/:id",
        element:<ShowJob/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/sign-up",
        element:<SignUp/>
      },
    ],

  },
]);
export default router;
