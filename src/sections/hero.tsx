'use client'
import React, { useRef } from 'react'
import setting from "@/assets/setting.webp"
import cylnder from "@/assets/cylinder.webp"
import { motion, useScroll, useTime, useTransform } from "framer-motion";
const Hero = () => {
    const heroRef = useRef(null)
    const time = useTime()
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });
    const transformY = useTransform(scrollYProgress, [0, 1], [-150, 150])
    const rotate = useTransform(time, [0, 3000], [0, 360], {
        clamp: false
    })
    const rotateColor = useTransform(rotate, (r) => `conic-gradient( from ${r}deg,#090979,#4747d2,#5dcb31,#0c1fa4)`)
    return (
        <section ref={heroRef} className="bg-[radial-gradient(ellipse_300%_100%_at_bottom_left,#183EC2,#EAEEFE_50%)] pt-10 py-20 px-5 overflow-x-clip">
            <div className="container mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Left Content */}
                <div className="flex flex-col items-start gap-4 text-center md:text-left">

                    <div className='tagTitle relative'>
                        <h2 className='relative z-10 bg-white px-2 py-1 rounded-lg'>Get Our App </h2>
                        <motion.div className='absolute  -inset-0.5 rounded-lg'
                            style={{
                                background: rotateColor
                            }}
                        ></motion.div>
                    </div>
                    <h1 className="text-5xl text-left md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#5231c0] to-[#021143] text-transparent bg-clip-text">
                        CirTournament - Create Cricket Tournament Easily
                    </h1>
                    <p className=" max-w-3xl text-xl text-left bg-gradient-to-b from-[#021143] to-[#021143] text-transparent bg-clip-text ">
                        Create Cricket Match Tournament in just a few clicks. CirTournament helps you to create a tournament with a simple and easy-to-use interface.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-black px-4 py-2 text-white rounded-sm leading-tight">
                            Get Started
                        </button>
                        <button className="text-black">Watch Video</button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full max-w-lg md:max-w-none md:w-auto md:h-[600px] flex items-center justify-center">
                    <motion.img
                        src={setting.src}
                        alt="Setting"
                        width={500}
                        height={500}
                        className="w-full max-w-sm md:max-w-lg md:h-full object-contain "
                        style={{
                            boxShadow: "none"
                        }}
                        animate={{
                            // translateY: [-30, 30],
                            rotate: [-180, 180]
                        }}
                        drag="y"
                        dragConstraints={{
                            top: -30,
                            bottom: 30,
                            left: -30,
                            right: 30
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 8,
                            repeatType: 'mirror',
                            ease: 'easeInOut'
                        }}
                    />
                    <motion.img src={cylnder.src} alt="cylinder" width={200} height={200} className="invisible md:visible absolute -top-8 -left-14 rotate-90" style={{ translateY: transformY }} />
                </div>
            </div>
        </section>
    )
}

export default Hero