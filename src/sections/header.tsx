'use client'
import React from 'react'
import logo from "@/assets/logo.png"
import menuIcon from "@/assets/menuicon.png"
import Image from 'next/image'
import { useDevice } from '@/hooks/useDevice'

const Navbar = () => {
    const device = useDevice()
    return (
        <header className=' sticky top-0 backdrop-blur-sm z-50'>
            <div className=' items-center justify-center bg-black hidden md:flex py-3'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente maiores velit molestiae</p></div>
            {/* // main navbar -------- */}
            <div className='py-5 px-5'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <Image src={logo} alt="logo" width={40} height={40} />
                        <Image className='md:hidden' src={menuIcon} alt="menu" width={40} height={40} />
                        {(device === 'tablet' || device === 'bigsreen') && <nav className=' md:flex  gap-6 text-black/60 items-center z-50'>
                            <a href="#">About</a>
                            <a href="">Home</a>
                            <a href="">Features</a>
                            <a href="">Customer</a>
                            <button className='bg-black text-white py-2 px-4 rounded inline-flex tracking-tight'>Get Started</button>
                        </nav>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar