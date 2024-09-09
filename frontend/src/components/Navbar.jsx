import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
//import { useSelector } from "react-redux";
import { useSelector } from "react-redux"
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa"
const Navbar = () => {
    const user = useSelector((state) => state.user) 
     console.log(user)

     const [dropdownMenu, setDropdownMenu] = useState(false)

  return (
    <div className="py-[10px] sm:py-[10px] px-[20px] sm:px-[60px] flex justify-between items-center relative ">
      <Link to={"/"}>
         <h1 className="text-slate-500 text-5xl font-bold">Rent
         <span className="text-slate-900"> Rite</span>
         </h1>
      </Link>

       <div className="hidden lg:flex border border-gray-500 rounded-[30px] h-[50px] px-5 gap-10 items-center ">
         <input type="text" placeholder="Search...." className=" focus:outline-none bg-transparent"/>
          <IoSearch className="text-slate-600 w-6 h-6"/>
       </div>
        <div className="flex items-center gap-5">
           { user ? (<Link to={"/create-listing"} className="hidden sm:block no-underline text-slate-500 font-bold cursor-pointer hover:text-blue-500">
           Become A Host
           </Link>) : ( 
            
            <Link to={"/login"} className="hidden sm:block no-underline text-slate-500 font-bold cursor-pointer hover:text-blue-500">
               Become A Host
            </Link> 
          )} 
          <button onClick={()=> setDropdownMenu(!dropdownMenu)} className=" h-[50px] flex items-center px-[10px] border border-gray-500 rounded-[30px] gap-2.5 bg-white cursor-pointer hover:shadow-lg">
              <IoMenu className="text-slate-600"/>
                   
                  {!user.user ? (
                  <FaUser className="text-slate-600" />
                  ) : (
                   <img src={`http://localhost:3000/${user.user?.profileImagePath.replace(
                    "public",
                    ""
                   )}`} alt="profile photo" className="w-10 h-10 object-cover rounded-full"/>
                  )
                }
          </button>

            {
              dropdownMenu && !user && (
                 <div className="absolute bg-white right-15 sm:right-5 top-20 flex flex-col w-48 p-2.5 border border-gray-300 rounded-2xl shadow-lg z-[99]">
                   <Link to={"/login"}>Log In </Link>
                   <Link to={"/register"}>Register </Link>
                 </div>
              )}

            {
              dropdownMenu && user && (
                 <div className="absolute bg-white right-15 sm:right-5 top-20 flex flex-col w-48 p-2.5 border border-gray-300 rounded-2xl shadow-lg z-[99]">
                   <Link to={`/${user?.user?._id}/trips`}>Trips List </Link>
                   <Link to={`/${user?.user?._id}/wishList`}>Wish List </Link>
                   <Link to={`/${user?.user?._id}/properties`}>Reservation List </Link>
                   <Link to={"/create-listing"}>Become A Host </Link>
                 </div>
              )}
        </div>
        
    </div>
  )
}

export default Navbar