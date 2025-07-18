import React,{useContext} from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {
    const {aToken} = useContext(AdminContext)
return (
    <div>
        <div>
            <img src={assets.logo2} alt="" className='h-20 w-60' />
            <p>{aToken? 'Admin' : 'Doctor'} </p>
        </div>
    </div>
)
}

export default Navbar