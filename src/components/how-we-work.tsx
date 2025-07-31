import WorkPointCard from "./work-point-card";

function HowWeWork() {
    return (
        <section className={`w-full h-fit px-6 sm:px-10 lg:px-24 py-12 bg-secondary flex flex-col gap-3`}>
            <div>
                <h2 className={`text-white text-lg xl:text-xl 2xl:text-2xl font-semibold`}>How we work</h2>
                <h1 className={`text-white text-2xl font-bold`}>From Idea to Launch</h1>
            </div>    
            <div className={`flex flex-col lg:grid lg:grid-cols-3 gap-6 mt-4`}>
                <WorkPointCard num={1} point="Discovery and Planning" desc="Understanding your goals and defining the roadmap."/>
                <WorkPointCard num={2} point="Design and Development" desc="Crafting pixel-perfect, user friendly experiences."/>
                <WorkPointCard num={3} point="Launch and Optimization" desc="Ensuring a smooth, high-performing final product."/>

            </div>
            
        </section>
    );
}

export default HowWeWork