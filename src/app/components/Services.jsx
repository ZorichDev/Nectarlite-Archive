import React from 'react'
import Wrapper from './Wrapper'
import AnimatedSlide from './AnimatedSlide'
import Button from './Button'

const Services = () => {
    // Ecosystem Products
    const products = [
        {
            title: "Sailfast",
            tagline: "Reliable Transportation",
            description: "On-demand transportation solutions that optimize routes, reduce wait times, and provide safe, affordable mobility for daily commuters.",
            color: "from-blue-500 to-cyan-500",
            icon: "🚗"
        },
        {
            title: "Marice",
            tagline: "Food Delivery",
            description: "Connecting local restaurants with customers through fast, convenient food delivery while supporting local businesses.",
            color: "from-orange-500 to-red-500",
            icon: "🍔"
        },
        {
            title: "EsomGod Academy",
            tagline: "Mentorship & Learning",
            description: "Purpose-driven platform for personal growth, mental transformation, and discovering life purpose through structured mentorship.",
            color: "from-purple-500 to-pink-500",
            icon: "🎓"
        },
        {
            title: "EsomGod",
            tagline: "Digital Solutions",
            description: "Integrated technology solutions that simplify everyday life, streamline services, and enhance digital experiences.",
            color: "from-green-500 to-teal-500",
            icon: "💻"
        }
    ];

    // Ecosystem Features
    const features = [
        {
            title: "Shared Foundation",
            description: "Built on common mobile-first design, scalable infrastructure, and unified standards for consistent quality.",
            points: ["Mobile-first design", "Secure infrastructure", "Unified standards", "Scalable architecture"]
        },
        {
            title: "User-Centered",
            description: "Every product is designed to be intuitive and accessible, reducing friction in accessing essential services.",
            points: ["Intuitive interfaces", "Accessible design", "Practical solutions", "Simple navigation"]
        },
        {
            title: "Community Focus",
            description: "Creates opportunities for partners through fair systems and supports local economic growth.",
            points: ["Fair partnerships", "Transparent systems", "Economic growth", "Community support"]
        }
    ];

    return (
        <Wrapper className={'py-30 bg-linear-to-bay-50 to-white'}>
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                    THE ECOSYSTEM
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    How the Nectarlite <span className="text-purple-600">Ecosystem</span> Works
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Independent products operating on a shared foundation, each solving everyday problems while growing together.
                </p>
                <AnimatedSlide />
            </div>

            {/* Products Section */}
            <div className="mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Independent Products, <span className="text-purple-600">One Ecosystem</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Each product functions as its own platform with distinct purpose and experience, yet benefits from our shared foundation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Gradient Header */}
                            <div className={`h-2 bg-linear-to-r ${product.color} w-full`}></div>
                            
                            <div className="p-6">
                                {/* Icon */}
                                <div className="mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${product.color} flex items-center justify-center text-2xl`}>
                                        {product.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                                <p className="text-sm text-gray-500 font-medium mb-3">{product.tagline}</p>

                                {/* Description */}
                                <p className="text-gray-600 mb-6">{product.description}</p>

                                {/* Action Button */}
                                <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 rounded-lg font-medium text-gray-700 transition-colors duration-200 group-hover:text-purple-600">
                                    Buy Now →
                                </button>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ecosystem Foundation */}
            <div className="mb-24">
                <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Shared Technology Foundation</h2>
                            <p className="text-white/90 mb-6">
                                While each product operates independently, all Nectarlite platforms are built on a shared technology foundation ensuring quality, efficiency, and long-term scalability.
                            </p>
                            <Button 
                                text="Explore Technology" 
                                className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {["Mobile-first Design", "Secure Infrastructure", "Unified Standards", "Scalable Architecture"].map((item, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl mb-2">✓</div>
                                    <div className="font-medium">{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="mb-24">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                     <span className="text-purple-600">Ecosystem</span> Principles
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <span className="text-2xl">{index === 0 ? "🏗️" : index === 1 ? "👥" : "🤝"}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.description}</p>
                            </div>
                            
                            <ul className="space-y-2">
                                {feature.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Growth Section */}
            <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Designed for Growth & Expansion</h2>
                    <p className="text-xl text-white/90 mb-8">
                        The ecosystem model allows continuous expansion into new services—logistics, marketplaces, financial solutions—without disrupting existing products, ensuring long-term adaptability.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Future-Ready", "Scalable", "Adaptable", "Innovative"].map((word, index) => (
                            <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="font-semibold">{word}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Services