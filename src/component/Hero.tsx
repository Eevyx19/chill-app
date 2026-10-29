import { Info, VolumeOff } from "lucide-react"
import Button from "./UI/Button"
import Heading1 from "./UI/heading/Heading1"
import BodyMediumBold from "./UI/body-medium/BodyMediumBold"
import BodyLargeRegular from "./UI/body-large/BodyLargeRegular"
import BodyLargeMedium from "./UI/body-large/BodyLargeMedium"

interface HeroProps {
    movie: {
        img: string;
        title: string;
        description: string
        ageRating: string;
    }
}

export default function Hero(props: HeroProps) {

    const { movie } = props

    return (
        <section className="w-full h-56 sm:h-85 md:h-120 lg:h-155 px-5 sm:px-10 md:px-15 lg:px-20 py-10 sm:py-12 md:py-16 lg:py-20 bg-no-repeat bg-center bg-cover flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-10 justify-end"
            style={{
                backgroundImage: `
                    linear-gradient(
                        to top,
                        var(--page-background) 0%,
                        var(--page-background) 10%,
                        transparent 80%
                    ),
                    url(${movie.img})
                `
            }}
            aria-label="Sorotan film utama">
            <div className="w-full sm:w-[90%] md:w-146 lg:w-167 flex flex-col gap-3 md:gap-4 lg:gap-5">
                <Heading1 element="h1">
                    {movie.title}
                </Heading1>
                <BodyLargeMedium
                    element="p"
                    className="line-clamp-2 sm:line-clamp-3 md:line-clamp-none"
                >
                    {movie.description}
                </BodyLargeMedium>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Button
                        className={"bg-(--primary-100) hover:bg-(--primary-300) font-bold py-1 md:py-2 lg:py-3 px-3 md:px-5 lg:px-7"}
                        type="button"
                    >
                        <BodyMediumBold
                            element="span"
                        >
                            Mulai
                        </BodyMediumBold>
                    </Button>
                    <Button
                        className="flex items-center gap-2 bg-(--paper-background) font-bold py-1 md:py-2 lg:py-3 px-3 md:px-5 lg:px-7"
                        type="button"
                    >
                        <Info className="size-3 md:size-4 lg:size-5" />
                        <BodyMediumBold
                            element="span"
                        >
                            Selengkapnya
                        </BodyMediumBold>
                    </Button>
                    <BodyLargeRegular
                        element="span"
                        className="text-(--secondary-text) border border-(--secondary-text) rounded-full p-1 lg:p-2"
                        aria-label="untuk usia 18 tahun ke atas"
                    >
                        {movie.ageRating}
                    </BodyLargeRegular>
                </div>
                <Button
                    className="border border-(--secondary-text) p-2"
                    type="button"
                >
                    <VolumeOff className="size-3 md:size-4 lg:size-5 text-(--secondary-text)" aria-hidden="true" />
                </Button>

            </div>
        </section>
    )
}