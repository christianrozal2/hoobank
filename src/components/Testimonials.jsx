import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'

const Testimonials = () => {
  return (
    <section className='sm:py-16 py-6 flex justify-center items-center flex-col relative' >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">What people are <br className="sm:block hidden" /> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
       </div>

       <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((item) => (
          <div key={item.id} className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img
            src={quotes}
            alt="quotes"
            className='w-[42px] h-[27px] object-contain'
            />
            <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
              {item.content}
            </p>

            <div className='flex flex-row'>
              <img
              src={item.img}
              alt={item.name}
              className='w-[64px] h-[64px] rounded-full object-cover'
              />
              <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
                  {item.name}
                </h4>
                <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
       </div>

    </ section>
  )
}

export default Testimonials