import React from 'react'
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero
} from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className='w-full'>
          <Navbar />
        </div>
      </div>

      <div className='flex justify-center items-start bg-primary'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className='flex justify-center items-start sm:px-16 px-6 bg-primary'>
        <div className='xl:max-w-[1280px] w-full'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
    
  )
}

export default App