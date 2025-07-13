import React from 'react'
import { assets } from "../assets/assets_frontend/assets.js";

const Contact = () => {
  return (
    <div>

      <div className='text-center text-green-900 text-2xl pt-10 font-semibold text-[#707070]'>
        <p>CONTACT <span className='text-green-900 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded shadow-lg' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-green-800'>OUR OFFICE</p>
          <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className=' text-gray-500'>Tel: +91 1234567890 <br /> Email: hardikdhameeja2105@gmail.com</p>
          <p className=' font-semibold text-lg text-green-800'>CAREERS AT MEDICO</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 font-semibold'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact