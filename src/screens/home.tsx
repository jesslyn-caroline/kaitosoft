// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"
import Hero from "../components/hero"
import OurServices from "../components/our-services"

function Home() {
    return (
        <div className={`w-full flex flex-col overflow-y-scroll scroll-bar-hidden`}>
            <Hero />
            <OurServices />
        </div>
    )
}

export default Home