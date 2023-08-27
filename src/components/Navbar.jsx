import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between md:px-[2rem] md:py-[1rem] xl:py-[1.5rem] xl:px-[100px]'>
      <a href='#'> <img src='/assets/logo.svg' alt='muson logo' className='md:max-w-[60px] lg:max-w-[1000px]' /> </a>
      <div className=' lg:text-[18px] font-bold text-[#00000080] '>
        <a href='#' className=' text-[#FD5454] md:mx-[10px] lg:mx-[20px] xl:mx-[30px] '>Home</a>
        <a href='#' className=' md:mx-[10px] lg:mx-[20px] xl:mx-[30px] '>Music</a>
        <a href='#' className=' md:mx-[10px] lg:mx-[20px] xl:mx-[30px] '>Event</a>
        <a href='#' className=' md:mx-[10px] lg:mx-[20px] xl:mx-[30px] '>Blog</a>
        <a href='#' className=' md:mx-[10px] lg:mx-[20px] xl:mx-[30px] '>Shop</a>
      </div>
      <div className='flex justify-center items-center xl:max-w-[295px]'>
        <a href='#'className='md:mr-[5px] md:max-w-[28px] lg:mr-[10px] xl:mr-[14px]' ><img src='/assets/notification.svg' alt='notification icon' /> </a>
        <a href='#' className='md:mx-[5px] md:max-w-[28px] lg:mr-[10px] xl:mx-[14px]'><img src='/assets/profile.svg' alt='profile icon' /> </a>
        <a href='#' className='md:ml-[5px] lg:mr-[10px] xl:ml-[14px]'><div className='md:w-[80px] md:h-[30px] lg:w-[100px] lg:h-[40px] xl:w-[137px] xl:h-[59px] text-white xl:text-[20px] font-bold flex items-center justify-center bg-gradient-to-r from-[#FF2525] from-70% to-[#ff252500] to-100% '>Login</div></a>
      </div>
    </div>
  )
}

export default Navbar