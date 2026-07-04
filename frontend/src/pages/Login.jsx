import React, { useState } from 'react'
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password,
        }
        console.log(data);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={submitHandler} className='w-1/4'>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='test@test.com.....' name='email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='**********' name='password' />
                <button className='px-5 py-3 bg-fuchsia-600 rounded-3xl mt-5'>Login </button>
            </form>

            <p className='mt-5 mr-[130px]'>Don't have an account ? <Link className='text-blue-500' to="/register" >Register</Link></p>
        </div>
    )
}

export default Login