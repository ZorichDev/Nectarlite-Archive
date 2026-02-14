import React from 'react'

import Wrapper from '../components/Wrapper'


const page = () => {
  return (
    <>
    <section className="my-20">
      <Wrapper className={'grid md:grid-cols-1 grid-cols-1 md:gap-20 gap-10 mb-16'}>

          <div className="flex flex-col gap-5 items-start">
              <div className="text-purple-500 font-light bg-[#b576b342] rounded-full px-5 py-2">
                  PRIVACY POLICY
              </div>
              <h2 className='text-4xl font-bold text-black'>The Nectarlite Technology Ecosystem</h2>
              <p className='text-gray-600 text-lg'>
                  Nectarlite Technology is a technology-driven, multi-product ecosystem focused on building practical, reliable, and accessible digital solutions that bring essential services directly to people's doorsteps.
              </p>
              <p className='text-gray-600'>
                  Through a growing network of mobile applications and platforms, Nectarlite simplifies everyday life by connecting users to transportation, food delivery, mentorship, and future on-demand services with speed, efficiency, and trust.
              </p>
              <p className='text-gray-600'>
                  Designed as a unified yet independently operating ecosystem, Nectarlite empowers individuals, supports local businesses, and creates economic opportunities, while delivering human-centered technology that scales across communities and markets.
              </p>
          </div>
      </Wrapper>


    </section>

    </>
  )
}

export default page