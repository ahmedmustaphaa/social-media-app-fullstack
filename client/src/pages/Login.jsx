import React from 'react'
import { assets } from '../assets/assets'
import {Star, StarIcon} from 'lucide-react'
import {SignIn} from '@clerk/clerk-react'
function Login() {
  return (
    <div className='min-h-screen   object-cover ' style={{ backgroundImage: `url(${assets.bgImage})` }}>
      <div className='mrelative z-10 w-full md:w-[90%] m-auto flex flex-col md:flex-row  justify-between gap-10 p-6 md:p-16'>
              <div className='md-w-[40%] '>
      <img src={assets.logo} alt="" className='h-12' />
      <div className='flex flex-col py-4 md:py-8 '>
        <div className='flex  gap-2 '>
          <img src={assets.group_users} className='h-12' alt="" />
          <div>

            <h1 className='flex  '>{Array(5).fill(0).map(()=> <div className='flex items-center  '><Star className='fill-[#FD9A00] size-4 h-4 text-transparent'/></div>)}</h1>
            <h3 className='text-[#1C398E] text-[16px] font-bold'>Used by 12k+ developers</h3>

           

          </div>
          
        </div>
        
    <h1 className="bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent text-5xl md:text-5xl pt-4 font-extrabold leading-tight tracking-tight">
  <span className="block">More than just</span>
  <span className="block ">friends truly</span>
  <span className="block">connect</span>
</h1>

<p className='text-[#1C398E] text-2xl pt-4'>connect with global community on pingup.</p>
 
      </div>

     </div>
          {/* Right Section (Login Card) */}
        <div className="flex-1 max-w-md w-full">
          <div className="  p-6 md:p-10 ">
            <SignIn />
          </div>
        </div>
     </div>
    

    </div>
  )
}

export default Login
