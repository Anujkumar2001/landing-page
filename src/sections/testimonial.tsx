'use client'
import TestimonialCard from '@/component/testimonialCard'
import { useDevice } from '@/hooks/useDevice'
import React from 'react'
import { motion, useTime, useTransform } from 'framer-motion'

const Testimonial = () => {
    const testimonialData = [
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            "imageSrc": "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            "name": "Anuj Kumar Sharma",
            "username": "anuj-ks"
        },
    ]
    const firstColumn = testimonialData.slice(0, 3)
    const secondColumn = testimonialData.slice(3, 6)
    const thirdColumn = testimonialData.slice(6, 9)
    const device = useDevice()
    const time = useTime()
    const rotate = useTransform(time, [0, 3000], [0, 360], {
        clamp: false
    })
    const rotateColor = useTransform(rotate, (r) => `conic-gradient( from ${r}deg,#090979,#4747d2,#5dcb31,#0c1fa4)`)
    return (
        <section className='bg-white'>
            <div className="container mx-auto px-5  flex flex-col items-center justify-center gap-6">
                <div className='tagTitle relative'>
                    <h2 className='relative z-10 bg-white px-2 py-1 rounded-lg'>New version is here</h2>
                    <motion.div className='absolute  -inset-0.5 rounded-lg'
                        style={{
                            background: rotateColor
                        }}
                    ></motion.div>
                </div>                <h2 className="mainTitle">What user says about us</h2>
                <p className="subtitle">We value your feedback and strive to provide the best possible experience for our users. Your satisfaction is our top priority.</p>
                <div className='flex justify-center gap-4'>
                    {device === 'ismobile' && <>
                        <TestimonialCard testimonials={firstColumn} duration={10} />
                    </>}

                    {device === 'tablet' && <>
                        <TestimonialCard testimonials={secondColumn} duration={15} />
                        <TestimonialCard testimonials={thirdColumn} duration={20} />
                    </>}
                    {device === 'bigsreen' && <>
                        <TestimonialCard testimonials={firstColumn} duration={10} />
                        <TestimonialCard testimonials={secondColumn} duration={15} />
                        <TestimonialCard testimonials={thirdColumn} duration={20} />
                    </>}
                </div>
            </div>

        </section>
    )
}

export default Testimonial