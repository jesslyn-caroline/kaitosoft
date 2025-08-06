import WorkPointCard from "./work-point-card";
import { motion } from "framer-motion";

function HowWeWork() {
    return (
        <section className={`w-full min-h-fit h-fit px-6 sm:px-10 lg:px-24 py-12 bg-secondary flex flex-col gap-4`}>
            <div>
                <motion.h2 
                    initial={{x: "-50%", opacity: 0}}
                    whileInView={{x: "0%", opacity: 1}}
                    transition={{duration: 1, delay: 0.1}}
                    viewport={{ once: true , amount: 0.3}}
                    className={`text-white text-lg xl:text-xl 2xl:text-2xl font-semibold`}>
                    How we work
                </motion.h2>
                <motion.h1
                    initial={{x: "-50%", opacity: 0}}
                    whileInView={{x: "0%", opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{ once: true , amount: 0.3}}
                    className={`text-white text-2xl font-bold`}>
                    From Idea to Launch
                </motion.h1>
            </div>    
            <motion.div 
                variants={{hidden: {}, show: { transition: { staggerChildren: 0.2 } }}}
                initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col lg:grid lg:grid-cols-3 gap-6 mt-4`}>
                <motion.div
                    variants={{hidden: {x: "50%", opacity: 0}, show: {x: "0%", opacity: 1, transition: { duration: 1 }}, }}
                >
                    <WorkPointCard num={1} point="Discovery and Planning" desc="Understanding your goals and defining the roadmap."/>
                </motion.div>
                <motion.div
                    variants={{hidden: {x: "50%", opacity: 0}, show: {x: "0%", opacity: 1, transition: { duration: 1 }}, }}
                >
                    <WorkPointCard num={2} point="Design and Development" desc="Crafting pixel-perfect, user friendly experiences."/>
                </motion.div>
                <motion.div
                    variants={{hidden: {x: "50%", opacity: 0}, show: {x: "0%", opacity: 1, transition: { duration: 1 }}, }}
                >
                    <WorkPointCard num={3} point="Launch and Optimization" desc="Ensuring a smooth, high-performing final product."/>
                </motion.div>
            </motion.div>    
        </section>
    );
}

export default HowWeWork