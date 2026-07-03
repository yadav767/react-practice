import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center'>
            <form className='w-1/4'>
                <input type="text" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='Enter user name ...' name='username' />
                <input type="text" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='test@test.com.....' name='email' />
                <input type="text" className=' mb-5 outline-0 text-2xl w-full px-5 py-5 border-b border-amber-500' placeholder='**********' name='password' />   
                <button className='px-5 py-3 bg-fuchsia-600 rounded-3xl mt-5'>Login In</button>
            </form>
        </div>
    )
}

export default Login