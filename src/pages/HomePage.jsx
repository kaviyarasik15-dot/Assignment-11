
import {Link} from "react-router";

function HomePage() {
  
  return (
    <>
    <div className="flex p-10 bg-grey-100 min-h-screen">
        <h1 className="text-4xl font-lg pl-50 pt-20"> Develop Your Skills in a new and Unique Way</h1>
       <div className="pl-20"><img  className="w-200 bg-cover " src="https://i.pinimg.com/736x/65/5b/81/655b81dc33c00f9fd29ce510700bdebf.jpg"></img></div>   </div>
       <button  className="pl-60 pt-30 absolute bottom-80 "><Link className=" w-100px border-1 p-1 bg-red-400 text-white rounded-md px-3  flex"to={"/about"}>Go to Aboutpage</Link></button>
    </>
  );
}

export default HomePage;
