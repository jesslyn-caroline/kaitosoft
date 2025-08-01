// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"
import Hero from "../components/hero"
import HowWeWork from "../components/how-we-work"
import OurServices from "../components/our-services"
import WhyChoose from "../components/why-choose"

function Home() {
    return (
        <div className={`w-full flex flex-col overflow-y-scroll scroll-bar-hidden`}>
            <Hero />
            <OurServices />
            <HowWeWork />
            <WhyChoose />
        </div>
    )
}

export default Home