'use client'
import React, { useRef } from 'react'
import jio from "@/assets/jio.png"
import Image from 'next/image'
import { motion, useMotionValueEvent, useScroll, useTransform, } from 'framer-motion'

const LogoTicker = () => {

    return (
        <div className='container mx-auto py-10 md:py-12' >
            <div className='overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_30%,black_30%,transparent)]'>
                <motion.div className='flex gap-16 flex-none items-center justify-center' animate={{
                    translateX: '-40%'
                }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }}
                >
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />  <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />  <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                    <Image src={jio} alt="jio" width={80} height={80} />
                </motion.div>
            </div>
        </div>
    )
}

export default LogoTicker