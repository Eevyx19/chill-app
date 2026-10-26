import { Star } from "lucide-react";
import Heading6 from "./UI/heading/Heading6";
import BodySmallRegular from "./UI/body-small/BodySmallRegular";
import NewEpsBadge from "./badge/NewEpisode";
import TopBadge from "./badge/Top";


export default function MovieCard(props) {

    const {
        landscape,
        img,
        title,
        rating,
        isNew,
        isTop
    } = props

    return (
        <li>
            <article className={`${landscape ? "w-78 lg:w-80 h-38 lg:h-40" : "w-24 sm:w-36 md:w-50 lg:w-58 h-36 sm:h-56 md:h-76 lg:h-91"} shrink-0`}>
                <figure
                    className="relative w-full h-full overflow-hidden rounded lg:rounded-lg "
                >
                    {isNew && <NewEpsBadge />}
                    {isTop && <TopBadge />}
                    <img
                        src={img}
                        alt={`Poster ${title}`}
                        className="h-full w-full object-cover"
                    />
                    {/* <img
                                src={testImg}
                                alt="Don't Look Up"
                                className="hidden absolute inset-0 h-64 w-full bg-cover bg-center group-hover:block"
                                /> */}
                    <div className="absolute inset-0 bg-linear-to-t from-(--paper-background)/30 via-(--paper-background)/20 to-transparent" />

                    {landscape &&
                        <figcaption className="absolute inset-x-0 bottom-0 p-4">
                            <div className="flex items-center justify-between gap-2">
                                <Heading6 element="h3">
                                    {title}
                                </Heading6>

                                <div className="flex shrink-0 items-center gap-1">
                                    <Star className="size-3" />
                                    <BodySmallRegular element="span">
                                        {rating}
                                    </BodySmallRegular>
                                </div>
                            </div>

                            {/* <div className="hidden flex-col justify-center gap-4 group-hover:flex">
                        <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                        <Button
                        className="bg-white p-3"
                        >
                        <Play className="size-7 text-(--page-background)" />
                        </Button>
                        <Button
                        className="border border-(--disable-text) p-3"
                        >
                        <Check className="size-7" />
                        </Button>
                        </div>
                        <Button
                        className="border border-(--disable-text) p-3"
                        >
                        <ChevronDown className="size-7" />
                        </Button>
                        </div>
                        <Heading6
                        element="h4"
                        >
                        "Episode 1"
                        </Heading6>
                        <div className="flex items-center gap-2">
                        <div className="h-1.5 w-full bg-slate-300 rounded-2xl overflow-hidden">
                        <div className="h-full w-[35%] bg-(--primary-default)"></div>
                        </div>
                        <BodyLargeMedium
                        element="p"
                        className="text-(--secondary-text) text-nowrap"
                        >
                        2j 33m
                        </BodyLargeMedium>
                        </div>
                        <BodyLargeSemibold
                        element="p"
                        className="flex items-center justify-between text-(--secondary-text)"
                        >
                        <span>Misteri</span>
                        <span className="w-2 h-2 bg-(--secondary-text) rounded-full"></span>
                        <span>Kriminal</span>
                        <span className="w-2 h-2 bg-(--secondary-text) rounded-full"></span>
                        <span>Fantasi</span>
                        </BodyLargeSemibold>
                        </div> */}
                        </figcaption>
                    }
                </figure>
            </article>
        </li>
    )
}