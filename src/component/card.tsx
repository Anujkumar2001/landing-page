'use client'
import React, { useEffect } from 'react'
import { MdDone } from "react-icons/md";
import { motion, useAnimate } from 'framer-motion';
interface CardProps {
    title: string;
    monthlyPrice: number;
    buttonText: string;
    popular: boolean;
    inverse: boolean;
    features: string[];
    id: number;
}



const Card = ({ title, monthlyPrice, buttonText, popular, inverse, features, id }: CardProps) => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animate([
            [".letter", { y: -48 }, { duration: 0.2 }],
            ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }], // Runs at the same time as the previous step
            ["button", { scale: 1 }, { duration: 0.1 }],
            [".letter", { y: 0 }, { duration: 0.00001 }],
        ]);
    }, [animate]);
    return (
        <div className={`card ${inverse ? 'bg-[#191919] text-white' : 'text-black'} max-w-[300px] min-w-[150px]`}>
            <div className='flex items-center justify-between'>
                <h3 className={`${inverse ? 'text-white' : 'text-black'}`}>{title}</h3>
                {popular && <motion.span
                    animate={{
                        backgroundPositionX: '100%'
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'linear'
                    }}
                    className={` border-[1px] border-gray-300 rounded-md bg-gradient-to-r from-[#7c64c8] to-[#ffffff] text-transparent bg-clip-text  px-2  py-1 text-[12px] ${inverse ? 'bg-white text-black' : 'bg-[#191919] text-white'} [background-size:200%] text-transparent bg-[linear-gradient(90deg, #5231c0, #021143)]`}>Popular</motion.span>}
            </div>
            <div>
                <span className={`${inverse ? 'text-white' : 'text-black'} text-2xl font-bold tracking-tight`}>{monthlyPrice}</span>
                <span className={`${inverse ? 'text-white' : 'text-black'} text-sm font-normal tracking-tight`}>/month</span>
            </div>
            <button
                ref={scope}
                className={`bg-[#191919] w-full py-2 px-4 rounded-xl ${inverse ? 'bg-white text-black' : 'bg-[#191919] text-white'} mt-4`}>{buttonText}</button>
            <ul className='flex flex-col gap-2 mt-4'>
                {features.map((feature) => (
                    <li key={id} className={`flex gap-3 items-center ${inverse ? 'text-white' : 'text-black'}`}>  <MdDone />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Card