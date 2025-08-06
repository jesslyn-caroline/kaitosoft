import { motion } from "framer-motion"

function WhyChoose() {
    return (
        <section className={`w-full min-h-fit h-fit px-6 sm:px-10 lg:px-24 py-12  flex flex-col gap-3`}>
            <div>
                <motion.h2 
                    initial={{x: "-50%", opacity: 0}}
                    whileInView={{x: "0%", opacity: 1}}
                    transition={{duration: 1, delay: 0.1}}
                    viewport={{ once: true , amount: 0.3}}
                    className={`text-primary text-lg xl:text-xl 2xl:text-2xl font-semibold`}>
                    Why Choose Kaitosoft
                </motion.h2>
                <div className={`flex flex-col lg:flex-row gap-3 lg:gap-5`}>
                    <div className={`w-full lg:w-2/3 flex flex-col gap-3 text-md`}>
                        <motion.h1 
                            initial={{x: "-50%", opacity: 0}}
                            whileInView={{x: "0%", opacity: 1}}
                            transition={{duration: 1}}
                            viewport={{ once: true , amount: 0.3}}
                            className={`text-2xl font-bold`}>
                            More Than Code — We Create Impact
                        </motion.h1>
                        <motion.div
                            variants={{hidden: {}, show: { transition: { staggerChildren: 0.5 } }}}
                            initial="hidden" whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}>
                            <motion.p 
                                variants={{hidden: {x: "-50%", opacity: 0}, show: {x: "0%", opacity: 1, transition: { duration: 1 }}, }}>
                                A great website is more than just code. It's about creating an
                                experience.
                            </motion.p>
                            <motion.p
                                variants={{hidden: {x: "-50%", opacity: 0}, show: {x: "0%", opacity: 1, transition: { duration: 1 }}, }}>
                                At Kaitosoft, we don’t just build websites; we build solutions
                                tailored to your needs. With a focus on innovation and user
                                experience, we ensure every project is crafted to deliver
                                real value.
                            </motion.p>
                        </motion.div>
                    </div>
                    <motion.div 
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.5 } } }}
                        initial="hidden" whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`flex flex-col gap-3`}>
                        <motion.div 
                            variants={{hidden: {x: "50%", opacity: 0}, show: {x: "0%", opacity: 1, transition: { duration: 1 }}, }}
                            className={`bg-accent-2 px-5 py-4 flex flex-row items-center gap-3 rounded-lg`}>
                            <i className={`ri-paint-brush-fill text-3xl text-white rotate-315`} />
                            <div className={`text-white`}>
                                <h1 className={`text-md font-bold`}>Tailored Solutions</h1>
                                <p className={`text-md font-light`}>Understanding your goals and defining the roadmap.</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={{hidden: {x: "50%", opacity: 0}, show: {x: "0%", opacity: 1, transition: { duration: 1 }}, }}
                            className={`bg-secondary px-5 py-4 flex flex-row items-center gap-3 rounded-lg`}>
                            <i className={`ri-service-fill text-3xl text-white`} />
                            <div className={`text-white`}>
                                <h1 className={`text-md font-bold`}>Seamless Collaboration</h1>
                                <p className={`text-md font-light`}>
                                    We keep you in the loop, ensuring your vision
                                    stays at the heart of the process.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>           
            </div>       
        </section>
    );
}

export default WhyChoose