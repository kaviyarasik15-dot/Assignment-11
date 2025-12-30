import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import UserDetails from "../pages/UserDetails";
import UsersList from "../pages/UserSList";

const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <HomePage /> ,
  },
   {
    path: "/about",
    element: <AboutPage /> ,
  },
  {
    path: "/user/:id",
    Component: UserDetails,
  },
  {
    path: "/list-users",
    Component: UsersList,
    
  },
  
  
]);
  export default RouterApp;