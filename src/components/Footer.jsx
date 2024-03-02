import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className='flex justify-center items-center sm:py-16 py-6 flex-col'>
      <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
          src={logo}
          alt="logo"
          className='w-[200px] h-[72px] object-contain'
          />
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[310px] mt-4'>
          A new way to make payments easy, reliable and secure.
          </p>
        </div>

         <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item) => (
                  <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4' href={item.link}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
         </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2022 HooBank. All Rights Reserved.        
        </p>
        <div className='flex flex-row md:mt-0 mt-6 gap-6'>
           {socialMedia.map((item) => (
              <img
                key={item.id}
                src={item.icon}
                href={item.link}
                alt={item.id}
                className='w-[21px] h-[21px] object-contain cursor-pointer'
              />
           ))}         
        </div>
      </div>
    </section>
  )
}

export default Footer