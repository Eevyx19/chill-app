import { Outlet } from "react-router"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer";

const MainLayout = () => {

    
    return (
        <>
            <header className="text-xs md:text-base lg:text-lg leading-(--line-140) font-medium">
                <Navbar />
            </header>

            <main className="flex flex-col">
                <Outlet />
            </main>

            <Footer />

        </>
    )
}

export default MainLayout