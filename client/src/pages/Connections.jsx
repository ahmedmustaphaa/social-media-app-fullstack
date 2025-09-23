import React from 'react'

import { motion } from "framer-motion"
import {Users,UserPlus,UserCheck,UserRound,MessagesSquare} from 'lucide-react'
import { dummyConnectionsData as connections,dummyFollowersData as Followers ,dummyFollowingData as following ,
  dummyPendingConnectionsData as pendingConnections
 } from '../assets/assets'
function Connections() {

  const connectionItems=[
    {num:0,con:"Followers"},
    {num:2,con:"Following"},
    {num:1,con:"following"},
    {num:0,con:"Connections"},
      
  ]
    const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  return (
      <div className='w-[100%] h-299 p-6'>
      <h1 className='text-3xl font-bold text-[#0F172B]'>Connections</h1>
      <h3 className='text-[16px] text-[gray] pt-2'>Manage your network and discover new connections</h3>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className='flex items-center gap-2 flex-wrap mt-8'   >
        {connectionItems.map((c,index)=>(
          <motion.div    variants={cardVariants} transition={{duration:0.6, ease:"easeInOut"}}   key={index} className='px-6 py-6 shadow-xl rounded-lg md:w-[200px] w-[140px] text-center '>
                   <h3>{c.num}</h3>
             <h2>{c.con}</h2>
      
          </motion.div>
        ))}
      </motion.div>
      
   

    </div>
  )
}

export default Connections
