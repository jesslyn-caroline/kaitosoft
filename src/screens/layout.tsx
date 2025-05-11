import { Outlet } from "react-router-dom"

import Navbar from "../components/navbar.tsx"

function Layout() {
    return (
        <div className={`w-full bg-white flex justify-center`}>
            <div className={`max-w-[1624px] w-screen h-screen flex flex-col`}>
                <Navbar/>
                <div className={`mt-16`}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout