import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*left side */}
            <div>
            <img className = 'mb-5 w-40' src={assets.logo2} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6 font-semibold'>Medico — Your trusted partner for easy, secure doctor appointments. Book consultations, manage your health records, and stay connected with top healthcare professionals anytime, anywhere.</p>
            </div>
            {/* center side */}
            <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className=' font-semibold flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            {/* right side */}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className=' font-semibold flex flex-col gap-2 text-gray-600'>
                <li>+91 1234567890</li>
                <li>hardikdhameeja2105@gmail.com</li>
            </ul>
            </div>
        </div>
        <div>
            {/*copyright text */}
            <hr/>
            <p className='py-5 text-sm text-center font-bold'> Copyright 2025 @ Hardik - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;