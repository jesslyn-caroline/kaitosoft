import { motion } from "framer-motion"

function Hero() {
    return (
        <section className={`min-h-screen sm:min-h-fit lg:min-h-screen w-full h-screen md:h-fit lg:h-screen px-6 sm:px-10 lg:px-24 pt-18 md:pt-32 lg:pt-18 pb-12`}>
            <div className={`w-full h-full lg:bg-[#F4F8FB] rounded-lg flex flex-col sm:flex-row lg:flex-row justify-center sm:gap-5`}>
                <div    
                    className={`w-full lg:w-1/2 lg:pl-12 lg:pr-6 flex flex-col justify-center items-start gap-2.5 2xl:gap-3.5`}>
                    <motion.h1 
                        initial={{x: "-50%", opacity: 0}}
                        whileInView={{x: "0%", opacity: 1}}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        className={`text-3xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold 2xl:leading-tight`}>
                        <span>Crafting</span> <br />
                        <span className={`text-secondary`}>Digital Masterpiece</span><span>,</span> <br />
                        <span>Tailored for You</span>
                    </motion.h1>
                    <motion.p 
                        initial={{x: "-50%", opacity: 0}}
                        whileInView={{x: "0%", opacity: 1}}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        className={`text-md sm:text-sm lg:text-md xl:text-lg 2xl:text-xl`}>
                        We build responsive, modern websites, from simple landing pages to scalable web solutions, designed to meet your needs.
                    </motion.p>
                    <motion.button 
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        className={`bg-accent-2 flex flex-row items-center px-4 2xl:px-6 py-1.5 xl:py-2 2xl:py-2 gap-3 rounded-xl`}>
                        <div className={`text-md sm:text-sm lg:text-md xl:text-lg 2xl:text-xl text-white font-medium`}>Get Your Website</div>
                        <div className={`w-6 2xl:w-8 h-6 2xl:h-8 bg-white rounded-full flex items-center justify-center`}>
                            <i className={`ri-arrow-right-line 2xl:text-xl`} />
                        </div>
                    </motion.button>
                </div>
                <motion.div 
                    initial={{x: "50%", opacity: 0}}
                    whileInView={{x: "0%", opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{ once: true }}
                    className={`w-full mt-16 sm:mt-0 md:pl-0 lg:w-1/2 lg:pr-12 lg:pl-6 flex items-center justify-center`}>
                    <img src="/images/hero.png" alt="hero" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero