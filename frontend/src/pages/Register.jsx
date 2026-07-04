import React, { useState } from 'react'
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerHandler = (e) => {
        e.preventDefault()
        let data = {
            username: username,
            email: email,
            password: password,
            id: nanoid()
        }
        console.log(data);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={registerHandler} className='w-1/4'>
                <input onChange={(e) => setUsername(e.target.value)} type="text" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='Enter user name ...' name='username' />
                <input onChange={(e) => setEmail(e.target.value)} type="email" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='test@test.com.....' name='email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='**********' name='password' />
                <button className='px-5 py-3 bg-fuchsia-600 rounded-3xl mt-5'>Register</button>
            </form>

            <p className='mt-5 mr-[130px]'>Already have an account ? <Link className='text-blue-500' to="/login" >Login</Link></p>
        </div>
    )
}

export default Register