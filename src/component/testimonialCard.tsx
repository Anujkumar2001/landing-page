'use client'
import React from 'react'
import { motion } from 'framer-motion'
const TestimonialCard = ({ testimonials, classname, duration = 10 }: any) => {
    return (
        <div className='overflow-hidden pt-7 [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_75%,transparent)] max-h-[700px] px-5'>
            <motion.div
                animate={{
                    translateY: '-50%'
                }}
                transition={{
                    duration: duration,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop'
                }}
                className={`flex gap-6  flex-col max-w-[400px]  ${classname} `}>
                {new Array(4).fill(0).map((_, index) => (
                    (testimonials ?? []).map(({ text, imageSrc, name, username }: any) => {
                        return (
                            <div className='card'>
                                <p className='text-black font-medium leading-tight '>{text}</p>
                                <div className='flex items-center gap-4'>
                                    <img src={imageSrc} alt={username} width={50} height={50} />
                                    <div>
                                        <h3 className='text-black'>{name}</h3>
                                        <p className='text-black'>{username}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                ))}

            </motion.div>
        </div>
    )
}

export default TestimonialCard