import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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
                        <h1 className={`text-3xl font-bold text-black`}>
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
            <div className={`w-full h-screen px-24 pt-24 space-y-3`}>
                <h3 className={`text-xl font-bold text-dusk-blue`}>Our Service</h3>
                <h1 className={`text-3xl font-extrabold text-black`}>Websites Built for Your Goals</h1>
                <h3 className={`text-xl font-medium text-black`}>
                    We create websites that align with your needs, drive results, and help you grow. Our focus is on delivering digital
                    solutions that are both functional and impactful. Each website is built with attention to detail, ensuring it meets your
                    goals and adapts to future growth.
                </h3>
                <h3 className={`text-xl font-medium text-black`}>
                    Solutions made to fit your needs. Choose what works best for you.
                </h3>
                <div className={`w-full mt-8 flex flex-row space-x-5`}>
                    <div className={`max-w-1/2 w-fit h-fit p-8 bg-bluish rounded-2xl flex flex-col space-y-3`}>
                        <img src="/images/person.png" alt="person" className={`w-[65px] h-[65px]`}/>
                        <h2 className={`text-2xl font-semibold text-white`}>Personal Website &#x2015; Make Your Mark Online!</h2>
                        <h3 className={`text-xl font text-white`}>
                            A clean, modern site to showcase your skills and projects. Perfect for designers, developers, freelancers, or students.
                        </h3>
                    </div>
                    <div className={`max-w-1/2 w-fit h-fit p-8 bg-bluish rounded-2xl flex flex-col space-y-3`}>
                        <img src="/images/success.png" alt="person" className={`w-[65px] h-[65px]`}/>
                        <h2 className={`text-2xl font-semibold text-white`}>Business Page &#x2015; Make Your Brand Stand Out!</h2>
                        <h3 className={`text-xl font text-white`}>
                            An elegant website built to highlight your services, engage visitors, and build trust with potential customers.
                        </h3>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <Link to="/our-contact" className={`border-b-2 border-black flex items-center space-x-2`}>
                        <span className={`text-xl text-black font-bold`}>Get Yours Now!</span>
                        <i className={`text-xl ri-arrow-right-long-line`}/>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Home