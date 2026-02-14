import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import logo from '@/images/logo.png'
import footerBackground from '@/images/footerBackground.png'
import { Facebook, Instagram, Mail, MapPinIcon, Phone, Send, Twitter, Linkedin, BookOpen, Coffee, GraduationCap, Shield, ChevronRight, Heart } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const products = [
    { name: "Sailfast", icon: <Coffee className="h-4 w-4" /> },
    { name: "Marice", icon: <BookOpen className="h-4 w-4" /> },
    { name: "EsomGod Academy", icon: <GraduationCap className="h-4 w-4" /> },
    { name: "EsomGold", icon: <Shield className="h-4 w-4" /> },
  ]

  const companyLinks = [
    { name: "About Nectarlite", href: "/about" },
    { name: "Our Ecosystem", href: "/ecosystem" },
    { name: "Technology & Innovation", href: "/technology" },
    { name: "Impact & Opportunity", href: "/impact" },
  ]

  const supportLinks = [
    { name: "Contact Support", href: "/support" },
    { name: "Help Center", href: "/help" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={16} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={16} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={16} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={16} />, href: "#" },
  ]

  return (
    <Wrapper className={'py-12 md:py-16 flex flex-col gap-8 md:gap-12 relative overflow-hidden bg-gray-50'}>
        <Image 
            src={footerBackground} 
            width={1000} 
            height={1000} 
            alt='footer background' 
            className='w-full h-full object-cover absolute top-0 left-0 opacity-5'
        />
        
        {/* Main Footer Content */}
        <div className={'grid md:grid-cols-2 lg:grid-cols-5 relative gap-8 md:gap-6'} >
            {/* Company Description */}
            <div className="flex flex-col space-y-4 lg:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                    <Image src={logo} alt='logo' width={1000} height={1000} className='w-12 h-12' />
                    <div>
                        <h1 className='font-bold text-purple-900 text-xl'>Nectarlite Technology</h1>
                        <p className="text-xs text-gray-600">Connecting People to Essential Services</p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                    A multi-product technology ecosystem building digital solutions that simplify everyday life through integrated platforms in mobility, food delivery, and learning.
                </p>
                
                {/* Newsletter Subscription */}
                <div className="space-y-3 mt-3">
                    <h3 className="font-semibold text-gray-900 text-sm">Stay Updated</h3>
                    <div className="relative">
                        <input 
                            placeholder='Your email address' 
                            type="email" 
                            className="bg-white py-3 rounded-lg px-4 text-sm w-full border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 outline-none transition-all"
                        />
                        <button className="w-10 h-10 rounded-lg flex justify-center items-center bg-linear-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 absolute right-0.5 top-0.5 cursor-pointer transition-all">
                            <Send color='white' strokeWidth={1.5} size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="flex flex-col space-y-4">
                <span className="text-lg font-semibold text-gray-900">
                    Products
                </span>
                <ul className='flex flex-col space-y-3'>
                    {products.map((product, index) => (
                        <li key={index} className='group'>
                            <Link href="#" className='flex items-center gap-2 text-gray-700 hover:text-purple-700 transition-colors text-sm'>
                                <div className="p-1.5 bg-purple-50 rounded-md group-hover:bg-purple-100 transition-colors">
                                    {product.icon}
                                </div>
                                <span>{product.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Company & Support */}
            <div className="flex flex-col space-y-6">
                <div className="space-y-4">
                    <span className="text-lg font-semibold text-gray-900">
                        Company
                    </span>
                    <ul className='flex flex-col space-y-2.5'>
                        {companyLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    href={link.href} 
                                    className='text-gray-700 hover:text-purple-700 transition-colors flex items-center gap-2 text-sm'
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <span className="text-lg font-semibold text-gray-900">
                        Support
                    </span>
                    <ul className='flex flex-col space-y-2.5'>
                        {supportLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    href={link.href} 
                                    className='text-gray-700 hover:text-purple-700 transition-colors flex items-center gap-2 text-sm'
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Contact & Legal */}
            <div className="flex flex-col space-y-6">
                <div className="space-y-4">
                    <span className="text-lg font-semibold text-gray-900">
                        Contact
                    </span>
                    <div className='flex flex-col space-y-3'>
                        <div className="flex items-start gap-2">
                            <MapPinIcon size={14} className='text-purple-600 mt-0.5 shrink-0' />
                            <p className="text-gray-700 text-xs">
                                13 Igboko by Aba Owerri-Road
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={14} className='text-purple-600 shrink-0' />
                            <p className="text-gray-700 text-sm">+234 707 424 2892</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={14} className='text-purple-600 shrink-0' />
                            <p className="text-gray-700 text-sm">hello@nectarlite.com</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-lg font-semibold text-gray-900">
                        Legal
                    </span>
                    <ul className='flex flex-col space-y-2.5'>
                        {legalLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    href={link.href} 
                                    className='text-gray-700 hover:text-purple-700 transition-colors text-xs'
                                >
                                    {link.name}
                                </Link> 
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center items-start">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
                <p>© 2026 Nectarlite Technology. All rights reserved.</p>
                <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                {/* Social Links */}
                <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            className="w-8 h-8 flex justify-center hover:bg-purple-700 transition-all cursor-pointer items-center rounded-full bg-gray-100 hover:scale-105"
                            aria-label={social.name}
                        >
                            <div className="text-gray-600 group-hover:text-white transition-colors">
                                {social.icon}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-4 flex-wrap">
                    {companyLinks.slice(0, 2).map((link, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <Link 
                                href={link.href} 
                                className='text-gray-600 hover:text-purple-700 transition-colors text-xs font-medium'
                            >
                                {link.name}
                            </Link>
                            {index < 1 && (
                                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            )}
                        </div>
                    ))}
                    {legalLinks.map((link, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <Link 
                                href={link.href} 
                                className='text-gray-600 hover:text-purple-700 transition-colors text-xs font-medium'
                            >
                                {link.name}
                            </Link>
                            {index < legalLinks.length - 1 && (
                                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Attribution */}
        <div className="text-center pt-4">
            <p className="text-xs text-gray-500">
                Building digital solutions that <span className="text-purple-600 font-medium">simplify everyday life</span>
            </p>
        </div>
    </Wrapper>
  )
}

export default Footer