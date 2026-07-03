import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from './api/axiosconfig'
import asyncGetUser from './store/userActions'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {


  return (
    <div className='h-screen w-screen bg-gray-800 p-[2%] text-white'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App