'use client'
import React, { useEffect, useRef } from 'react'
import background from '@/images/background.jpg'
import mariceImage from '@/images/marice.jpeg'
import Wrapper from './Wrapper'
import Button from './Button'
import PlayAnimation from './PlayAnimation'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

gsap.registerPlugin(SplitText);

const Hero = () => {
    const textRef = useRef();
    
    // Three cards data - mixing images and gradients
    const cardsData = [
        {
            id: 2,
            title: "Marice: Food Delivery Platform ",
            description: "On-demand food delivery from local restaurants and vendors. Enjoy timely, reliable service while supporting local businesses and delivery partners.",
            image: mariceImage, // Has actual image
            imageColor: null,
            link: "/shop/home-automation"
        },
        {
            id: 3,
            title: "EsomGod Academy: Clarity, Personal Growth & Mental Transformation ",
            description: "EsomGod Academy is a purpose-driven mentorship and learning platform empowering underrepresented and overlooked individuals to gain clarity, transform their mindset, and discover their life purpose. Through structured mentorship, practical guidance, and community support, participants achieve personal growth, financial literacy, and mental transformation for lasting impact.",
            image: null,
            imageColor: "bg-gradient-to-br from-orange-500 to-red-600", // Gradient fallback
            link: "/shop/wearable-tech"
        },
        {
            id: 1,
            title: "Sailfast: Ride-Hailing Platform ",
            description: "Fast, safe, and affordable ride-hailing at your fingertips. Connect with verified drivers, reduce wait times, and enjoy smooth daily commuting or business travel.",
            image: null,
            imageColor: "bg-gradient-to-br from-blue-500 to-purple-600", // Gradient fallback
            link: "/shop/smart-devices"
        },
    ];

    return (
        <>
            <div className='h-auto' style={{
                backgroundImage: `url(${background.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                clipPath: 'polygon(100% 85.21%, 100% 0%, 0% 0%, 0% 85.21%, 50% 100%)'
            }}>
                {/* Rest of your hero section... */}
            </div>

            {/* Three Cards Section */}
            <Wrapper className="py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Technology Ecosystem
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore the intelligent solutions powered by Nectarlite technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cardsData.map((card) => (
                        <div 
                            key={card.id} 
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
                        >
                            {/* Card Image - Conditional rendering */}
                            <div className="h-48 relative overflow-hidden">
                                {card.image ? (
                                    <Image 
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    <div className={`h-full w-full ${card.imageColor} flex items-center justify-center`}>
                                        <span className="text-white text-4xl font-bold opacity-80">
                                            {card.title.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {card.description}
                                </p>
                                
                                {/* Explore More Link */}
                                <Link 
                                    href={card.link}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group/link"
                                >
                                    <span>Explore More</span>
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
                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default Hero;