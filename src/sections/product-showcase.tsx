'use client'
import React, { useRef } from 'react'
import circle from "@/assets/circle.webp"
import { motion, useScroll, useTransform, useTime } from 'framer-motion'
const ProductShowcase = () => {
    const productRef = useRef(null);
    const time = useTime()
    const { scrollYProgress } = useScroll({
        target: productRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const rotate = useTransform(time, [0, 3000], [0, 360], {
        clamp: false
    })
    const rotateColor = useTransform(rotate, (r) => `conic-gradient( from ${r}deg,#090979,#4747d2,#5dcb31,#0c1fa4)`)
    return (
        <section className='bg-gradient-to-b from-[rgb(255,255,255)] to-[#D2DCFF] py-32 overflow-x-clip' ref={productRef}>
            <div className='container mx-auto text-black flex flex-col items-center justify-center gap-2  px-4'>
                <div className='text-center flex flex-col justify-center items-center gap-3'>
                    <div className='tagTitle relative'>
                        <h2 className='relative z-10 bg-white px-2 py-1 rounded-lg'>welcome to our product showcase</h2>
                        <motion.div className='absolute -inset-0.5 rounded-lg'
                            style={{
                                background: rotateColor
                            }}
                        ></motion.div>
                    </div>
                    <h2 className='mainTitle'>Host & Play Cricket Tournaments with Ease!</h2>
                    <p className='text-[22px] md:text-[25px] text-center tracking-tighter text-[#383a41] leading-[30px]'>A seamless way to create, manage, and enjoy competitive cricket matches</p>
                </div>
                <div className="w-full relative justify-center  flex">
                    <img
                        src="https://img.freepik.com/free-vector/gradient-tournament-schedule-template_23-2149639200.jpg?t=st=1742739540~exp=1742743140~hmac=7efdfb35c532ea2eaec048c3e9e4f4213d598ff7844775b4ecd86a688a46677b&w=996"
                        alt="Product"
                        className="md:w-[90%] w-full max-h-[500px] object-cover rounded-xl shadow-2xl mt-10"
                        loading="lazy"
                    />
                    <motion.img src={circle.src} alt="circle" width={200} height={200} className=" absolute top-[220px] right-[-30px] invisible md:visible" style={{ translateY: translateY }} />
                    <motion.img src={circle.src} alt="circle" width={200} height={200} className=" absolute bottom-[120px] left-[-30px] invisible md:visible" style={{ translateY: translateY }} />
                </div>

            </div>

        </section >
    )
}

export default ProductShowcase