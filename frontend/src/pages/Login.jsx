import React, { useState } from 'react'
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { asyncLoginUser } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    const { register, reset, handleSubmit } = useForm()

    const loginHandler = (user) => {
        dispatch(asyncLoginUser(user))
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit(loginHandler)} className='w-1/4'>
                <input {...register("email")} type="email" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='test@test.com.....' name='email' />
                <input {...register("password")} type="password" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='**********' name='password' />
                <button className='px-5 py-3 bg-fuchsia-600 rounded-3xl mt-5'>Login </button>
            </form>

            <p className='mt-5 mr-[130px]'>Don't have an account ? <Link className='text-blue-500' to="/register" >Register</Link></p>
        </div>
    )
}

export default Login