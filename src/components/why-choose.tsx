function WhyChoose() {
    return (
        <section className={`w-full min-h-fit h-fit px-6 sm:px-10 lg:px-24 py-12  flex flex-col gap-3`}>
            <div>
                <h2 className={`text-primary text-lg xl:text-xl 2xl:text-2xl font-semibold`}>Why Choose Kaitosoft</h2>
                <div className={`flex flex-col md:flex-row gap-5 md:gap-10`}>
                    <div className={`w-full md:w-2/3 flex flex-col gap-1 text-md`}>
                        <h1 className={`text-2xl font-bold`}>More Than Code — We Create Impact</h1>
                        <p className={`mt-3`}>
                            A great website is more than just code. It's about creating an
                            experience.
                        </p>
                        <p>
                            At Kaitosoft, we don’t just build websites; we build solutions
                            tailored to your needs. With a focus on innovation and user
                            experience, we ensure every project is crafted to deliver
                            real value.
                        </p>
                    </div>
                    <div className={`flex flex-col gap-3`}>
                        <div className={`bg-accent-2 px-5 py-4 flex flex-row items-center gap-3 rounded-lg`}>
                            <i className={`ri-paint-brush-fill text-3xl text-white rotate-315`} />
                            <div className={`text-white`}>
                                <h1 className={`text-md font-bold`}>Tailored Solutions</h1>
                                <p className={`text-md font-light`}>Understanding your goals and defining the roadmap.</p>
                            </div>
                        </div>
                        <div className={`bg-secondary px-5 py-4 flex flex-row items-center gap-3 rounded-lg`}>
                            <i className={`ri-service-fill text-3xl text-white`} />
                            <div className={`text-white`}>
                                <h1 className={`text-md font-bold`}>Seamless Collaboration</h1>
                                <p className={`text-md font-light`}>
                                    We keep you in the loop, ensuring your vision
                                    stays at the heart of the process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>    
            <div className={`flex flex-row gap-10`}>
                
            </div>
            
        </section>
    );
}

export default WhyChoose