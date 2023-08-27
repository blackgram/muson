import React from 'react'

const Footer = () => {
  return (
    <div className='px-[2rem] md:px-[100px] pb-3 md:pb-[70px] pt-[0px] w-full'>
        <div className='flex flex-col lg:flex-row gap-[2rem] lg:gap-0 justify-between items-center p-[50px] font-600 text-[16px]'>
            <div className='flex flex-col items-center lg:items-start '>
                <img src='/assets/logo.svg' />
                <div className='my-[20px]'>No 23 Admiralty way, Lekki, lagos state </div>
                <div className='flex gap-[12px]'>
                    <a href='/'><img src='/assets/Facebook.svg'/></a>
                    <a href='/'><img src='/assets/Instagram.svg'/></a>
                    <a href='/'><img src='/assets/Twitter.svg'/></a>
                    <a href='/'><img src='/assets/LinkedIn.svg'/></a>
                </div>
            </div>
            <div className=''>
                <div>Subscribe</div>
                <div className='flex flex-col md:flex-row my-[15px]'>
                    <div className='w-[275px] h-[50px] p-[12px] border border-black '><input placeholder='Enter your email'/></div>
                    <a href='/'><div className='w-[120px] h-[50px] mt-[10px] md:mt-0 md:ml-[16px] flex items-center justify-center border border-black hover:bg-black hover:text-white ' >Subscribe</div></a>
                </div>
                <div className='font-400 text-[12px] '>By subscribing you agree to with our Privacy Policy</div>
            </div>
        </div>
        <div className='bg-black w-full h-[1px] mb-[2rem] '/>
        <div className='flex flex-col text-center md:text-left gap-[20px] md:gap-0 md:flex-row justify-center items-center md:items-start md:justify-between'>
            <div className='flex gap-[16px] lg:gap-[24px]'>
                <a href='/'><div>Privacy Policy</div></a>
                <a href='/'><div>Terms of Service</div></a>
                <a href='/'><div>Cookies Settings</div></a>
            </div>
            <div>©2022, All right reserved.</div>
        </div>
    </div>
  )
}

export default Footer