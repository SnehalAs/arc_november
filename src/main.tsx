import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import Navbar from './components/navbar/navbar.tsx'
import HeroSection from './components/herosection/herosection.tsx'
import Benefits from './components/Benifits/benifits.tsx'
import StatsSection from './components/StatsSection/StatsSection.tsx'
import CaseStudy from './components/CaseStudy/CaseStudy.tsx'
import BigEnough from './components/BigEnough/BigEnough.tsx'
import Testimonial from './components/Testimonial/Testimonial.tsx'
import CTA from './components/Testimonial/CTA.tsx'
import BlogSection from './components/BlogSection/BlogSection.tsx'
import Footer from './components/Footer/Footer.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <HeroSection/>
    <Benefits/>
    <StatsSection/>
    <CaseStudy/>
    <BigEnough/>
    <Testimonial/>
    <CTA/>
    <BlogSection/>
    <Footer/>
    </StrictMode>,
)
