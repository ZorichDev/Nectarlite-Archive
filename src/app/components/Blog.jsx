import React from 'react'
import Wrapper from './Wrapper'
import techImage from '@/images/techImage.png'
import necessityImage from '@/images/necessityImage.png'
import servoImage from '@/images/servoImage.png'
import AnimatedSlide from './AnimatedSlide'
import BlogCard from './BlogCard'
import { Smartphone, Users, Shield } from 'lucide-react'

const Blog = () => {
    const articles = [
        {
            title: 'Building Scalable Mobile Platforms: Lessons from Nectarlite',
            services: 'Technology & Innovation',
            desc: 'Discover how Nectarlite designed Sailfast and Marice with scalability in mind, ensuring reliable performance as user bases grow exponentially.',
            date: "25 Mar 2024",
            admin: "Tech Team",
            image: techImage,
            readTime: "6 min read",
            icon: <Smartphone className="h-5 w-5" />
        },
        {
            title: 'Community Impact Through Technology: The Nectarlite Approach',
            services: 'Community Impact',
            desc: 'How our platforms create economic opportunities for drivers, delivery partners, and local businesses while serving communities effectively.',
            date: "18 Mar 2024",
            admin: "Community Team",
            image: necessityImage,
            readTime: "5 min read",
            icon: <Users className="h-5 w-5" />
        },
        {
            title: 'Security First: Protecting User Data in On-Demand Services',
            services: 'Security & Privacy',
            desc: 'A deep dive into the enterprise-grade security measures that protect user data and ensure safe transactions across Nectarlite platforms.',
            date: "10 Mar 2024",
            admin: "Security Team",
            image: servoImage,
            readTime: "7 min read",
            icon: <Shield className="h-5 w-5" />
        },
    ]

    return (
        <Wrapper className={'py-16 md:py-24 bg-linear-to-b from-white to-gray-50/30'}>
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="flex justify-center space-x-8 items-center mb-6">
                    <div className="flex gap-3">
                        <div className="w-4 h-1 bg-purple-900"></div>
                        <div className="w-10 h-1 bg-purple-900"></div>
                    </div>
                    <p className="text-blue-900 font-light text-sm tracking-wider">INSIGHTS & ARTICLES</p>
                    <div className="flex gap-3">
                        <div className="w-10 h-1 bg-purple-900"></div>
                        <div className="w-4 h-1 bg-purple-900"></div>
                    </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
                    Nectarlite <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-blue-600">Insights</span>
                </h2>
                
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                    Expert perspectives on technology innovation, platform development, and community impact from the Nectarlite ecosystem.
                </p>
                
                <AnimatedSlide />
            </div>

            {/* Featured Articles Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <BlogCard 
                        key={index} 
                        src={article.image} 
                        desc={article.desc} 
                        services={article.services} 
                        title={article.title} 
                        date={article.date} 
                        admin={article.admin}
                        readTime={article.readTime}
                        icon={article.icon}
                        showLearnMore={false} // Add this prop to hide "Learn More"
                    />
                ))}
            </div>
        </Wrapper>
    )
}

export default Blog