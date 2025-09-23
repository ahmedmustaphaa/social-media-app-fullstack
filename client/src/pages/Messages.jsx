import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { dummyConnectionsData } from '../assets/assets'
import { Eye, MessageCircleDashed } from 'lucide-react'
import { Toaster, toast } from "react-hot-toast";
function Messages() {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  useEffect(()=>{
    toast.success("wkedfjinj")
  })
  return (
    <div className='w-[100%] h-299 p-6'>
      <h1 className='text-3xl font-bold text-[#0F172B]'>Messages</h1>
      <h3 className='text-[16px] text-[gray] pt-2'>Talk to your friends and family</h3>

      <motion.div 
        className='flex flex-col md:w-[80%]'
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {dummyConnectionsData.map((dummy, index) => {
          return (
            <motion.div
              key={index}
              className='shadow-xl px-2 py-2 my-6 flex flex-col md:flex-row bg-white gap-4 md:items-center justify-between rounded-2xl'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={dummy.profile_picture} className='h-14 w-14 rounded-full' alt="" />
              <div className='flex-2'>
                <h1 className='text-[#314158] font-semibold'>{dummy.full_name}</h1>
                <h2 className='text-[gray]'>@{dummy.username}</h2>
                <h2 className='text-[#4A5565] line-clamp-2'>{dummy.bio}</h2>
              </div>

              <div className="flex md:flex-col gap-3 pr-4">
                {/* رسائل */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 5 }}
                  className="flex items-center justify-center h-10 w-10 bg-[#F8FAFC] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <MessageCircleDashed className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                </motion.div>

                {/* مشاهدة */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: -5 }}
                  className="flex items-center justify-center h-10 w-10 bg-[#F8FAFC] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <Eye className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Messages
