import { Outlet, useLocation } from "react-router"
import BackgroundLogin from '../assets/images/bg-login.jpg'
import BackgroundRegister from '../assets/images/bg-register.jpg'

const AuthLayout = () => {
    const { pathname } = useLocation()

    const backgroundImage = pathname === "/login" ? BackgroundLogin : BackgroundRegister

    return (
        <main className="min-h-dvh bg-center bg-cover bg-no-repeat flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Outlet />
        </main>
    )

}

export default AuthLayout