import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from './api/axiosconfig'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import { asyncGetUser } from './store/actions/userAction'

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asyncGetUser())
  },[])

  return (
    <div className='h-screen w-screen bg-gray-800 p-[2%] text-white'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App