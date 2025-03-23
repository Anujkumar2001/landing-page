'use client'
import Card from '@/component/card'
import { useTime, useTransform } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
    const pricingData = [
        {
            "id": 1,
            "title": "Basic Plan",
            "monthlyPrice": 19,
            "buttonText": "Get Started",
            "popular": false,
            "inverse": false,
            "features": [
                "Access to basic features",
                "Limited to 2 users",
                "Email support",
                "100GB storage",
                "Advanced analytics"

            ]
        },
        {
            "id": 2,
            "title": "Pro Plan",
            "monthlyPrice": 49,
            "buttonText": "Go Pro",
            "popular": true,
            "inverse": true,
            "features": [
                "Access to all pro features",
                "Up to 10 users",
                "Priority email support",
                "10GB storage",
                "Advanced analytics",
                "100GB storage",
            ]
        },
        {
            "id": 3,
            "title": "Enterprise Plan",
            "monthlyPrice": 99,
            "buttonText": "Contact Us",
            "popular": false,
            "inverse": false,
            "features": [
                "Access to all features",
                "Unlimited users",
                "24/7 phone & email support",
                "100GB storage",
                "Advanced analytics",
                "Dedicated account manager",
                "Custom integrations",
                "Custom integrations",
            ]
        }
    ]
    const time = useTime()
    const rotate = useTransform(time, [0, 3000], [0, 360], {
        clamp: false
    })
    const rotateColor = useTransform(rotate, (r) => `conic-gradient( from ${r}deg,#090979,#4747d2,#5dcb31,#0c1fa4)`)
    return (
        <section className=' bg-white'>
            <div className='container mx-auto px-5 py-32'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <div className='tagTitle relative'>
                        <h2 className='relative z-10 bg-white px-2 py-1 rounded-lg'>New version is here</h2>
                        <motion.div className='absolute  -inset-0.5 rounded-lg'
                            style={{
                                background: rotateColor
                            }}
                        ></motion.div>
                    </div>                    <h1 className="mainTitle text-black">Simple pricing for your business</h1>
                </div>
                <div className='flex gap-6 mt-10 flex-col md:flex-row items-center md:items-end justify-center'>
                    {pricingData.map((card) => <Card key={card.title} {...card} />)}
                </div>
            </div>
        </section>
    )
}

export default Pricing