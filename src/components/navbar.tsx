

function Navbar() {
    return (
        <div className={`w-full h-16 px-24 bg-white flex items-center justify-between fixed`}>
            <div className={`flex items-center space-x-2`}>
                <h1 className={`font-bold text-2xl`}>
                    <span className={`text-dark-blue`}>kaito</span>
                    <span className={`text-bluish`}>soft</span>
                </h1>
                <img src="/src/assets/up-chevron.png" alt="up-chevron"/>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Navbar