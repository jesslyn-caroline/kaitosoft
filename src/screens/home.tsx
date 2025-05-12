

function Home() {
    return (
        <div className={`w-full h-[1600px] flex flex-col`}>

            {/* Hero Section */}
            <div className={`w-full h-screen px-24 pt-24 pb-10`}>
                <div className={`w-full h-full bg-[#F4F8FB] rounded-[18px] flex flex-row`}>
                    <div className={`w-1/2 px-18 flex flex-col justify-center space-y-4`}>
                        <h1 className={`text-3xl font-bold text-black`}>
                            <span>Crafting </span>
                            <span className={`text-ball-blue`}>Digital Masterpiece</span>
                            <span>,</span>
                            <br/>
                            <span>One Line of Code at a Time</span>
                        </h1>
                        <h2 className={`text-xl text-black`}>
                            We turn your ideas into captivating modern websites, tailored to your need.
                        </h2>
                        <button className={`w-fit px-4 py-2 bg-bluish rounded-[18px] flex flex-row items-center space-x-2`}>
                            <span className={`text-white text-lg font-semibold`}>Get Your Website</span>
                            <div className={`w-6 h-6 bg-white rounded-full`}>
                                <i className={`ri-arrow-right-line`}></i>
                            </div>
                        </button>
                    </div>
                    <div className={`w-1/2 flex items-center justify-center`}>
                        <img src="/images/hero-img.png" alt="hero-img"/>
                    </div>
                </div>
            </div>

            {/* What we offer */}
            <div className={`w-full h-screen bg-red-500`}>
                
            </div>
        </div>
    )
}

export default Home