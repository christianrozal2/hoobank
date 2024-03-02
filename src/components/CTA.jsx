import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <section className='flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow'>
      <div class="flex-1 flex flex-col">
        <h2 class="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Come try our service now!
        </h2>
        <p class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className='w-full sm:w-auto'>
        <Button styles={'mt-10 sm:mt-0'} />
      </div>
    </section>
  )
}

export default CTA