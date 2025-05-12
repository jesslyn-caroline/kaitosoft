import { motion } from "framer-motion"

function Home() {
    return (
        <div className={`w-full h-[1600px] flex flex-col`}>

            {/* Hero Section */}
            <div className={`w-full h-screen px-24 pt-24 pb-10`}>
                <div className={`w-full h-full bg-[#F4F8FB] rounded-[18px] flex flex-row`}>
                    <motion.div 
                    initial={{opacity: 0, x: "-100%"}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className={`w-1/2 px-18 flex flex-col justify-center space-y-4`}>
                        <h1 className={`text-3xl font-semibold text-black`}>
                            <span>Crafting </span>
                            <span className={`text-ball-blue`}>Digital Masterpiece</span>
                            <span>,</span>
                            <br/>
                            <span>Tailored for You</span>
                        </h1>
                        <h3 className={`text-xl text-black`}>
                            We build responsive, modern website, from simple landing pages to scalable web solutions, designed to meet your needs.
                        </h3>
                        <button className={`w-fit px-4 py-2 bg-bluish rounded-[18px] flex flex-row items-center space-x-2`}>
                            <span className={`text-white text-lg font-semibold`}>Get Your Website</span>
                            <div className={`w-6 h-6 bg-white rounded-full`}>
                                <i className={`ri-arrow-right-line`}></i>
                            </div>
                        </button>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0, x: "100%"}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className={`w-1/2 flex items-center justify-center`}>
                        <img src="/images/hero-img.png" alt="hero-img"  className={`w-[450px] h-[450px]`}/>
                    </motion.div>
                </div>
            </div>

            {/* Our service */}
            <div className={`w-full h-screen bg-red-500`}>
                
            </div>
        </div>
    )
}

export default Home