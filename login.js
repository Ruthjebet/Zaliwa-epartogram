import Logo from '../public/Zaliwalogo.svg'
import Image from 'next/image'
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md'
import React, { useState } from "react";
import validator from 'validator'


export default function Login() {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError(null)
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen p-6 ">
            <div className='bg-fuchsia-100 rounded-2xl shadow-2xl flex w-full place-items-center' >


                <div className='hidden lg:inline-block w-1/2 p-5 bg-fuchsia-100 rounded-tl-2xl rounded-bl-2xl  object-center py-36 px-8 justify-center items-center h-full '>
                    <div className='place-items-center'>
                        <Image
                            className='mx-auto'
                            src={Logo}
                            alt="Picture of the author"
                            width="500px"
                            height="500px"
                            placeholder="empty" // placeholder="empty" 
                        />

                    </div>
                </div>


                <div className=' w-full lg:w-1/2 p-5 bg-white text-purple-800 py-36 px-8 h-full ' >
                    <h2 className='font-bold text-3xl'>Welcome Back</h2>
                    <p>Just a couple of clicks and we start</p>
                    <div className='text-left p-15 mb-2 w-full '>
                        <h3 className='font-bold text-3xl mb-2'>Sign in</h3>

                        <div className='flex-col items-center '>
                            <div className='flex items-center bg-gray-100  p-3  mb-3'>
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input onChange={(e) => validateEmail(e)} type="email" name='email' placeholder='johndoe@gmail.com' className='text-gray-400 bg-gray-100 outline-none flex-1'></input>
                                <span style={{
                                    fontSize: 12,
                                    color: 'red',
                                }}>{emailError}</span>
                            </div>

                            <div className='flex items-center bg-gray-100  p-3  mb-3'>
                                <MdLockOutline className='text-gray-400 m-2' />
                                <input type="password" name='password' required placeholder='password' className='text-gray-400 bg-gray-100 outline-none flex-1'></input>
                            </div>
                            <a href='#' className='text-xs underline'> forgot password?</a>
                            <div className='flex items-center mb-3'>
                                <a href='./patients' className='border-2 text-center rounded-xl bg-purple-800 text-white p-3 inline-block   hover:shadow-2xl w-full'>Log in</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}