function Hero() {
    // alert(window.innerWidth)
    return (
        <section className={`w-full h-screen md:h-fit lg:h-screen px-6 sm:px-10 lg:px-16 pt-18 pb-12`}>
            <div className={`w-full h-full lg:bg-[#F4F8FB] rounded-lg flex flex-col sm:flex-row lg:flex-row justify-center`}>
                <div className={`w-full lg:w-1/2 lg:px-12 flex flex-col justify-center items-start gap-2.5`}>
                    <h1 className={`text-3xl sm:text-2xl lg:text-3xl font-bold`}>
                        <span>Crafting</span> <br />
                        <span className={`text-secondary`}>Digital Masterpiece</span><span>,</span> <br />
                        <span>Tailored for You</span>
                    </h1>
                    <p className={`text-md sm:text-sm lg:text-md`}>
                        We build responsive, modern websites, from simple landing pages to scalable web solutions, designed to meet your needs.
                    </p>
                    <button className={`bg-accent-2 flex flex-row items-center px-4 py-1.5 gap-3 rounded-xl`}>
                        <div className={`text-md sm:text-sm lg:text-md text-white font-medium`}>Get Your Website</div>
                        <div className={`w-6 h-6 bg-white rounded-full flex items-center justify-center`}>
                            <i className={`ri-arrow-right-line`} />
                        </div>
                    </button>
                </div>
                <div className={`w-full mt-16 sm:mt-0 sm:pl-10 md:pl-0 lg:w-1/2 lg:px-12 flex items-center justify-center`}>
                    <img src="/images/hero.png" alt="hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero