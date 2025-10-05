import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesSection from '../components/ServicesSection'
import HeaderSection from '../components/HeaderSection'
import ChooseSection from '../components/ChooseSection'
import Stats from '../components/Stats'
import ProcessSection from '../components/ProcessSection'
import FAQSection from '../components/FAQSection'


const LandingPage = () => {
  return (
    <div className='w-full mx-auto'>
      {/* <Navbar/> */}
      <HeaderSection/>
      <ServicesSection/>
      <ChooseSection/>
      <Stats/>
      <ProcessSection />
      <FAQSection />
      <Footer/>
    </div>
  )
}

export default LandingPage;
