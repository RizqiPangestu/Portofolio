import React, {useState} from 'react'
import Footer from '../components/Footer'
import FrameworkSection from '../components/FrameworkSection'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { bukitvista,gamaforce,tiketdotcom } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SubheadSection from '../components/SubheadSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <SubheadSection id="experience" text="Experience" />
            <InfoSection {...gamaforce} />
            <InfoSection {...bukitvista} />
            <InfoSection {...tiketdotcom} />
            <SubheadSection id="framework" text="Framework" />
            <FrameworkSection />

            <Footer />
        </>
    )
    
}

export default Home