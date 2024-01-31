import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import JobPost from "../Pages/JobPost";

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
    ]
  },
]);
export default router;
