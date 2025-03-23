'use client'
import TestimonialCard from '@/component/testimonialCard'
import { useDevice } from '@/hooks/useDevice'
import React from 'react'
import { motion, useTime, useTransform } from 'framer-motion'

const Testimonial = () => {
    const testimonialData = [
        {
            "text": "This app made organizing our local cricket league so easy! Scheduling matches, managing teams, and tracking stats has never been smoother.",
            "imageSrc": "https://randomuser.me/api/portraits/men/1.jpg",
            "name": "Rahul Verma",
            "username": "rahul-v",
            "role": "Tournament Organizer"
        },
        {
            "text": "The AI-powered assistant helped us strategize better and optimize our team selection. A must-have for serious teams!",
            "imageSrc": "https://randomuser.me/api/portraits/men/2.jpg",
            "name": "Sandeep Patil",
            "username": "sandeep-p",
            "role": "Team Captain"
        },
        {
            "text": "I love how the app automates everything from fixture generation to real-time score updates. It's like having a personal tournament manager!",
            "imageSrc": "https://randomuser.me/api/portraits/women/1.jpg",
            "name": "Priya Sharma",
            "username": "priya-s",
            "role": "League Administrator"
        },
        {
            "text": "We used to rely on spreadsheets, but this app completely changed how we manage our tournaments. A lifesaver for coaches!",
            "imageSrc": "https://randomuser.me/api/portraits/men/3.jpg",
            "name": "Ankit Singh",
            "username": "ankit-s",
            "role": "Cricket Coach"
        },
        {
            "text": "The real-time analytics and match insights help us improve our game. The AI-driven suggestions are game-changers!",
            "imageSrc": "https://randomuser.me/api/portraits/men/4.jpg",
            "name": "Vikram Joshi",
            "username": "vikram-j",
            "role": "Player"
        },
        {
            "text": "Setting up a tournament was so easy! Our community cricket event ran smoothly with automated fixtures and score tracking.",
            "imageSrc": "https://randomuser.me/api/portraits/women/2.jpg",
            "name": "Neha Kapoor",
            "username": "neha-k",
            "role": "Event Organizer"
        },
        {
            "text": "The app helped our school team practice better by tracking match stats and player performance. Love the easy interface!",
            "imageSrc": "https://randomuser.me/api/portraits/men/5.jpg",
            "name": "Arjun Mehta",
            "username": "arjun-m",
            "role": "School Coach"
        },
        {
            "text": "AI-powered suggestions gave us an edge in planning our matches. Never going back to old methods!",
            "imageSrc": "https://randomuser.me/api/portraits/men/6.jpg",
            "name": "Rohit Desai",
            "username": "rohit-d",
            "role": "Club Captain"
        },
        {
            "text": "Managing multiple tournaments at once is effortless. The notifications keep all teams updated!",
            "imageSrc": "https://randomuser.me/api/portraits/women/3.jpg",
            "name": "Simran Kaur",
            "username": "simran-k",
            "role": "Tournament Coordinator"
        },
        {
            "text": "We hosted a corporate cricket tournament with this app. It made scheduling and score updates seamless. Highly recommended!",
            "imageSrc": "https://randomuser.me/api/portraits/men/7.jpg",
            "name": "Amit Taneja",
            "username": "amit-t",
            "role": "Corporate Event Manager"
        }
    ];

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
                    <h2 className='relative z-10 bg-white px-2 py-1 rounded-lg'>Trusted by Cricketers</h2>
                    <motion.div className='absolute  -inset-0.5 rounded-lg'
                        style={{
                            background: rotateColor
                        }}
                    ></motion.div>
                </div>                <h2 className="mainTitle">What user says about us</h2>
                <p className="subtitle">We value your feedback and strive to provide the best possible experience for our users. Your satisfaction is our top priority.</p>
                <div className='flex justify-center gap-4'>
                    {device === 'ismobile' && <>
                        <TestimonialCard testimonials={firstColumn} duration={15} classname="" />
                    </>}

                    {device === 'tablet' && <>
                        <TestimonialCard testimonials={secondColumn} duration={15} classname="" />
                        <TestimonialCard testimonials={thirdColumn} duration={20} classname="" />
                    </>}
                    {device === 'bigsreen' && <>
                        <TestimonialCard testimonials={firstColumn} duration={15} />
                        <TestimonialCard testimonials={secondColumn} duration={18} />
                        <TestimonialCard testimonials={thirdColumn} duration={23} />
                    </>}
                </div>
            </div>

        </section>
    )
}

export default Testimonial