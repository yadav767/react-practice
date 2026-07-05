import React, { useState } from 'react'
import { nanoid } from "nanoid";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../store/actions/userAction';
import { useForm } from 'react-hook-form'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, reset, handleSubmit } = useForm()

    const loginHandler = (user) => {
        user.id = nanoid()
        user.isAdmin=false
        dispatch(asyncRegisterUser(user))
        navigate("/login")
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit(loginHandler)} className='w-1/4'>
                <input {...register("username")} type="text" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='Enter user name ...' name='username' />
                <input {...register("email")} type="email" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='test@test.com.....' name='email' />
                <input {...register("password")} type="password" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='**********' name='password' />
                <button className='px-5 py-3 bg-fuchsia-600 rounded-3xl mt-5'>Register</button>
            </form>

            <p className='mt-5 mr-[130px]'>Already have an account ? <Link className='text-blue-500' to="/login" >Login</Link></p>
        </div>
    )
}

export default Register