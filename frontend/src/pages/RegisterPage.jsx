import React, { useEffect, useState } from 'react';
import { LuUpload } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  
  const [passwordMatch, setPasswordMatch] = useState(true);
  
  const navigate = useNavigate()

  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword || formData.confirmPassword === ""
    );
  }, [formData.password, formData.confirmPassword]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const handleSubmit = async(e)=>{
     e.preventDefault()

    try{
       const registerForm = new FormData()
       for(var key in formData){
         registerForm.append(key, formData[key])
       }
       const response = await fetch("http://localhost:3000/api/auth/register", {
         method: "POST",
         body: registerForm,
       })
       if(response.ok){
        navigate("/login")
       }
    } catch(error){
      console.log(error)
    }

  }



  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form action='' className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName" className="p-3 rounded-lg border" value={formData.firstName} onChange={handleChange} required />
        <input type="text" placeholder="Last Name" name="lastName" className="p-3 rounded-lg border" required value={formData.lastName} onChange={handleChange} />
        <input type="email" placeholder="Email" name="email" className="p-3 rounded-lg border" required value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" className="p-3 rounded-lg border" required value={formData.password} onChange={handleChange} />
        <input type="password" placeholder="Confirm Password" name="confirmPassword" className="p-3 rounded-lg border" required value={formData.confirmPassword} onChange={handleChange} />

        {
          !passwordMatch && (
            <p className="text-red-500 text-[15px]">Passwords do not match</p>
          )
        }

        <input id="image" type="file" name="profileImage" accept="image/*" className="hidden" onChange={handleChange} required />

        <label htmlFor="image" className="flex items-center gap-3 mt-2 mb-2">
          {formData.profileImage ? (
            <img src={URL.createObjectURL(formData.profileImage)} alt="profile photo" style={{ maxWidth: "80px" }} />
          ) : (
            <LuUpload alt="add profile photo" className="w-8 h-8" />
          )}
          <p className="text-lg text-slate-700">Upload Your Photo</p>
        </label>
        <button className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-80 " disabled={!passwordMatch}>Register</button>
      </form>
      <div className="mt-5 flex gap-2">
        <p>Already have an account?</p>
        <Link to={"/login"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage



{/*

import React, { useEffect, useState } from 'react'
import { LuUpload } from "react-icons/lu";
import { Link } from "react-router-dom";


const RegisterPage = () => {
    const [fromData, setFromData ] = useState({
       firstName: " ",
       lastName: "",
       email: "",
       password:" ",
       confiramPassword:" ",
       profileImage: "",
    })
 
    //console.log(fromData)

    const [passwordMatch, setPasswordMatch] = useState(true)

    useEffect(()=>{
      setPasswordMatch(
        fromData.password === fromData.confiramPassword || fromData.confiramPassword === ""
      )
    })


    const handleChange =(e)=>{
        const {name, value, files} = e.target

        setFromData({
            ...fromData, 
            [name]: value,
            [name]: name === "profileImage" ? files[0] : value,

        })
    }

  return (
    <div className=" max-w-lg mx-auto p-3">
       <h1  className=" text-3xl text-center my-7 font-semibold"> Sing Up</h1>
       <form action='' className=" flex flex-col gap-4">
          <input type="text" placeholder=" First Name" name="firstName" className=" p-3 rounded-lg border " value={fromData.firstName} onChange={handleChange} required />
          <input type="text" placeholder=" Last Name" name="lastName" className=" p-3 rounded-lg border " required value={fromData.lastName} onChange={handleChange} />
          <input type="email" placeholder=" Email" name="email" className=" p-3 rounded-lg border " required value={fromData.email} onChange={handleChange} />
          <input type="password" placeholder=" Password" name="password" className=" p-3 rounded-lg border " required value={fromData.password} onChange={handleChange} />
           <input type="password" placeholder=" Confirm Password" name="confirmpassword" className=" p-3 rounded-lg border " required value={fromData.confiramPassword}  onChange={handleChange}  /> 
  
           {
            !passwordMatch && (
              <p className=" text-red-500 text-[15px]">Password are not match </p>
            )
          } 
        
           <input id="image" type="file" name="profileImage" accept="image/*" className="hidden" onChange={handleChange}  required /> 
          
          <label htmlFor="image" className=" flex items-center gap-3 mt-2 mb-2">
             { fromData.profileImage ? (
              <img src={URL.createObjectURL(fromData.profileImage)} alt="profile photo" style={{ maxWidth: "80px"}} />

             ) : (
              <LuUpload alt="add profile photo" className="w-8 h-8"/>
             )}
             <p className=" text-lg text-slate-700"> Upload Your Photo</p>
          </label>
           <button className=" bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95">Register </button>
       </form>
         <div className="mt-5 flex gap-2 ">
           <p>Already have a account </p>
            <Link to={"/login"}>
              <span className=" text-blue-700"> sing in</span>
            </Link>
         </div>
    </div>
  )
}

export default RegisterPage
*/}