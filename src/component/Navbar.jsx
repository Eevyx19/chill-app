import { Link, NavLink } from "react-router"
import Logo from "../assets/images/Logo.png"
import Profile from "../assets/images/profile.png"
import { ChevronDown, SquareArrowRightExit } from "lucide-react"
import { Star, User } from "@filled-lucide/react"

const Navbar = () => {

    const navList = [
        { id: 1, label: "Series", to: "#" },
        { id: 2, label: "Film", to: "#" },
        { id: 3, label: "Daftar Saya", to: "#" }
    ]

    const navProfile = [
        { id: 1, label: "Profil Saya", to: "#", icon: User },
        { id: 2, label: "Ubah Premium", to: "#", icon: Star },
        { id: 3, label: "Keluar", to: "#", icon: SquareArrowRightExit }
    ]

    return (
        <nav
            className="flex justify-between items-center py-2 md:py-4 lg:py-5 px-5 sm:px-10 md:px-15 lg:px-20"
            aria-label="Menu Utama"
        >
            <div className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-20">
                <Link
                    to={'/'}
                    aria-label="CHILL Beranda"
                    className="flex items-center gap-1 md:text-white md:no-underline"
                >
                    <img
                        src={Logo}
                        alt="Chill Logo"
                        className="w-5 md:w-6 lg:w-7 h-4 md:h-5 lg:h-6 "
                    />
                    <span className="hidden md:block font-londrina md:text-2xl md:leading-(--font-110) lg:text-3xl">
                        CHILL
                    </span>
                </Link>

                <ul className="flex items-center list-none gap-3 sm:gap-6 md:gap-10 lg:gap-20">
                    {navList.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => `hover:text-(--primary-default) text-xs md:text-base lg:text-lg no-underline font-medium transition-colors ${isActive ? "text-(--primary-text)" : "text-(--primary-default)"}`}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
            <div className=" group flex items-center relative gap-1 md:gap-2">
                <img
                    src={Profile}
                    className="w-5 sm:w-6 md:w-8 lg:w-10 h-5 sm:h-6 md:h-8 lg:h-10 rounded-full"
                    alt="Foto Profil"
                />
                <ChevronDown className="size-4 sm:size-5 md:size-6 lg:size-7 transition-transform duration-300 ease-in-out group-hover:rotate-180" />

                <ul className="hidden p-1 rounded-sm absolute top-full right-0 z-999 list-none bg-(--page-background) group-hover:block">
                    {navProfile.map((item) => {
                        const Icon = item.icon
                        return (
                            <li key={item.id} className="py-2 md:py-3 lg:py-4 px-3 md:px-4 lg:px-6">
                                <Link
                                    to={item.to}
                                    className="flex items-center justify-start gap-2 whitespace-nowrap no-underline text-(--primary-text) hover:text-(--primary-default)"
                                >
                                    <Icon className="size-4 md:size-5 lg:size-6" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar