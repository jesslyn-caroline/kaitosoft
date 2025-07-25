

function Navbar() {
    return (
        <div className={`w-full h-16 px-10 md:px-12 lg:px-24 bg-white flex items-center justify-between fixed z-10`}>
            <div className={`flex items-center space-x-2`}>
                <h1 className={`font-bold text-2xl`}>
                    <span className={`text-primary dark:text-white`}>kaito</span>
                    <span className={`text-accent-2`}>soft</span>
                </h1>
                <img src="/images/up-chevron.png" alt="up-chevron"/>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Navbar