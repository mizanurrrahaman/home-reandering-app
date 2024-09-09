import React from 'react'

const Hero = () => {
  return (
    <div className=" max-w-6xl mx-auto">
        <div className="max-w-6xl lg:mx-auto p-5 md:px-10 lg:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className=" flex flex-col justify-center gap-8">
             <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]"> RentRite: Feel at Home, Whatever You Are! </h1>
              <p className="text-[20px] md:text-[24px] font-normal leading-[30px] md:leading-9 tracking-[2%]"> 
              RentRite is your go-to platform for finding the perfect rental property, whether you're moving across town or across the globe. We make it easy for you to search, compare, and book rental homes, apartments, and vacation properties that match your lifestyle and budget.  </p>
          </div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjKgF1UWw1tvIENWm1mdQLiPRkqmw7JGshw&s" alt="" width={1000} height={1000} className="max-h-[70vh] object-contain object-center"/>
        </div>
    </div>
  )
}

export default Hero