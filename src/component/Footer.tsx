import { ChevronRight } from "lucide-react";
import BodyMediumMedium from "./UI/body-medium/BodyMediumMedium";
import BodyMediumBold from "./UI/body-medium/BodyMediumBold";
import BodyMediumRegular from "./UI/body-medium/BodyMediumRegular";
import Logo from "../assets/images/Logo.png"
import { NavLink } from "react-router";

interface GenreType {
    id: string;
    label: string;
    path: string;
}

export default function Footer() {
    const genreList: GenreType[] = [
        { id: "1", label: "Aksi", path: "/" },
        { id: "2", label: "Anak-anak", path: "/" },
        { id: "3", label: "Britania", path: "/" },
        { id: "4", label: "Drama", path: "/" },
        { id: "5", label: "Fantasi & Ilmiah", path: "/" },
        { id: "6", label: "Kejahatan", path: "/" },
        { id: "7", label: "KDrama", path: "/" },
        { id: "8", label: "Komedi", path: "/" },
        { id: "9", label: "Petualangan", path: "/" },
        { id: "10", label: "Perang", path: "/" },
        { id: "11", label: "Romantis", path: "/" },
        { id: "12", label: "Sains & Alam", path: "/" },
        { id: "13", label: "Thriller", path: "/" }
    ]
    return (
        <footer className="w-full flex flex-col lg:flex-row justify-between px-5 md:px-15 lg:px-20 py-5 md:py-7.5 lg:py-10 border-t border-(--outline-border) gap-10 lg:gap-0">
            <div className="w-full lg:w-1/3 flex flex-col justify-center gap-4 lg:gap-6">
                <div className="flex items-center gap-1 lg:gap-2">
                    <img src={Logo} className="size-6 sm:size-7 md:size-9 lg:size-11" alt="Logo" />
                    <span className="font-londrina text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-(--line-110)">CHILL</span>
                </div>
                <BodyMediumRegular
                    element="p"
                    className="text-(--secondary-text)"
                >
                    &copy; 2023 Chill All Rights Reserved
                </BodyMediumRegular>
            </div>
            <nav className="w-full lg:w-2/3">
                <ul className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
                    <li className="w-full lg:w-2/3 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <BodyMediumBold
                                element="span"
                            >
                                Genre
                            </BodyMediumBold>
                            <ChevronRight className="sm:hidden size-6" />
                        </div>
                        <ul className="hidden sm:grid grid-cols-3 xl:grid-cols-4 text-(--secondary-text)">
                            {genreList.map((list) => (
                                <li key={list.id}>
                                    <NavLink
                                        to={list.path}
                                    >
                                        <BodyMediumMedium
                                            element="span"
                                            className="text-nowrap"
                                        >
                                            {list.label}
                                        </BodyMediumMedium>
                                    </NavLink>
                                </li>

                            ))}
                        </ul>
                    </li>
                    <li className="w-full lg:w-1/3 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <BodyMediumBold
                                element="span"
                            >
                                Bantuan
                            </BodyMediumBold>
                            <ChevronRight className="sm:hidden size-6" />
                        </div>
                        <ul className="hidden sm:block text-(--secondary-text)">
                            <li>
                                <BodyMediumMedium
                                    element="span"
                                >
                                    FAQ
                                </BodyMediumMedium>
                            </li>
                            <li>
                                <BodyMediumMedium
                                    element="span"
                                >
                                    Kontak Kami
                                </BodyMediumMedium>
                            </li>
                            <li>
                                <BodyMediumMedium
                                    element="span"
                                >
                                    Privasi
                                </BodyMediumMedium>
                            </li>
                            <li>
                                <BodyMediumMedium
                                    element="span"
                                >
                                    Syarat &amp; Ketentuan
                                </BodyMediumMedium>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}