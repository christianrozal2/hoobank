import React from 'react'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section id='product' className='flex md:flex-row flex-col sm:py-16 py-6'>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
        Find a better card deal <br className='sm:block hidden' />in few easy steps
        </h2>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.
        </p>

        <Button styles='mt-10' />
      </div>

      <div class="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img
        src={card} alt="card"
        className="w-[100%] h-[100%]"
        />
      </div>

    </section>
  )
}

export default CardDeal