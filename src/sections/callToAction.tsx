import React from 'react'

const CallToAction = () => {
    return (
        <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-24'>
            <div className='container mx-auto px-5 flex flex-col gap-6 items-center'>
                <div className='max-w-[600px] mx-auto'>
                    <h2 className='mainTitle'>singup for free</h2>
                    <p className='subtitle mt-6'>
                        Get started for free, no credit card required. Create your first project today and see how it can help you.
                    </p>
                </div>
                <div className='flex gap-3 justify-center'>
                    <button className='btn'>Get Started</button>
                    <button className='text-black leading-tight'>Watch a demo</button>
                </div>
            </div>
        </section>
    )
}

export default CallToAction