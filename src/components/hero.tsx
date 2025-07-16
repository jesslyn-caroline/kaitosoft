function Hero() {
    return (
        <section className={`w-full h-screen px-10 md:px-12 lg:px-24 pb-8 pt-18 flex flex-col justify-center`}>
            <div className={`w-full h-full md:bg-[#F4F8FB] rounded-xl flex flex-col md:flex-row`}>
                <div className={`w-full md:w-5/10 md:px-10 lg:px-16 flex flex-col justify-center space-y-4`}>
                    <h1 className={`text-2xl md:text-xl lg:text-3xl font-bold`}>
                        Crafting 
                        <br/>
                        <span className={`text-pretty text-secondary`}> Digital Masterpiece</span>, 
                        <br/>
                        Tailored for You
                    </h1>
                    <h2 className={`text-sm xl:text-lg`}>
                        We build responsive, modern websites, from simple landing pages to scalable web solutions, designed to meet your needs.
                    </h2>
                    <button className={`text-md lg:text-lg text-white w-fit bg-accent-2 px-4 py-2 rounded-xl flex flex-row items-center space-x-2`}>
                        <span>Get Your Website</span>
                        <div className={`w-6 h-6 bg-white rounded-full flex justify-center items-center`}>
                            <i className={`ri-arrow-right-line text-black`}/>
                        </div>
                    </button>
                </div>
                <div className={`flex justify-center items-center p-6`}>
                    <img src="/images/hero-img.png" alt="hero" className={`w-md`}/>
                </div>
            </div>
        </section>
    )
}

export default Hero