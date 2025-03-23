import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.png"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className='bg-black text-sm text-[#BCBCBC]'>
            <div className='container mx-auto px-5 py-10 flex flex-col justify-center items-center'>
                <div className="relative flex items-center justify-center w-[60px] h-[60px]">
                    {/* Gradient Background */}
                    <div className="absolute w-[70px] h-[70px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md opacity-50"></div>

                    {/* Square Box */}
                    <div className="relative z-10 w-[60px] h-[60px] bg-gray-300 rounded-lg flex items-center justify-center shadow-md">
                        <Image src={logo} alt="logo" width={40} height={40} />
                    </div>
                </div>
                <nav className='flex flex-col md:flex-row gap-6 justify-center items-center mt-4'>
                    <a href="#" className='nav-item'>Home</a>
                    <a href="#" className='nav-item'>About</a>
                    <a href="#" className='nav-item'>Features</a>
                    <a href="#" className='nav-item'>Customer</a>
                    <a href="#" className='nav-item'>Pricing</a>
                </nav>
                <div className='flex flex-col items-center'>
                    <div className='flex gap-4 mt-4 mb-4'>
                        <a href="#" className='social-icon'><AiFillFacebook /></a>
                        <a href="#" className='social-icon'><AiFillTwitterCircle /></a>
                        <a href="#" className='social-icon'><AiFillLinkedin /></a>
                        <a href="#" className='social-icon'><AiFillInstagram /></a>
                    </div>
                    <p className='text-gray-400'>Copyright © 2023. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer