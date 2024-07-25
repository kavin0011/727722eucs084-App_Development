import React, { useState } from 'react';

const Login = () => {
    const [reg, setReg] = useState(true);

    const switchReg = () => {
        setReg(!reg);
    };

    return (
        <div className='flex justify-center bg-gradient-to-r from-green-300 to-blue-200  min-h-screen items-center'>
            <div className='bg-white shadow-3xl  p-10 rounded-lg'>
                {reg && (
                    <div>
                        <p className='text-3xl font-serif mb-5 text-center text-gray-800'>Login</p>
                        <form className='grid grid-rows-3 gap-4'>
                            <div><input type="email" className='w-full border border-gray-300 rounded-md p-2' placeholder='Email' /></div>
                            <div><input type="password" className='w-full border border-gray-300 rounded-md p-2' placeholder='Password' /></div>
                            <div><button className='w-full border border-blue-500 rounded-md bg-blue-500 text-white py-2 hover:bg-blue-600'>Sign in</button></div>
                        </form>
                    </div>
                )}
                {!reg && (
                    <div>
                        <p className='text-3xl font-serif mb-5 text-center text-gray-800'>Register</p>
                        <form className='grid grid-rows-4 gap-4' onSubmit={() => { }}>
                            <div><input type="text" className='w-full border border-gray-300 rounded-md p-2' placeholder='Name' /></div>
                            <div><input type="date" className='w-full border border-gray-300 rounded-md p-2' placeholder='DOB' /></div>
                            <div><input type="email" className='w-full border border-gray-300 rounded-md p-2' placeholder='Email' /></div>
                            <div><input type="password" className='w-full border border-gray-300 rounded-md p-2' placeholder='Password' /></div>
                            <div><button className='w-full border border-blue-500 rounded-md bg-blue-500 text-white py-2 hover:bg-blue-600'>Register</button></div>
                        </form>
                    </div>
                )}
            {reg && (
                <p className='text-1xl flex'>
                    If you are a new user
                    <span className='text-sm px-1 cursor-pointer text-blue-500 ml-2 underline' onClick={switchReg}>
                    Register
                    </span>
                </p>
            )}
            </div>
        </div>
    );
};

export default Login;
