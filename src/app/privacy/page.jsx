// import React from 'react'

// import Wrapper from '../components/Wrapper'


// const page = () => {
//   return (
//     <>
//     <section className="my-20">
//       <Wrapper className={'grid md:grid-cols-1 grid-cols-1 md:gap-20 gap-10 mb-16'}>

//           <div className="flex flex-col gap-5 items-start">
//               <div className="text-purple-500 font-light bg-[#b576b342] rounded-full px-5 py-2">
//                   PRIVACY POLICY
//               </div>
//               <h2 className='text-4xl font-bold text-black'>The Nectarlite Technology Ecosystem</h2>
//               <p className='text-gray-600 text-lg'>
//                   Nectarlite Technology is a technology-driven, multi-product ecosystem focused on building practical, reliable, and accessible digital solutions that bring essential services directly to people's doorsteps.
//               </p>
//               <p className='text-gray-600'>
//                   Through a growing network of mobile applications and platforms, Nectarlite simplifies everyday life by connecting users to transportation, food delivery, mentorship, and future on-demand services with speed, efficiency, and trust.
//               </p>
//               <p className='text-gray-600'>
//                   Designed as a unified yet independently operating ecosystem, Nectarlite empowers individuals, supports local businesses, and creates economic opportunities, while delivering human-centered technology that scales across communities and markets.
//               </p>
//           </div>
//       </Wrapper>


//     </section>

//     </>
//   )
// }

// export default page

import React from 'react'
import Wrapper from '../components/Wrapper'

const page = () => {
  return (
    <>
    <section className="my-20">
      <Wrapper className={'grid md:grid-cols-1 grid-cols-1 md:gap-20 gap-10 mb-16'}>

          <div className="flex flex-col gap-6 items-start">
              <div className="text-purple-500 font-light bg-[#b576b342] rounded-full px-5 py-2">
                  PRIVACY POLICY
              </div>
              
              <h2 className='text-4xl font-bold text-black'>Nectarlite Privacy Policy</h2>
              <p className='text-gray-500 font-medium'>Effective Date: February 14, 2026</p>

              <p className='text-gray-600 text-lg'>
                  Nectarlite Technology (“Nectarlite,” “we,” or “our,” ) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect personal information across our platforms and products.
              </p>

              <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">Information We Collect</h3>
                  <ul className="list-disc list-inside text-gray-600 flex flex-col gap-2">
                      <li>Personal identification details (name, email, phone number)</li>
                      <li>Account and usage data</li>
                      <li>Device and technical information</li>
                      <li>Transaction and payment-related data</li>
                      <li>Communications with Nectarlite platforms</li>
                  </ul>
              </div>

              <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">How We Use Information</h3>
                  <ul className="list-disc list-inside text-gray-600 flex flex-col gap-2">
                      <li>Provide and improve our products and services</li>
                      <li>Facilitate transactions and platform functionality</li>
                      <li>Enhance security and prevent fraud</li>
                      <li>Communicate updates, support, and service-related information</li>
                      <li>Comply with legal and regulatory requirements</li>
                  </ul>
              </div>

              <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">Data Protection & Security</h3>
                  <p className='text-gray-600'>
                      Nectarlite employs industry-standard security measures to protect user data from unauthorized access, misuse, or disclosure.
                  </p>
              </div>

              <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">Data Sharing</h3>
                  <p className='text-gray-600'>
                      We do not sell personal data. Information may be shared with trusted partners and service providers solely for operational purposes and in compliance with applicable laws.
                  </p>
              </div>

              <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">User Rights</h3>
                  <p className='text-gray-600'>
                      Users may request access, correction, or deletion of their personal data in accordance with applicable data protection laws.
                  </p>
              </div>

              <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">Policy Updates</h3>
                  <p className='text-gray-600'>
                      This Privacy Policy may be updated periodically. Continued use of Nectarlite services indicates acceptance of any changes.
                  </p>
              </div>

              <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">Contact</h3>
                  <p className='text-gray-600'>
                      For privacy-related inquiries, contact: <br />
                      <a href="mailto:privacy@nectarlite.com" className="text-purple-500 font-semibold">privacy@nectarlite.com</a>
                  </p>
              </div>
          </div>
      </Wrapper>
    </section>
    </>
  )
}

export default page