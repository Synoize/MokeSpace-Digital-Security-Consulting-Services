import React from 'react'
import Footer from '../components/Footer'
import ServicesSection from '../components/ServicesSection'
import HeaderSection from '../components/HeaderSection'
import ChooseSection from '../components/ChooseSection'
import Stats from '../components/Stats'
import ProcessSection from '../components/ProcessSection'
import FAQSection from '../components/FAQSection'
import FreelancerNetSection from '../components/FreelancerNetSection'
// import ReadySection from '../components/ReadySection'


const LandingPage = () => {
  return (
    <div className='w-full mx-auto'>
      <HeaderSection/>
      <ServicesSection/>
      <ChooseSection/>
      <Stats/>
      <ProcessSection />
      <FAQSection />
      <FreelancerNetSection />
      {/* <ReadySection/> */}
      <Footer/>
    </div>
  )
}

export default LandingPage;
