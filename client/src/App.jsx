import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Createpost from './pages/Createpost'
import {useUser} from '@clerk/clerk-react'

import { Toaster } from "react-hot-toast";
import Layout from './pages/Layout'
function App() {

  const {user} =useUser();
  return (
    <div>
               <Toaster position="top-center" />
      <Routes>
        <Route path='/' element={!user ? <Login/>:<Layout/>}>
        <Route index element={<Feed/>}></Route>
        <Route path='messages'  element={<Messages/>}></Route>
        <Route path='connections'  element={<Connections/>}></Route>
        <Route path='discover'  element={<Discover/>}></Route>
        <Route path='profile'  element={<Profile/>}></Route>
        <Route path='profile/:profileId'  element={<Profile/>}></Route>
        <Route path='create-postc'  element={<Createpost/>}></Route>
        <Route path='messages/:userId'  element={<ChatBox/>}></Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
