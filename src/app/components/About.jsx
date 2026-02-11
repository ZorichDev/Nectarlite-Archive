'use client'
import React from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import aboutIncreaseImage from '@/images/aboutIncreaseImage.png'
import aboutImageEffect from '@/images/aboutImageEffect.png'
import aboutImageEffect1 from '@/images/aboutImageEffect1.png'
import aboutImage1 from '@/images/aboutImage1.png'
import aboutImage2 from '@/images/aboutImage2.png'
import aboutImage3 from '@/images/aboutImage3.png'
import Button from './Button'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { Users, Shield, Zap, Heart, CheckCircle, ArrowRight, Target, Eye } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const values = [
        { icon: Users, title: "Accessibility", description: "Technology should be simple, inclusive, and available to everyone." },
        { icon: Shield, title: "Reliability", description: "Platforms built to perform consistently, securely, and efficiently." },
        { icon: Zap, title: "Innovation", description: "Thoughtful innovation that solves real problems and scales with purpose." },
        { icon: Heart, title: "Community Impact", description: "Creating value by supporting individuals, local businesses, and communities." },
        { icon: CheckCircle, title: "Integrity", description: "Operating with transparency, fairness, and ethical responsibility." },
    ]

    useGSAP(() => {
        gsap.to('.animate-image', {
            translateY: 0,
            translateX: 0,
            opacity: 1,
            duration: 5, 
            ease: 'power4.out',
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.animate-container',
                start: 'top center',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            }
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    })

    return (
        <section className="my-20">
            {/* Hero Section with images */}
            <Wrapper className={'grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 mb-16'}>
                <div className="relative animate-container flex justify-center items-center order-2 md:order-1">
                    <motion.div className="md:w-[80%] w-[70%] relative z-1" 
                        initial={{
                            clipPath: 'polygon(0% 0%, 10% 0%, 10% 100%, 20% 100%, 20% 0%, 30% 0%, 30% 100%, 40% 100%, 40% 0%, 50% 0%, 50% 100%, 60% 100%, 60% 0%, 70% 0%, 70% 100%, 80% 100%, 80% 0%, 90% 0%, 90% 100%, 100% 100%, 100% 0%, 100% 10%, 0% 10%, 0% 20%, 100% 20%, 100% 30%, 0% 30%, 0% 40%, 100% 40%, 100% 50%, 0% 50%, 0% 60%, 100% 60%, 100% 70%, 0% 70%, 0% 80%, 100% 80%, 100% 90%, 0% 90%, 0% 100%)',
                        }}
                        whileInView={{
                            clipPath: 'polygon(0% 0%, 10% 0%, 10% 70%, 20% 70%, 20% 0%, 30% 0%, 30% 80%, 40% 80%, 40% 0%, 50% 0%, 50% 80%, 60% 80%, 60% 0%, 70% 0%, 70% 80%, 80% 80%, 80% 0%, 90% 0%, 90% 80%, 100% 80%, 100% 0%, 100% 20.25%, 0% 20.75%, 0% 20%, 100% 20%, 100% 40%, 0% 40%, 0% 40%, 100% 40%, 100% 60%, 0% 60.25%, 0% 60%, 100% 60%, 100% 80%, 0% 80.75%, 0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 100%)',
                            transition: {
                                duration: 1, 
                                ease: 'easeInOut'
                            }
                        }}
                    >    
                        <Image src={aboutImage1} width={1000} height={1000} alt='about image 1' className='w-full rounded-2xl shadow-xl' />
                    </motion.div>
                    <Image src={aboutImage2} width={1000} height={1000} alt='about image 2' className='md:w-[40%] w-[70%] absolute md:-left-20 -left-10 md:-top-1 -top-20 -translate-y-200 translate-x-200 opacity-0 animate-image rounded-xl shadow-lg' />
                    <Image src={aboutImage3} width={1000} height={1000} alt='about image 3' className='md:w-[60%] w-[80%] absolute md:-bottom-10 -bottom-20 md:-left-18 -translate-y-250 translate-x-200 opacity-0 animate-image rounded-xl shadow-lg' />
                </div>
                
                <div className="flex flex-col space-y-6 items-start order-1 md:order-2">
                    <div className="flex space-x-8 items-center">
                        <div className="flex gap-3">
                            <div className="w-4 h-1 bg-purple-900"></div>
                            <div className="w-10 h-1 bg-purple-900"></div>
                        </div>
                        <p className="text-blue-900 font-light text-sm tracking-wider">WHO WE ARE</p>
                    </div>
                    
                    <h2 className="font-bold text-black text-3xl lg:text-4xl leading-tight">
                        Building Technology That Connects & Empowers Communities
                    </h2>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Nectarlite Technology is a technology-driven, multi-product ecosystem focused on building practical, reliable, and accessible digital solutions that bring essential services directly to people's doorsteps.
                    </p>
                    
                    <p className="text-gray-600">
                        Through a growing network of mobile applications and platforms, Nectarlite simplifies everyday life by connecting users to transportation, food delivery, mentorship, and future on-demand services with speed, efficiency, and trust.
                    </p>
                    
                    <Button 
                        text='Learn More' 
                        className={'rounded-4xl px-8 font-semibold py-4 bg-linear-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white'} 
                        icon={<ArrowRight className="ml-2 h-5 w-5" />}
                    />
                </div>
            </Wrapper>

            {/* Core Values Section */}
            <div className="space-y-8 mb-16">
                <div className="text-center space-y-3">
                    <div className="flex justify-center space-x-8 items-center">
                        <div className="flex gap-3">
                            <div className="w-4 h-1 bg-purple-900"></div>
                            <div className="w-10 h-1 bg-purple-900"></div>
                        </div>
                        <p className="text-blue-900 font-light text-sm tracking-wider">OUR VALUES</p>
                        <div className="flex gap-3">
                            <div className="w-10 h-1 bg-purple-900"></div>
                            <div className="w-4 h-1 bg-purple-900"></div>
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Guiding Principles
                    </h3>
                </div>

                <Wrapper>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-linear-to-br from-purple-50 to-blue-50 rounded-xl">
                                        <value.icon className="h-8 w-8 text-purple-700" />
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-900">{value.title}</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </div>

            {/* Mission, Vision, and Values Section */}
            <div className="bg-linear-to-r from-purple-50 to-blue-50 py-16">
                <Wrapper>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Mission Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-gray-700">
                                To design and deliver practical, user-focused digital products that simplify everyday life, empower individuals, and support communities through accessible and reliable technology.
                            </p>
                            <p className="text-gray-700 mt-4 font-semibold">
                                Nectarlite is committed to building platforms that create opportunity, enable growth, and remove barriers to essential services.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-gray-700">
                                To build a trusted technology ecosystem that connects people to essential services seamlessly, anytime and anywhere.
                            </p>
                            <p className="text-gray-700 mt-4 font-semibold">
                                Nectarlite envisions a future where digital products enhance daily living, unlock human potential, and drive sustainable economic impact across communities.
                            </p>
                        </div>

                        {/* Values Summary Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Accessibility</span>
                                        <p className="text-gray-600 text-sm">Simple, inclusive technology for everyone</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Reliability</span>
                                        <p className="text-gray-600 text-sm">Consistent, secure, and efficient platforms</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Innovation</span>
                                        <p className="text-gray-600 text-sm">Thoughtful solutions for real problems</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Community Impact</span>
                                        <p className="text-gray-600 text-sm">Value creation for individuals and businesses</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Integrity</span>
                                        <p className="text-gray-600 text-sm">Transparent, fair, and ethical operations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                            <div className="text-gray-700 font-semibold">Products</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                            <div className="text-gray-700 font-semibold">Active Users</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                            <div className="text-gray-700 font-semibold">Uptime</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                            <div className="text-gray-700 font-semibold">Client Satisfaction</div>
                        </div>
                    </div>
                </Wrapper>
            </div>

            {/* Call to Action */}
            <Wrapper className="mt-16">
                <div className="text-center bg-linear-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Digital Experience?</h3>
                    <p className="mb-6 text-purple-100 max-w-2xl mx-auto">
                        Join us in building technology that makes a real difference in people's lives.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button 
                            text='Get Started' 
                            className={'rounded-4xl px-8 font-semibold py-3 bg-white text-purple-900 hover:bg-gray-100'} 
                        />
                        <Button 
                            text='Contact Us' 
                            className={'rounded-4xl px-8 font-semibold py-3 border-2 border-white text-white hover:bg-white/10'} 
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default AboutUs