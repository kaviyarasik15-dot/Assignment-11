import {Link} from "react-router";

function AboutPage() {
  return (
    <>
    <div  className="bg-indigo-300 min-h-screen flex">
    <div className="flex">
    <img className="w-150  "src="https://i.pinimg.com/736x/15/90/6f/15906f3b5ec8c21cf12586c38c8df138.jpg"></img>
</div>
<div> <h1 className="text-3xl text-white font-lg pl-40 pt-20"> <strong>Benifits from our online learning</strong></h1>
      <h2 className="text-2xl text-white font-lg pl-40 pt-5"><strong>Flexibility</strong></h2>
      <p className="text-sm text-white font-lg pl-40 block">Learn at your own place, anytime and anywhere, without<br ></br>
        disrupting your schedule.</p>
        <h2 className="text-2xl text-white font-lg pl-40 pt-5"><strong>Expert Instructors</strong></h2>
        <p className="text-sm text-white font-lg pl-40 block">Gain knowledge from industry professionals with real-world<br ></br>
        experience.</p>
        <h2 className="text-2xl text-white font-lg pl-40 pt-5"><strong>Flexibility</strong></h2>
         <p className="text-sm text-white font-lg pl-40 block">Develop in-demand skills, earn certifications, and advance your<br ></br>
        career with confidence.</p>
</div>
       <div className="pl-240 pt-30 absolute top-100 "><Link className=" w-100px border-1 p-1 bg-red-400 text-white rounded-md px-3  flex"to={"/list-users"}>Go to Userpage</Link></div>
    </div>
     <div className="pl-190 pt-30 absolute top-100 "><Link className=" w-100px border-1 p-1 bg-red-400 text-white rounded-md px-3  flex"to={"/"}>Go to homepage</Link></div>
    </>
  );
}


export default AboutPage;