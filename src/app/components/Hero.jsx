'use client'
import React, { useEffect, useRef } from 'react'
import background from '@/images/background.jpg'
import Wrapper from './Wrapper'
import Button from './Button'
import PlayAnimation from './PlayAnimation'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import Link from 'next/link'

gsap.registerPlugin(SplitText);

const Hero = () => {
    const textRef = useRef();
    
    // Three cards data - customize with your content
    const cardsData = [
        {
            id: 1,
            title: "Sailfast: Ride-Hailing Platform ",
            description: "Fast, safe, and affordable ride-hailing at your fingertips. Connect with verified drivers, reduce wait times, and enjoy smooth daily commuting or business travel.",
            imageColor: "bg-gradient-to-br from-blue-500 to-purple-600",
            link: "/shop/smart-devices"
        },
        {
            id: 2,
            title: "Marice: Food Delivery Platform ",
            description: "On-demand food delivery from local restaurants and vendors. Enjoy timely, reliable service while supporting local businesses and delivery partners.",
            imageColor: "bg-gradient-to-br from-green-500 to-teal-600",
            link: "/shop/home-automation"
        },
        {
            id: 3,
            title: "EsomGod Academy: Clarity, Personal Growth & Mental Transformation ",
            description: "EsomGod Academy is a purpose-driven mentorship and learning platform empowering underrepresented and overlooked individuals to gain clarity, transform their mindset, and discover their life purpose. Through structured mentorship, practical guidance, and community support, participants achieve personal growth, financial literacy, and mental transformation for lasting impact.",
            imageColor: "bg-gradient-to-br from-orange-500 to-red-600",
            link: "/shop/wearable-tech"
        }
    ];

    return (
        <>
            <div className='h-auto' style={{
                backgroundImage: `url(${background.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                clipPath: 'polygon(100% 85.21%, 100% 0%, 0% 0%, 0% 85.21%, 50% 100%)'
            }}>
                <Wrapper className={'py-30 grid md:grid-cols-2 grid-cols-1 items-center'}>
                    <div className="flex flex-col space-y-5">
                        <h1 ref={textRef} className='font-bold text-white md:text-5xl text-3xl md:leading-15'>Nectarlite Technology</h1>
                        <h1 ref={textRef} className='font-bold text-white md:text-5xl text-3xl md:leading-15'>Building Technology <br /> for Everyday Life </h1>
                        <p className='text-white text-xl split-word'>Nectarlite Technology is a multi-product ecosystem delivering digital solutions that simplify everyday life, while shaping the future of essential services through innovative, integrated products.</p>
                        <PlayAnimation />
                    </div>
                    <div className="p-10 rounded-2xl flex flex-col space-y-5 bg-white md:w-[70%] ms-auto w-full md:my-0 my-5">
                        <span className="font-bold text-black text-2xl">Schedule Your Appointment</span>
                        <p className="font-light">
                            We here to help you 24/7 with experts
                        </p>
                        <form action="" className='flex flex-col space-y-5'>
                            <input id='name' type='text' placeholder='Name' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                            <input id='email' type='email' placeholder='Email' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                            <input id='phone' type='tel' placeholder='Phone' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                            <input id='service' type='text' placeholder='Service Required' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                            <Button text={'Submit Now'} className={'w-full rounded-sm font-semibold p-5'} />
                        </form>
                    </div>
                </Wrapper>
            </div>

            {/* Three Cards Section */}
            <Wrapper className="py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Product Categories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our innovative technology solutions designed for modern living
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cardsData.map((card) => (
                        <div 
                            key={card.id} 
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Card Image/Color Placeholder */}
                            <div className={`h-48 ${card.imageColor} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                {/* You can replace this with actual images */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-4xl font-bold opacity-80">
                                        {card.title.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {card.description}
                                </p>
                                
                                {/* Shop Now Link */}
                                <Link 
                                    href={card.link}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group/link"
                                >
                                    <span>order Now</span>
                                    <svg 
                                        className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    ))}
                </div>

            </Wrapper>
        </>
    );
};

export default Hero;