import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import aboutIncreaseImage from '@/images/aboutIncreaseImage.png'
import aboutImageEffect from '@/images/aboutImageEffect.png'
import aboutImageEffect1 from '@/images/aboutImageEffect1.png'
import Button from './Button'

const AboutUs = () => {
  return (
    <section className="my-20">
      <Wrapper className={'grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 mb-16'}>
          <div className="flex justify-center items-center relative">
              <Image src={aboutIncreaseImage} width={1000} height={1000} alt='about increase image' className='md:w-full w-1/2 rounded-full relative z-1' />
              <Image src={aboutImageEffect} width={1000} height={1000} alt='about effect image' className='md:w-[70%] w-[35%] absolute md:left-0 md:top-0' />
              <Image src={aboutImageEffect1} width={1000} height={1000} alt='about effect image' className='w-20 absolute md:right-0 md:bottom-0 -bottom-5 right-30' />
          </div>
          <div className="flex flex-col gap-5 items-start">
              <div className="text-purple-500 font-light bg-[#b576b342] rounded-full px-5 py-2">
                  ABOUT US
              </div>
              <h2 className='text-4xl font-bold text-black'>The Nectarlite Technology Ecosystem</h2>
              <p className='text-gray-600 text-lg'>
                  Nectarlite Technology is a technology-driven, multi-product ecosystem focused on building practical, reliable, and accessible digital solutions that bring essential services directly to people&apos;s doorsteps.
              </p>
              <p className='text-gray-600'>
                  Through a growing network of mobile applications and platforms, Nectarlite simplifies everyday life by connecting users to transportation, food delivery, mentorship, and future on-demand services with speed, efficiency, and trust.
              </p>
              <p className='text-gray-600'>
                  Designed as a unified yet independently operating ecosystem, Nectarlite empowers individuals, supports local businesses, and creates economic opportunities, while delivering human-centered technology that scales across communities and markets.
              </p>
              <Button text={'Learn More'} className={'px-10 py-3 rounded-full'} />
          </div>
      </Wrapper>

      {/* Mission, Vision, and Values Section */}
      <div className="bg-linear-to-r from-purple-50 to-blue-50 py-16">
        <Wrapper>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-700">
                To design and deliver practical, user-focused digital products that simplify everyday life, empower individuals, and support communities through accessible and reliable technology.
              </p>
              <p className="text-gray-700 mt-4">
                Nectarlite is committed to building platforms that create opportunity, enable growth, and remove barriers to essential services.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-700">
                To build a trusted technology ecosystem that connects people to essential services seamlessly, anytime and anywhere.
              </p>
              <p className="text-gray-700 mt-4">
                Nectarlite envisions a future where digital products enhance daily living, unlock human potential, and drive sustainable economic impact across communities.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Core Values</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold text-gray-900">Accessibility</span>
                  <span className="text-gray-600 ml-2">- Simple, inclusive technology for everyone</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold text-gray-900">Reliability</span>
                  <span className="text-gray-600 ml-2">- Consistent, secure, and efficient platforms</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold text-gray-900">Innovation</span>
                  <span className="text-gray-600 ml-2">- Thoughtful solutions for real problems</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold text-gray-900">Community Impact</span>
                  <span className="text-gray-600 ml-2">- Value creation for individuals and businesses</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold text-gray-900">Integrity</span>
                  <span className="text-gray-600 ml-2">- Transparent, fair, and ethical operations</span>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  )
}

export default AboutUs
